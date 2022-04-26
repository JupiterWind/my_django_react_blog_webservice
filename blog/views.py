from django.shortcuts import render
from django.views.generic import ListView

from blog.models import Post

class PostList(ListView):
    model = Post
    ordering = 'created_at'
    paginate_by = 7

    def get_context_data(self, **kwargs):
        context = super(PostList, self).get_context_data(**kwargs)
        return context
