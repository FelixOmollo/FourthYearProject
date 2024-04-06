from django.urls import path
from .views import OutagesAPIView


urlpatterns = [
    path('api/outages/', OutagesAPIView.as_view(), name='outages_api'),
    # Add other URL patterns as needed
]