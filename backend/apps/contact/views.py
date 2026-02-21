from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.throttling import AnonRateThrottle
from .serializers import ContactSubmissionSerializer


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
            serializer.save(
                ip_address=self.get_client_ip(request),
                user_agent=request.META.get('HTTP_USER_AGENT', ''),
            )
            return Response(
                {'status': 'success', 'message': "Thank you! I'll get back to you soon."},
                status=status.HTTP_201_CREATED,
            )
        return Response(
            {'status': 'error', 'message': 'Validation failed.', 'errors': serializer.errors},
            status=status.HTTP_400_BAD_REQUEST,
        )

    @staticmethod
    def get_client_ip(request):
        x_forwarded = request.META.get('HTTP_X_FORWARDED_FOR')
        return x_forwarded.split(',')[0].strip() if x_forwarded else request.META.get('REMOTE_ADDR')