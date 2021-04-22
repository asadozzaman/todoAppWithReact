
from django.contrib import admin
from django.db import router
from django.urls import path,include
from app.views import TodoView
from rest_framework import routers

route = routers.DefaultRouter()
route.register("",TodoView,basename="todoview")

urlpatterns = [
    path('admin/', admin.site.urls),
    path("",include(route.urls))
]
