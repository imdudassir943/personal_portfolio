"""
WSGI config for Portfolio backend.
Exposes the WSGI callable as a module-level variable named ``application``.
"""

from django.core.wsgi import get_wsgi_application
import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings.production')

# Run collectstatic BEFORE creating the WSGI app so WhiteNoise
# can see the files when it initializes its middleware.
if not os.environ.get('DJANGO_SETTINGS_MODULE', '').endswith('development'):
    django.setup()
    from django.core.management import call_command
    try:
        call_command('collectstatic', '--noinput', verbosity=0)
    except Exception:
        pass

application = get_wsgi_application()
