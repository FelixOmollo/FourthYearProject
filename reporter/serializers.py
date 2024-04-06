from rest_framework import serializers
from .models import OutageReport, Outages 

class OutagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Outages
        fields = '__all__'

class OutageReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = OutageReport
        fields = ['full_name', 'id_number', 'email', 'phone_number', 'location', 'description']