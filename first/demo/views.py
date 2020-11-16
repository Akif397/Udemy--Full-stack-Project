from django.shortcuts import render
# from django.http import HttpResponse
# from django.views import View
from .models import Book
from rest_framework import viewsets
from .serializers import BookSerializer
from rest_framework.authentication import TokenAuthentication

# class Another(View):

    # books = Book.objects.all()
    # books = Book.objects.filter(is_published=True)
    # books = Book.objects.get(id=1)

    # output = ''
    # output = f"We have \"{books.title}\" book with ID {books.id}<br>"

    # for book in books:       
    #     output += f"We have \"{book.title}\" book with ID {book.id}<br>"

    # def get(self, request):
    #     return HttpResponse(self.output)    

def first(request):
    books = Book.objects.all()
    return render(request, 'first_temp.html', {'books' : books})

class BookViewSet(viewsets.ModelViewSet):
    serializer_class = BookSerializer
    queryset = Book.objects.all()
    authentication_classes = (TokenAuthentication,)