from rest_framework import routers
from django.urls import path
from .views import SendContactEmail

router = routers.DefaultRouter()

urlpatterns = router.urls
urlpatterns += [

    path('api/contact-email', SendContactEmail.as_view(), name='table-scraper')
]