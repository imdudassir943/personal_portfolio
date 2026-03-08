#!/usr/bin/env bash
# Render build script
set -o errexit

pip install -r requirements.txt

export DJANGO_SETTINGS_MODULE=config.settings.production
python manage.py collectstatic --noinput
python manage.py migrate
