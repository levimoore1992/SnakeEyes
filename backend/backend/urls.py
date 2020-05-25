from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('api-auth', include('rest_framework.urls')),
    path("api/rest-auth/", include("rest_auth.urls")),
    path("api/rest-auth/registration", include("rest_auth.registration.urls")),
    path('admin/', admin.site.urls),
]
