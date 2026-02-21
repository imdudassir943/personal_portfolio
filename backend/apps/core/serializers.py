from rest_framework import serializers
from .models import SiteSettings, SocialLink


class SiteSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteSettings
        fields = [
            'site_title', 'tagline', 'hero_heading', 'hero_subheading',
            'profile_image', 'resume_file',
            'years_experience', 'projects_completed', 'happy_clients',
        ]


class SocialLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialLink
        fields = ['id', 'platform', 'label', 'url', 'icon_class']