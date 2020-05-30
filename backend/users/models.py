from django.db import models
from django.contrib.auth.models import User


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    created_at = models.DateField(auto_now_add=True)
    last_updated = models.DateField(auto_now=True)
    is_active = models.BooleanField(default=True)
    sign_in_count = models.IntegerField()

    #Billing
    name = models.CharField(max_length=128)
    payment_id = models.CharField(max_length=128)
    cancelled_subscription = models.DateTimeField(auto_now=True)
    previous_plan = models.CharField(max_length=45)

    #Bet
    coins = models.BigIntegerField()
    last_bet_on = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.user.username
