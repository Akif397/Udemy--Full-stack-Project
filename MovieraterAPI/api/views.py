from rest_framework import viewsets, status
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.decorators import action
from .serializers import MovieSerializer, RatingSerializer, UserSerializer
from .models import Movie, Rating
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny

# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    authentication_classes = (TokenAuthentication, )
    permission_classes = (IsAuthenticated, )

    @action(detail=True, methods=['POST'])
    def rate_movie(self, request, pk=None):
        if 'stars' in request.data:
            movie = Movie.objects.get(id=pk)
            print(movie)
            stars = request.data['stars']
            user = request.user

            try:
                rating = Rating.objects.get(user=user.id, movie=movie)
                print('Rating:', rating)
                rating.stars = stars
                rating.save()
                serializer = RatingSerializer(rating, many=False)
                response = {'Message': 'Rating Updated', 'result' : serializer.data}
                return Response(response, status=status.HTTP_200_OK)
            except:
                rating = Rating.objects.create(user=user, movie=movie, stars=stars)
                serializer = RatingSerializer(rating, many=False)
                response = {'Message': 'Rating Created', 'result' : serializer.data}
                return Response(response, status=status.HTTP_200_OK)
            
        else:
            response = {'message': 'You need to provide stars'}
            return Response(response, status=status.HTTP_400_BAD_REQUEST)

class RatingViewSet(viewsets.ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer
    authentication_classes = (TokenAuthentication, )
    permission_classes = (IsAuthenticated, )
    
    def update(self, request, *args, **kwargs):
        response = {'message': 'You can\'t update rating like that'}
        return Response(response, status=status.HTTP_400_BAD_REQUEST)

    def create(self, request, *args, **kwargs):
        response = {'message': 'You can\'t create rating like that'}
        return Response(response, status=status.HTTP_400_BAD_REQUEST)