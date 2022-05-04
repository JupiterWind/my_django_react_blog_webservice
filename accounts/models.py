from django.db import models
from django.contrib.auth.models import AbstractUser
from .managers import MyUserManager

class User(AbstractUser):
    username = None
    email = models.EmailField(verbose_name='email address',max_length=255,unique=True)

    # 유일한 값이면서 필드에서 입력하지 않아도 되게 설정.
    nickname = models.CharField(max_length=30, unique=True, blank=True, null=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = MyUserManager()

    # unique=True 조건을 만족시키기 위해,
    # 닉네임 필드의 값이 빈 문자열인 경우 null값으로 바꾼다.
    def clean(self):
        if self.nickname == "":
            self.nickname = None   

    def __str__(self):
        return self.email