from django.db import models

# Create your models here.
from users.models import UserProfile
from datetime import datetime


class Bet(models.Model):
    user_id = models.ForeignKey(UserProfile, on_delete=models.Protect)
    guess = models.IntegerField()
    die_1 = models.IntegerField()
    die_2 = models.IntegerField()
    roll = models.IntegerField()
    wagered = models.BigIntegerField()
    payout = models.FloatField()
    net = models.FloatField()

    @classmethod
    def is_winner(cls, guess, roll):
        if guess == roll:
            return True
        return False

    @classmethod
    def determine_payout(cls, payout, is_winner):

        if is_winner:
            return payout
        return 1.0

    @classmethod
    def calculate_net(cls, wagered, payout, is_winner):
        if is_winner:
            return int(wagered * payout)

        return -wagered

    def save_and_update_user(self, user):
        self.save()
        user.coins += self.net
        user.last_bet_on = datetime.now()

        return user.save()
