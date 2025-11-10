from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils import timezone

class User(AbstractUser):
    username = None 
    email = models.EmailField(unique=True)

    APPROVAL_STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('approved', 'Approved'),
        ('rejected', 'Rejected'),
    ]
    approval_status = models.CharField(
        max_length=10,
        choices=APPROVAL_STATUS_CHOICES,
        default='pending'
    )

    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email

    @property
    def is_approved(self):
        """Return True if user is approved."""
        return self.approval_status == 'approved'

    class Meta:
        indexes = [
            models.Index(fields=['email']),
            models.Index(fields=['approval_status']),
            models.Index(fields=['created_at']),
        ]
        ordering = ['-created_at']
