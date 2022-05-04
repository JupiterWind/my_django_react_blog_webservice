from django.db import models
from django.db.models.deletion import CASCADE
from accounts.models import User

'''
- Post : title, hook_text, content, created_at, updated_at, author, tags
- Tag : name, slug
- Comment : author, post, content, created_at, modified_at
'''

class Tag(models.Model):
    name = models.CharField(max_length=50, unique=True)
    # 사람이 읽을 수 있는 텍스트로 고유 URL을 만들고 싶을 때
    slug = models.SlugField(max_length=200, unique=True, allow_unicode=True)

    def __str__(self):
        return self.name
    
    def get_absolute_url(self):
        return f'/blog/tag/{self.slug}/'

class Post(models.Model):
    author = models.ForeignKey(User, on_delete=CASCADE)
    title = models.CharField(max_length=30)
    hook_text = models.CharField(max_length=100, blank=True)
    content = models.TextField()
    tags = models.ManyToManyField(Tag, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'[{self.pk}]{self.title} :: '

    def get_absolute_url(self):
        return f'/blog/{self.pk}/'

class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    author = models.ForeignKey(User, on_delete=CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'::{self.content}'
    
    def get_absolute_url(self):
        return f'{self.post.get_absolute_url()}#comment-{self.pk}'




