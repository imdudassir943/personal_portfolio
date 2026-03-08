import logging

from django.conf import settings
from django.core.mail import send_mail
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.throttling import AnonRateThrottle
from .serializers import ContactSubmissionSerializer

logger = logging.getLogger(__name__)


class ContactThrottle(AnonRateThrottle):
    rate = '5/hour'  # Prevent spam


class ContactSubmitView(APIView):
    """
    POST /api/contact/  — Public endpoint for contact form.
    Throttled to 5 requests/hour per IP.
    """
    permission_classes = [AllowAny]
    throttle_classes = [ContactThrottle]

    def post(self, request):
        serializer = ContactSubmissionSerializer(data=request.data)
        if serializer.is_valid():
            submission = serializer.save()
            self._send_notification_email(submission)
            return Response(
                {'status': 'success', 'message': "Thank you! I'll get back to you soon."},
                status=status.HTTP_201_CREATED,
            )
        return Response(
            {'status': 'error', 'message': 'Validation failed.',
                'errors': serializer.errors},
            status=status.HTTP_400_BAD_REQUEST,
        )

    @staticmethod
    def _send_notification_email(submission):
        """Send an email notification to the site owner about the new message."""
        recipient = getattr(settings, 'CONTACT_EMAIL',
                            '') or settings.EMAIL_HOST_USER
        if not recipient:
            logger.warning(
                'No CONTACT_EMAIL or EMAIL_HOST_USER configured; skipping email.')
            return

        subject = f'New Contact: {submission.subject or "No Subject"} — from {submission.name}'
        body = (
            f'Name: {submission.name}\n'
            f'Email: {submission.email}\n'
            f'Subject: {submission.subject or "N/A"}\n\n'
            f'Message:\n{submission.message}'
        )
        try:
            send_mail(
                subject=subject,
                message=body,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[recipient],
                fail_silently=False,
            )
        except Exception:
            logger.exception('Failed to send contact notification email.')
