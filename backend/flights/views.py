from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from flights.models import Flight
from flights.serializers import FlightSerializer
from flights.permissions import IsAdminOrReadOnly


class FlightListCreateView(APIView):
    permission_classes = [IsAdminOrReadOnly]

    def get(self, request):
        flights = Flight.objects.all()

        departure = request.query_params.get('departure_airport')
        arrival = request.query_params.get('arrival_airport')
        date = request.query_params.get('date')

        if departure:
            flights = flights.filter(departure_airport__icontains=departure)
        if arrival:
            flights = flights.filter(arrival_airport__icontains=arrival)
        if date:
            flights = flights.filter(departure_time__date=date)

        serializer = FlightSerializer(flights, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = FlightSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class FlightDetailView(APIView):
    permission_classes = [IsAdminOrReadOnly]

    def get_object(self, pk):
        try:
            return Flight.objects.get(pk=pk)
        except Flight.DoesNotExist:
            return None

    def get(self, request, pk):
        flight = self.get_object(pk)
        if not flight:
            return Response({'detail': 'Flight not found.'}, status=status.HTTP_404_NOT_FOUND)
        serializer = FlightSerializer(flight)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        flight = self.get_object(pk)
        if not flight:
            return Response({'detail': 'Flight not found.'}, status=status.HTTP_404_NOT_FOUND)
        serializer = FlightSerializer(flight, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        flight = self.get_object(pk)
        if not flight:
            return Response({'detail': 'Flight not found.'}, status=status.HTTP_404_NOT_FOUND)
        flight.delete()
        return Response({'detail': 'Flight deleted successfully.'}, status=status.HTTP_204_NO_CONTENT)
