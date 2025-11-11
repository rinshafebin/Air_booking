from django.db import models
from django.conf import settings
from flights.models import Flight

class Booking(models.Model):
    PAYMENT_STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('completed', 'Completed'),
        ('failed', 'Failed'),
    ]

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='bookings')
    flight = models.ForeignKey(Flight, on_delete=models.CASCADE, related_name='bookings')
    seat_count = models.PositiveIntegerField(default=1)
    payment_status = models.CharField(max_length=10, choices=PAYMENT_STATUS_CHOICES, default='pending')
    booking_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} → {self.flight.flight_number}"
