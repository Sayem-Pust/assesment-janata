from rest_framework import serializers
from .models import FileUp

class CSVFileUploadSerializer(serializers.Serializer):
    file_up = serializers.FileField()


class CSVDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = FileUp
        fields = '__all__'
