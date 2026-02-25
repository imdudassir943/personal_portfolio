from rest_framework import serializers
from .models import Technology, Project, ProjectImage


class TechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = Technology
        fields = ['id', 'name', 'slug']


class ProjectImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectImage
        fields = ['id', 'image', 'caption', 'sort_order']


class ProjectListSerializer(serializers.ModelSerializer):
    """Lightweight serializer for the projects grid."""
    technologies = serializers.StringRelatedField(many=True)
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = [
            'id', 'slug', 'tag', 'title', 'description', 'gradient',
            'technologies', 'live_url', 'github_url', 'image_url',
            'is_featured', 'created_at',
        ]

    def get_image_url(self, obj):
        request = self.context.get('request')

        # 1. Use featured_image if available
        if obj.featured_image:
            if request:
                return request.build_absolute_uri(obj.featured_image.url)
            return obj.featured_image.url

        # 2. Fall back to first gallery image
        first_image = obj.images.order_by('sort_order').first()
        if first_image and first_image.image:
            if request:
                return request.build_absolute_uri(first_image.image.url)
            return first_image.image.url

        return None


class ProjectDetailSerializer(ProjectListSerializer):
    """Full serializer with gallery images for project detail view."""
    technologies = TechnologySerializer(many=True, read_only=True)
    images = ProjectImageSerializer(many=True, read_only=True)

    class Meta(ProjectListSerializer.Meta):
        fields = ProjectListSerializer.Meta.fields + ['images']
