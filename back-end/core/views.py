from rest_framework.views import APIView
from rest_framework.response import Response
from .models import UserInput
from .serializers import UserInputSerializer

class UserInputView(APIView):
    def post(self, request):
        serializer = UserInputSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Data saved successfully!"}, status=201)
        return Response(serializer.errors, status=400)