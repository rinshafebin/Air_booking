from django.db import models

# Create your models here.
class Flight(models.Model):
    flight_number = models.CharField(max_length=10,unique=True)
    airline = models.CharField(max_length=10)
    origin = models.CharField(max_length=50)
    destination = models.CharField(max_length=50)
    departure_time =models.DateTimeField()
    arrival_time = models.DateTimeField()
    price = models.DecimalField(max_digits=10,decimal_places=2)
    seats_available = models.PositiveIntegerField(default=0)
    STATUS_CHOICES =[
        ('on-time','On-time'),
        ('delayed','Delayed'),
        ('cancelled','Cancelled'),
    ]
    status = models.CharField(max_length=10,choices=STATUS_CHOICES,default='on-time')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.flight_number} ({self.origin} → {self.destination})"
    
    