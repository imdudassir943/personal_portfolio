from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include([
        path('', include('apps.core.urls')),
        path('', include('apps.projects.urls')),
        path('', include('apps.skills.urls')),
        path('', include('apps.contact.urls')),
    ])),
]

# Serve media files in development only
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)