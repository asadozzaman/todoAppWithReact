from django.db import models

# Create your models here.

class Todo(models.Model):
    text = models.TextField(max_length=50)
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.text