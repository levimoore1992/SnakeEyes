from django.db import models
from django.contrib.auth.models import User


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    created_at = models.DateField(auto_now_add=True)
    last_updated = models.DateField(auto_now=True)
    is_active = models.BooleanField(default=True)
    sign_in_count = models.IntegerField()

    def __str__(self):
        return self.user.username
