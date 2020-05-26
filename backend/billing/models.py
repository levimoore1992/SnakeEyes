from django.db import models
from users.models import UserProfile


class Bet(models.Model):
    user_id = models.ForeignKey(UserProfile, on_delete=models.Protect)
    guess = models.IntegerField()
    die_1 = models.IntegerField()
    die_2 = models.IntegerField()
    roll = models.IntegerField()
    wagered = models.BigIntegerField()

