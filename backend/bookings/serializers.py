from rest_framework import serializers
from bookings.models import Booking
from flights.serializers import FlightSerializer

class BookingSerializer(serializers.ModelSerializer):
    flight_details = FlightSerializer(source='flight', read_only=True)

    class Meta:
        model = Booking
        fields = ['id', 'user', 'flight', 'flight_details', 'seat_count', 'payment_status', 'booking_time']
        read_only_fields = ['user', 'booking_time', 'payment_status']
