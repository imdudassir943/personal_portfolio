from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets, permissions
from .models import SiteSettings, SocialLink
from .serializers import SiteSettingsSerializer, SocialLinkSerializer


class SiteSettingsView(APIView):
    """GET-only endpoint returning singleton site settings."""
    permission_classes = [permissions.AllowAny]

    def get(self, request):
        settings = SiteSettings.load()
        serializer = SiteSettingsSerializer(settings, context={'request': request})
        return Response(serializer.data)


class SocialLinkViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = SocialLink.objects.filter(is_active=True)
    serializer_class = SocialLinkSerializer
    permission_classes = [permissions.AllowAny]
    pagination_class = None  # No pagination for social links