from django.contrib import admin
from .models import Categoria, TipoGasto, Balance, Gasto

# Register your models here.
admin.site.register(Categoria)
admin.site.register(TipoGasto)
admin.site.register(Balance)
admin.site.register(Gasto)