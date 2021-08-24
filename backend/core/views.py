from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
import datetime
import pandas as pd
from .models import FileUp
from .serializers import CSVDataSerializer


class FileUploadApiView(APIView):
    def post(self, request):
        data = request.FILES.get('file_up')
        df = pd.read_csv(data)
        # print(df.columns)
        dict_list = df.to_dict(orient="records")
        # print(dict_list)
        for row in dict_list[0:30]:
            date = datetime.datetime.strptime(row['date'], "%Y-%m-%d").date()
            FileUp.objects.create(
                date=date,
                trade_code=row['trade_code'],
                high=row['high'],
                low=row['low'],
                open=row['open'],
                close=row['close'],
                volume=row['volume']
            )
        return Response('Success')


class CSVDataModelViewSet(ModelViewSet):
    queryset = FileUp.objects.all()
    serializer_class = CSVDataSerializer
