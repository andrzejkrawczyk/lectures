from backend_layers_division.models.books_request import BookRequest, ValidatedBookRequest


class ValidateBookRequest():
    def __init__(self, book_request):
        if not isinstance(book_request, BookRequest):
            raise TypeError('Have to be bookRequest!')

        self.book_request = book_request

    def validate(self):
        #...
        validated_data =  ValidatedBookRequest()

        return validated_data
