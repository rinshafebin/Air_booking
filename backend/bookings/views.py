from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from bookings.models import Booking
from bookings.serializers import BookingSerializer
from flights.models import Flight

class BookingListCreateView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        if request.user.is_staff:
            bookings = Booking.objects.all()
        else:
            bookings = Booking.objects.filter(user=request.user)
        
        serializer = BookingSerializer(bookings, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        flight_id = request.data.get('flight')
        seat_count = request.data.get('seat_count', 1)

        try:
            flight = Flight.objects.get(id=flight_id)
        except Flight.DoesNotExist:
            return Response({'detail': 'Flight not found.'}, status=status.HTTP_404_NOT_FOUND)


        if flight.available_seats < int(seat_count):
            return Response({'detail': 'Not enough seats available.'}, status=status.HTTP_400_BAD_REQUEST)


        flight.available_seats -= int(seat_count)
        flight.save()

        booking = Booking.objects.create(
            user=request.user,
            flight=flight,
            seat_count=seat_count,
            payment_status='completed'  
        )

        serializer = BookingSerializer(booking)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class BookingDetailView(APIView):

    permission_classes = [IsAuthenticated]

    def get_object(self, pk):
        try:
            return Booking.objects.get(pk=pk)
        except Booking.DoesNotExist:
            return None

    def get(self, request, pk):
        booking = self.get_object(pk)
        if not booking:
            return Response({'detail': 'Booking not found.'}, status=status.HTTP_404_NOT_FOUND)

        if not (request.user.is_staff or booking.user == request.user):
            return Response({'detail': 'Not authorized.'}, status=status.HTTP_403_FORBIDDEN)

        serializer = BookingSerializer(booking)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def delete(self, request, pk):
        booking = self.get_object(pk)
        if not booking:
            return Response({'detail': 'Booking not found.'}, status=status.HTTP_404_NOT_FOUND)


        if not (request.user.is_staff or booking.user == request.user):
            return Response({'detail': 'Not authorized.'}, status=status.HTTP_403_FORBIDDEN)


        flight = booking.flight
        flight.available_seats += booking.seat_count
        flight.save()

        booking.delete()
        return Response({'detail': 'Booking cancelled successfully.'}, status=status.HTTP_204_NO_CONTENT)
