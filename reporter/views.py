from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Outages
from .serializers import OutageReportSerializer, OutagesSerializer
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes

class OutagesAPIView(APIView):
    def get(self, request):
        outages = Outages.objects.all()
        serializer = OutagesSerializer(outages, many=True)
        return Response(serializer.data)
    
@api_view(['POST'])
def report_outage(request):
    serializer = OutageReportSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(reported_by=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
