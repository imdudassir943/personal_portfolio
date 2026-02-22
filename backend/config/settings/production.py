"""
Production settings — extends base.py.
Intended for Railway, Render, or any VPS deployment.
"""

import dj_database_url
from .base import *  # noqa: F401,F403

DEBUG = False
ALLOWED_HOSTS = env.list('ALLOWED_HOSTS', default=[])

# ── Database (PostgreSQL via DATABASE_URL) ──────────────
DATABASES = {
    'default': dj_database_url.config(
        default=env('DATABASE_URL', default=''),
        conn_max_age=600,
        ssl_require=True,
    )
}

# ── Security Hardening ──────────────────────────────────
SECURE_SSL_REDIRECT = True
SECURE_HSTS_SECONDS = 31536000
SECURE_HSTS_INCLUDE_SUBDOMAINS = True
SECURE_HSTS_PRELOAD = True
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')

# ── Cloudinary (production media storage) ───────────────
DEFAULT_FILE_STORAGE = 'cloudinary_storage.storage.MediaCloudinaryStorage'
CLOUDINARY_STORAGE = {
    'CLOUD_NAME': env('CLOUDINARY_CLOUD_NAME', default=''),
    'API_KEY': env('CLOUDINARY_API_KEY', default=''),
    'API_SECRET': env('CLOUDINARY_API_SECRET', default=''),
}
