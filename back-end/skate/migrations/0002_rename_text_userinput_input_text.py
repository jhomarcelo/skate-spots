# Generated by Django 4.2.17 on 2024-12-10 18:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('skate', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='userinput',
            old_name='text',
            new_name='input_text',
        ),
    ]
