from rest_framework import viewsets, permissions
from .models import SkillCategory
from .serializers import SkillCategorySerializer


class SkillCategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = SkillCategory.objects.prefetch_related('items')
    serializer_class = SkillCategorySerializer
    permission_classes = [permissions.AllowAny]
    pagination_class = None  # Return all skill categories at once