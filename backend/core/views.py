from rest_framework.response import Response
from rest_framework.views import APIView
from .tasks import deliver_contact_email

class SendContactEmail(APIView):


    def post(self, request, *args, **kwargs):
        data = request.data
        email = data.email
        message =  data.message


        deliver_contact_email(email, message)
