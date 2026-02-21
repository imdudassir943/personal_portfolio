from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SiteSettingsView, SocialLinkViewSet

router = DefaultRouter()
router.register(r'social-links', SocialLinkViewSet, basename='social-link')

urlpatterns = [
    path('settings/', SiteSettingsView.as_view(), name='site-settings'),
    path('', include(router.urls)),
]