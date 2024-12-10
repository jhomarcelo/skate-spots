from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import UserInput

class UserInputView(APIView):
    def post(self, request):
        input_text = request.data.get('input_text')
        if not input_text:
            return Response({"error": "Input text is required"}, status=status.HTTP_400_BAD_REQUEST)
        user_input = UserInput.objects.create(input_text=input_text)
        return Response({"message": "Input saved successfully", "data": {"id": user_input.id}}, status=status.HTTP_201_CREATED)