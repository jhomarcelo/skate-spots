from django.urls import path
from .views import UserInputView

urlpatterns = [
    path('api/user-input/', UserInputView.as_view(), name='user-input'),
]
