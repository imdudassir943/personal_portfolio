from django.contrib import admin
from .models import SkillCategory, SkillItem


class SkillItemInline(admin.TabularInline):
    """Inline skill items on the SkillCategory admin page."""
    model = SkillItem
    extra = 1
    fields = ['name', 'sort_order']
    ordering = ['sort_order']


@admin.register(SkillCategory)
class SkillCategoryAdmin(admin.ModelAdmin):
    list_display = ['icon', 'title', 'description', 'sort_order']
    list_editable = ['sort_order']
    search_fields = ['title']
    readonly_fields = ['created_at', 'updated_at']
    inlines = [SkillItemInline]


@admin.register(SkillItem)
class SkillItemAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'sort_order']
    list_filter = ['category']
    list_editable = ['sort_order']
    ordering = ['category', 'sort_order']
