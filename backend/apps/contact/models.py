from django.db import models
from apps.core.models import TimeStampedModel


class ContactSubmission(TimeStampedModel):
    """Stores every contact form submission. Maps to your ContactFormData interface."""
    STATUS_CHOICES = [
        ('new', 'New'),
        ('read', 'Read'),
        ('replied', 'Replied'),
        ('archived', 'Archived'),
    ]

    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=200, blank=True, default='')
    message = models.TextField()
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='new')

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.name} — {self.subject or "No Subject"} ({self.status})'