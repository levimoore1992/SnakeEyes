from django.db import models
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

    @property
    def is_winner(self):
        if self.guess == self.roll:
            return True
        return False

    @property
    def determine_payout(self):

        if self.is_winner:
            return self.payout
        return 1.0

    @property
    def calculate_net(self):
        if is_winner:
            return int(self.wagered * self.payout)

        return -self.wagered

    def save_and_update_user(self, user):
        self.save()
        user.coins += self.net
        user.last_bet_on = datetime.now()

        return user.save()
