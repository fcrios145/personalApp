from django.db import models

# Create your models here.
class Categoria(models.Model):
    nombre  = models.CharField(max_length=200)
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)

    def __str__(self):
       return self.nombre

class TipoGasto(models.Model):
    nombre = models.CharField(max_length=200)
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)

    def __str__(self):
       return self.nombre

class Balance(models.Model):
    fecha = models.DateField()
    importe_tarjeta = models.DecimalField(max_digits=10, decimal_places=2)
    importe_efectivo = models.DecimalField(max_digits=10, decimal_places=2)
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)

    def __str__(self):
       return "Fecha: %s | Tarjeta: %s | Efectivo: %s" % (self.fecha.strftime("%Y-%m-%d"), str(self.importe_tarjeta), str(self.importe_efectivo))

class Gasto(models.Model):
    importe = models.DecimalField(max_digits=10, decimal_places=2)
    fecha = models.DateField()
    nota = models.TextField()
    observacion = models.TextField()
    categoria = models.ForeignKey('Categoria', on_delete=models.CASCADE)
    tipo = models.ForeignKey('TipoGasto', on_delete=models.CASCADE)
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)
    
    def __str__(self):
       return str(self.importe) + " - " + self.fecha.strftime("%Y-%m-%d")

from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)