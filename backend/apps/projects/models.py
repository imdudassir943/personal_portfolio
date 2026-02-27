from django.db import models
from django.utils.text import slugify
from apps.core.models import TimeStampedModel


class Technology(models.Model):
    """Reusable technology/skill tag (React, Django, etc.)."""
    name = models.CharField(max_length=50, unique=True)
    slug = models.SlugField(max_length=60, unique=True, blank=True)

    class Meta:
        verbose_name_plural = 'Technologies'
        ordering = ['name']

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name


class Project(TimeStampedModel):
    """A portfolio project. Maps directly to your frontend Project interface."""
    TAG_CHOICES = [
        ('web-design', 'Web Design'),
        ('app-development', 'App Development'),
        ('brand-identity', 'Brand Identity'),
        ('dashboard-design', 'Dashboard Design'),
        ('mobile-app', 'Mobile App'),
        ('ai-ml', 'AI/ML'),
        ('other', 'Other'),
    ]

    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=220, unique=True, blank=True)
    tag = models.CharField(max_length=30, choices=TAG_CHOICES, default='web-design')
    description = models.TextField()
    gradient = models.CharField(
        max_length=100,
        default='bg-gradient-to-br from-mint to-teal',
        help_text='Tailwind gradient class string'
    )

    # Relationships
    technologies = models.ManyToManyField(Technology, related_name='projects', blank=True)

    # Links
    live_url = models.URLField(blank=True, default='')
    github_url = models.URLField(blank=True, default='')

    # Images — supports multiple screenshots
    featured_image = models.ImageField(upload_to='projects/featured/', blank=True)

    # Display control
    is_featured = models.BooleanField(default=False, help_text='Show on homepage')
    is_published = models.BooleanField(default=True)
    sort_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['sort_order', '-created_at']

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title


class ProjectImage(TimeStampedModel):
    """Additional screenshots/images for a project."""
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='projects/gallery/')
    caption = models.CharField(max_length=500, blank=True)
    sort_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['sort_order']

    def __str__(self):
        return f'{self.project.title} — Image {self.sort_order}'