"""
Development settings — extends base.py.
Uses SQLite for zero-setup local development.
"""

from .base import *  # noqa: F401,F403

DEBUG = True
ALLOWED_HOSTS = ['*']

# ── Database (SQLite for local dev) ─────────────────────
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# ── CORS (allow all in dev) ─────────────────────────────
CORS_ALLOW_ALL_ORIGINS = True
