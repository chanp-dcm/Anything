# Generated by Django 2.0.7 on 2018-07-15 08:21

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Schema_test',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('schema_name', models.CharField(max_length=20)),
                ('describe', models.TextField()),
                ('term_of_use', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Table_test',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('schemaID', models.IntegerField()),
                ('table_name', models.CharField(max_length=20)),
                ('teble_name_Ja', models.CharField(max_length=30)),
                ('describe', models.TextField()),
            ],
        ),
    ]
