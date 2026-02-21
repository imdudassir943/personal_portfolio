from django.contrib import admin
from .models import Technology, Project, ProjectImage


@admin.register(Technology)
class TechnologyAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug']
    search_fields = ['name']
    prepopulated_fields = {'slug': ('name',)}


class ProjectImageInline(admin.TabularInline):
    """Inline gallery images on the Project admin page."""
    model = ProjectImage
    extra = 1
    fields = ['image', 'caption', 'sort_order']
    ordering = ['sort_order']


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['title', 'tag', 'is_featured',
                    'is_published', 'sort_order', 'created_at']
    list_filter = ['tag', 'is_featured', 'is_published']
    list_editable = ['is_featured', 'is_published', 'sort_order']
    search_fields = ['title', 'description']
    prepopulated_fields = {'slug': ('title',)}
    filter_horizontal = ['technologies']
    readonly_fields = ['created_at', 'updated_at']
    inlines = [ProjectImageInline]
    fieldsets = [
        (None, {
            'fields': ('title', 'slug', 'tag', 'description', 'gradient'),
        }),
        ('Links', {
            'fields': ('live_url', 'github_url'),
        }),
        ('Media', {
            'fields': ('featured_image',),
        }),
        ('Technologies', {
            'fields': ('technologies',),
        }),
        ('Display Control', {
            'fields': ('is_featured', 'is_published', 'sort_order'),
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',),
        }),
    ]


@admin.register(ProjectImage)
class ProjectImageAdmin(admin.ModelAdmin):
    list_display = ['project', 'caption', 'sort_order']
    list_filter = ['project']
    ordering = ['project', 'sort_order']
