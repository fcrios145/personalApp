from .base import *

DEBUG = True

DATABASES = {
    # 'default': {
    #     'ENGINE': 'django.db.backends.mysql',
    #     'NAME': 'personal_app',
    #     'USER': 'root',
    #     'PASSWORD': 'rios',
    #     'HOST': 'localhost',
    #     'OPTIONS': {
    #             'init_command': "SET sql_mode='STRICT_TRANS_TABLES'"
    #         }
    # }
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': 'personal_app_db',
    }
}
