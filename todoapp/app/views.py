from django.shortcuts import render
from .models import Todo
from .serializers import TodoSerializer
from rest_framework.viewsets import ModelViewSet
# Create your views here.

class TodoView(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
