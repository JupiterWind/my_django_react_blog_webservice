from django.shortcuts import render
from rest_framework.viewsets import ReadOnlyModelViewSet, ModelViewSet  # ViewSet 임포트


from .models import Post
from .serializers import PostSerializer

class PostViewSet(ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()

'''
class PostList(ListView):
    model = Post
    ordering = 'created_at'
    paginate_by = 7

    def get_context_data(self, **kwargs):
        context = super(PostList, self).get_context_data(**kwargs)
        return context
'''