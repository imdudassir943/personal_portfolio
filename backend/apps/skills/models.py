from django.db import models
from apps.core.models import TimeStampedModel


class SkillCategory(TimeStampedModel):
    """A category of skills (Frontend, Backend, Design, DevOps)."""
    icon = models.CharField(max_length=10, help_text='Emoji icon, e.g. 💻')
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=500)
    sort_order = models.PositiveIntegerField(default=0)

    class Meta:
        verbose_name_plural = 'Skill Categories'
        ordering = ['sort_order']

    def __str__(self):
        return self.title


class SkillItem(models.Model):
    """Individual skill within a category."""
    category = models.ForeignKey(
        SkillCategory, on_delete=models.CASCADE, related_name='items'
    )
    name = models.CharField(max_length=100)
    sort_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['sort_order']

    def __str__(self):
        return f'{self.name} ({self.category.title})'
