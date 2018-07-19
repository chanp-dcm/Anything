from django.conf.urls import url, include
from django.contrib import admin

from search.urls import router as search_router
from search import views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^search/', include(search_router.urls)),
]
