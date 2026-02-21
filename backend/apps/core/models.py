import uuid
from django.db import models


class TimeStampedModel(models.Model):
    """Abstract base model with created/updated timestamps."""
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True
        ordering = ['-created_at']


class SiteSettings(models.Model):
    """Singleton model for global site configuration. Managed via Admin."""
    site_title = models.CharField(max_length=100, default='Portfolio')
    tagline = models.CharField(max_length=200, default='Creative Developer')
    hero_heading = models.CharField(max_length=200, default='Crafting Digital Experiences')
    hero_subheading = models.TextField(
        default='I transform ideas into elegant, functional, and memorable digital solutions.'
    )
    profile_image = models.ImageField(upload_to='profile/', blank=True)
    resume_file = models.FileField(upload_to='resume/', blank=True)

    # Stats (shown in Hero section)
    years_experience = models.PositiveIntegerField(default=5)
    projects_completed = models.PositiveIntegerField(default=50)
    happy_clients = models.PositiveIntegerField(default=30)

    class Meta:
        verbose_name = 'Site Settings'
        verbose_name_plural = 'Site Settings'

    def __str__(self):
        return self.site_title

    def save(self, *args, **kwargs):
        """Enforce singleton — only one SiteSettings row ever exists."""
        self.pk = 1
        super().save(*args, **kwargs)

    @classmethod
    def load(cls):
        obj, _ = cls.objects.get_or_create(pk=1)
        return obj


class SocialLink(TimeStampedModel):
    """Social media links displayed in the footer."""
    PLATFORM_CHOICES = [
        ('github', 'GitHub'),
        ('linkedin', 'LinkedIn'),
        ('whatsapp', 'WhatsApp'),
        ('instagram', 'Instagram'),
        ('other', 'Other'),
    ]
    platform = models.CharField(max_length=20, choices=PLATFORM_CHOICES)
    label = models.CharField(max_length=50)
    url = models.URLField()
    icon_class = models.CharField(max_length=50, blank=True, help_text='CSS icon class or emoji')
    sort_order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['sort_order']

    def __str__(self):
        return f'{self.label} ({self.platform})'