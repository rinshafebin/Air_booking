from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

# Create your views here.
class FlightSearchView(APIView):
    permission_classes=[IsAuthenticated]
    
    def get(self,request):
        