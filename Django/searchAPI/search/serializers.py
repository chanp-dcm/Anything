from rest_framework import serializers
from django_filters import rest_framework as filters
from search.models import Schema_test, Table_test

class Schema_testSerializer(serializers.ModelSerializer):
    class Meta:
        model = Schema_test
        fields = ('schema_name', 'describe', 'term_of_use')

class Table_testSerializer(serializers.ModelSerializer):
    class Meta:
        model = Table_test
        fields = ('table_name', 'describe')

class SearchSchema_testFilter(filters.FilterSet):
    schema_name = filters.CharFilter( lookup_expr='contains')

    class Meta:
        model = Schema_test
        fields = ('schema_name', 'describe', 'term_of_use')

class SearchTable_testFilter(filters.FilterSet):
    table_name = filters.CharFilter( lookup_expr='contains')

    class Meta:
        model = Table_test
        fields = ('table_name', 'describe')
