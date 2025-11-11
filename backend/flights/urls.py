from django.urls import path
from .views import FlightListCreateView, FlightDetailView

urlpatterns = [
    path('flights/', FlightListCreateView.as_view(), name='flight-list-create'),
    path('flights/<int:pk>/', FlightDetailView.as_view(), name='flight-detail'),
]
