from rest_framework import serializers
from users.models import Flight

class FlightSerializer(serializers.ModelSerializer):
    class Meta:
        model= Flight
        fields = [
            'id',
            'flight_number',
            'airline',
            'origin',
            'destination',
            'departure_time',
            'arrival_time',
            'price',
            'seats_available',
            'status'
        ]
