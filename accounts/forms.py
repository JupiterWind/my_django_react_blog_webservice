from django import forms
from .models import MyUser

class SignUpForm(forms.ModelForm):
    class Meta:
        model = MyUser
        fields = [ 'nickname' ]

        def signup(self, request, user):
            user.nickname = self.cleaned_data['nickname']
            user.save()