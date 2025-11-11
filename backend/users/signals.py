from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import User
from .tasks import send_user_approval_email

@receiver(post_save, sender=User)
def send_email_on_approval(sender, instance, created, **kwargs):
    if instance.approval_status == 'approved' and not instance.email_sent:
        send_user_approval_email.delay(instance.email)
        instance.email_sent = True
        instance.save(update_fields=['email_sent'])
