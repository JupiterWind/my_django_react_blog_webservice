from rest_framework import serializers
from dj_rest_auth.serializers import UserDetailsSerializer
from .models import User

class UserSerializer(UserDetailsSerializer):
    class Meta:
        model = User
        fields = ['email', 'nickname' ]
