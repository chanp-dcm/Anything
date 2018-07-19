from django.contrib import admin
from .models import Schema_test, Table_test

# Register your models here.
@admin.register(Schema_test)
class Schema_testAdmin(admin.ModelAdmin):
        pass

@admin.register(Table_test)
class Table_testAdmin(admin.ModelAdmin):
        pass
