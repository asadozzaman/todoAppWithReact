from django.db import models
from django.db.models import fields
from .models import Todo
from rest_framework import serializers


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model =Todo
        fields = "__all__"
