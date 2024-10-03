from rest_framework import generics, mixins
from rest_framework.generics import GenericAPIView

from core.models import Task
from .serializers import TaskSerializer


class TaskListByPriorityView(generics.ListAPIView):
    serializer_class = TaskSerializer

    def get_queryset(self):
        priority = self.request.query_params.get("priority")
        return Task.objects.filter(priority=priority)


class TaskAPIView(
    mixins.CreateModelMixin,
    mixins.UpdateModelMixin,
    mixins.DestroyModelMixin,
    GenericAPIView,
):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)
