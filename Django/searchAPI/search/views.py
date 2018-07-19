from rest_framework import viewsets
from .models import Schema_test, Table_test
from .serializers import Schema_testSerializer, Table_testSerializer,SearchSchema_testFilter, SearchTable_testFilter


class Schema_testViewSet(viewsets.ModelViewSet):
    queryset = Schema_test.objects.all()
    serializer_class = Schema_testSerializer

class Table_testViewSet(viewsets.ModelViewSet):
    queryset = Table_test.objects.all()
    serializer_class = Table_testSerializer

class SearchSchema_testViewSet(viewsets.ModelViewSet):
    queryset = Schema_test.objects.all()
    serializer_class = Schema_testSerializer
    filter_class = SearchSchema_testFilter

class SearchTable_testViewSet(viewsets.ModelViewSet):
    queryset = Table_test.objects.all()
    serializer_class = Table_testSerializer
    filter_class = SearchTable_testFilter
