from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SkillCategoryViewSet

router = DefaultRouter()
router.register(r'skills', SkillCategoryViewSet, basename='skill')

urlpatterns = [
    path('', include(router.urls)),
]