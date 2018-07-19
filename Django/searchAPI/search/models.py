from django.db import models


class Schema_test(models.Model):
    schema_name = models.CharField(max_length=20)
    describe = models.TextField()
    term_of_use = models.TextField()

class Table_test(models.Model):
    schemaID = models.IntegerField()
    table_name = models.CharField(max_length=20)
    describe = models.TextField()
