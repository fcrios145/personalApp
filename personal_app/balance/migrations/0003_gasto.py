# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-02-22 22:57
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('balance', '0002_balance_tipogasto'),
    ]

    operations = [
        migrations.CreateModel(
            name='Gasto',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('importe', models.DecimalField(decimal_places=2, max_digits=10)),
                ('fecha', models.DateField()),
                ('nota', models.TextField()),
                ('observacion', models.TextField()),
                ('created_date', models.DateTimeField(auto_now_add=True)),
                ('modified_date', models.DateTimeField(auto_now=True)),
                ('categoria', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='balance.Categoria')),
                ('tipo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='balance.TipoGasto')),
            ],
        ),
    ]
