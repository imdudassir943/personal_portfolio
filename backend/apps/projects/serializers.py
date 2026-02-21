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
        if obj.featured_image:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.featured_image.url)
            return obj.featured_image.url
        return None


class ProjectDetailSerializer(ProjectListSerializer):
    """Full serializer with gallery images for project detail view."""
    technologies = TechnologySerializer(many=True, read_only=True)
    images = ProjectImageSerializer(many=True, read_only=True)

    class Meta(ProjectListSerializer.Meta):
        fields = ProjectListSerializer.Meta.fields + ['images']