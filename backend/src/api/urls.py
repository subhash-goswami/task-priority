from django.urls import path
from .views import (
    TaskListByPriorityView,
    TaskAPIView,
)

urlpatterns = [
    path("tasks", TaskListByPriorityView.as_view(), name="tasks-by-priority"),
    path("task/", TaskAPIView.as_view(), name="create-task"),
    path("task/<int:pk>/", TaskAPIView.as_view(), name="update-and-task"),
]
