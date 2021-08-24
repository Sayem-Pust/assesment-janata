from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FileUploadApiView, CSVDataModelViewSet

routers = DefaultRouter()
routers.register('data', CSVDataModelViewSet)

urlpatterns = [
    path('', include(routers.urls)),
    path('file', FileUploadApiView.as_view(), name="file_upload"),
]
