from rest_framework import viewsets, permissions, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Project, Technology
from .serializers import (
    ProjectListSerializer, ProjectDetailSerializer, TechnologySerializer
)


class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    """
    GET /api/projects/          → list (ProjectListSerializer)
    GET /api/projects/{slug}/   → detail (ProjectDetailSerializer)
    GET /api/projects/?tag=web-design&featured=true  → filtered
    """
    queryset = Project.objects.filter(is_published=True).prefetch_related(
        'technologies', 'images'
    )
    permission_classes = [permissions.AllowAny]
    lookup_field = 'slug'
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['tag', 'is_featured']
    search_fields = ['title', 'description', 'technologies__name']
    ordering_fields = ['sort_order', 'created_at']

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return ProjectDetailSerializer
        return ProjectListSerializer


class TechnologyViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Technology.objects.all()
    serializer_class = TechnologySerializer
    permission_classes = [permissions.AllowAny]
    pagination_class = None