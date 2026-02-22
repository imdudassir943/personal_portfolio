"""
django-filter integration for the Projects app.
"""

import django_filters
from django.db import models
from .models import Project


class ProjectFilter(django_filters.FilterSet):
    """
    Filters for the Project API endpoint.
    Usage: /api/projects/?tag=web-design&is_featured=true&search=react
    """
    tag = django_filters.CharFilter(field_name='tag', lookup_expr='exact')
    is_featured = django_filters.BooleanFilter(field_name='is_featured')
    technology = django_filters.CharFilter(
        field_name='technologies__slug',
        lookup_expr='exact',
        label='Filter by technology slug',
    )
    search = django_filters.CharFilter(method='filter_search', label='Search')

    class Meta:
        model = Project
        fields = ['tag', 'is_featured', 'technology']

    def filter_search(self, queryset, name, value):
        return queryset.filter(
            models.Q(title__icontains=value) |
            models.Q(description__icontains=value) |
            models.Q(technologies__name__icontains=value)
        ).distinct()
