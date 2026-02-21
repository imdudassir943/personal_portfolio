from django.contrib import admin
from .models import SiteSettings, SocialLink


@admin.register(SiteSettings)
class SiteSettingsAdmin(admin.ModelAdmin):
    list_display = ['site_title', 'tagline',
                    'years_experience', 'projects_completed', 'happy_clients']
    fieldsets = [
        ('Hero Content', {
            'fields': ('site_title', 'tagline', 'hero_heading', 'hero_subheading', 'profile_image'),
        }),
        ('Stats', {
            'fields': ('years_experience', 'projects_completed', 'happy_clients'),
        }),
        ('Files', {
            'fields': ('resume_file',),
        }),
    ]

    def has_add_permission(self, request):
        """Prevent creating more than one SiteSettings."""
        return not SiteSettings.objects.exists()

    def has_delete_permission(self, request, obj=None):
        return False


@admin.register(SocialLink)
class SocialLinkAdmin(admin.ModelAdmin):
    list_display = ['label', 'platform', 'url', 'sort_order', 'is_active']
    list_filter = ['platform', 'is_active']
    list_editable = ['sort_order', 'is_active']
    search_fields = ['label', 'url']
    ordering = ['sort_order']
