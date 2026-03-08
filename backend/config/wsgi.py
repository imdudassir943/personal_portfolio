"""
WSGI config for Portfolio backend.
Exposes the WSGI callable as a module-level variable named ``application``.
"""

import os
from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings.production')

application = get_wsgi_application()

# Collect static files automatically on startup (needed for Render deployments)
if not os.environ.get('DJANGO_SETTINGS_MODULE', '').endswith('development'):
    from django.core.management import call_command
    try:
        call_command('collectstatic', '--noinput', verbosity=0)
    except Exception:
        pass
