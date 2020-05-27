import Flask

from backend_layers_division.models.books_request import BookRequest
from backend_layers_division.validate_book_request import ValidateBookRequest
from backend_layers_division.service.book_business_logic import BookLogic
from backend_layers_division.models.books import Book

app = Flask.app()

class InvalidDataHttpStatus(Exception): pass

@app.route('/books/deleteBook/:id')
def delete_book(request):
     book_request = BookRequest(request.data.name, request.data.title, request.data.author)
     validator = ValidateBookRequest(book_request)
     validated_book_request = validator.validate()

     if validated_book_request.is_valid:
         book = Book.from_validated_book_request(validated_book_request)
         bl = BookLogic()
         result = bl.delete_book(book)
         return mapResultToResponse()
     else:
         raise InvalidDataHttpStatus()

def mapResultToResponse():
    pass


