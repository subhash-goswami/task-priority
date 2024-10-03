from django.db import models


class Task(models.Model):
    PRIORITY_CHOICES = [
        ('low', 'Low'),
        ('medium', 'Medium'),
        ('high', 'High'),
    ]

    title = models.CharField(max_length=200)
    description = models.TextField()
    priority = models.CharField(max_length=6, choices=PRIORITY_CHOICES)
    due_date = models.DateField()

    def __str__(self):
        return self.title
