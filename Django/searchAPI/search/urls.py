from rest_framework import routers
from .views import Schema_testViewSet, Table_testViewSet, SearchSchema_testViewSet, SearchTable_testViewSet


router = routers.DefaultRouter()
router.register(r'all_schemas', Schema_testViewSet)
router.register(r'all_tables', Table_testViewSet)
router.register(r'schema', SearchSchema_testViewSet)
router.register(r'table', SearchTable_testViewSet)
urlpatterns = router.urls
