# Generated by Django 3.1.3 on 2020-11-17 06:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('demo', '0002_auto_20201115_0823'),
    ]

    operations = [
        migrations.CreateModel(
            name='BookNumber',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('isbn_10', models.CharField(blank=True, max_length=10)),
                ('isbn_13', models.CharField(blank=True, max_length=13)),
            ],
        ),
        migrations.AddField(
            model_name='book',
            name='number',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='demo.booknumber'),
        ),
    ]
