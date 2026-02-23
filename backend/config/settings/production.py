"""
Production settings — extends base.py.
Intended for Railway, Render, or any VPS deployment.
"""

import dj_database_url
from .base import *  # noqa: F401,F403
import os

DEBUG = False
ALLOWED_HOSTS = os.environ.get('ALLOWED_HOSTS', '').split(',')

# ── Database (PostgreSQL via DATABASE_URL) ──────────────
DATABASES = {
    'default': dj_database_url.config(
        default=os.environ.get('DATABASE_URL', default=''),
        conn_max_age=600,
        ssl_require=True,
    )
}
DATABASES['default']['OPTIONS'] = {'sslmode': 'require'}

# ── Security Hardening ──────────────────────────────────
SECURE_SSL_REDIRECT = True
SECURE_HSTS_SECONDS = 31536000
SECURE_HSTS_INCLUDE_SUBDOMAINS = True
SECURE_HSTS_PRELOAD = True
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')

# ── Cloudinary (production media storage) ───────────────
STORAGES = {
    'default': {
        'BACKEND': 'cloudinary_storage.storage.MediaCloudinaryStorage',
    },
    'staticfiles': {
        'BACKEND': 'whitenoise.storage.CompressedManifestStaticFilesStorage',
    },
}
CLOUDINARY_STORAGE = {
    'CLOUD_NAME': os.environ.get('CLOUDINARY_CLOUD_NAME', default=''),
    'API_KEY': os.environ.get('CLOUDINARY_API_KEY', default=''),
    'API_SECRET': os.environ.get('CLOUDINARY_API_SECRET', default=''),
}
