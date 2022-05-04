from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager

# contrib.auth로 유저모델 커스텀화
# AbstractUser 구현시, 사용하는 헬퍼(Helper) 클래스
# 주요 메소드 : create_user, create_superuser
class MyUserManager(BaseUserManager):
    """
    Custom user model manager where email is the unique identifiers
    for authentication instead of usernames.
    """
    def create_user(self, email, password, **extra_fields):
        """
        Create and save a User with the given email and password.
        """
        if not email:
            raise ValueError('Users must have an email address')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password, **extra_fields):
        """
        Create and save a SuperUser with the given email and password.
        """
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError(_('Superuser must have is_staff=True.'))
        if extra_fields.get('is_superuser') is not True:
            raise ValueError(_('Superuser must have is_superuser=True.'))
        return self.create_user(email, password, **extra_fields)

class MyUser(AbstractUser):
    #username = None
    username = models.CharField(max_length=10, blank=True, null=True) #all-auth 위해 설정
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