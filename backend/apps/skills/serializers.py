from rest_framework import serializers
from .models import SkillCategory, SkillItem


class SkillItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = SkillItem
        fields = ['id', 'name']


class SkillCategorySerializer(serializers.ModelSerializer):
    items = serializers.SerializerMethodField()

    class Meta:
        model = SkillCategory
        fields = ['id', 'icon', 'title', 'description', 'items']

    def get_items(self, obj):
        """Return items as a flat list of strings to match your frontend Skill interface."""
        return list(obj.items.values_list('name', flat=True))