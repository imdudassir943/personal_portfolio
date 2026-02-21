from rest_framework import serializers
from .models import ContactSubmission


class ContactSubmissionSerializer(serializers.ModelSerializer):
    """Public-facing serializer — accepts form data, hides internal fields."""
    class Meta:
        model = ContactSubmission
        fields = ['name', 'email', 'subject', 'message']

    def validate_name(self, value):
        if len(value.strip()) < 2:
            raise serializers.ValidationError('Name must be at least 2 characters.')
        return value.strip()

    def validate_email(self, value):
        return value.strip().lower()

    def validate_message(self, value):
        if len(value.strip()) < 10:
            raise serializers.ValidationError('Message must be at least 10 characters.')
        return value.strip()


class ContactSubmissionAdminSerializer(serializers.ModelSerializer):
    """Admin-only serializer — full visibility."""
    class Meta:
        model = ContactSubmission
        fields = '__all__'