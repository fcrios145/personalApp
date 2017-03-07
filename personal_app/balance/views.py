from django.contrib.auth.models import User, Group
from rest_framework import permissions, routers, serializers, viewsets
from .serializers import UserSerializer, GroupSerializer, CategoriaSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from oauth2_provider.ext.rest_framework import TokenHasReadWriteScope, TokenHasScope

#Local models
from .models import Categoria

# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated, TokenHasReadWriteScope]
    queryset = User.objects.all()
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated, TokenHasReadWriteScope]
    #permission_classes = [permissions.IsAuthenticated, TokenHasScope]
    #required_scopes = ['groups']
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

@api_view(['GET'])
def example_view(request, format=None):
    content = {
        'user': str(request.user),  # `django.contrib.auth.User` instance.
        'auth': str(request.auth),  # None
    }
    return Response(content)

class CategoriaViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated, TokenHasReadWriteScope]
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer
    
    def create(self, request):
        serializer = CategoriaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)