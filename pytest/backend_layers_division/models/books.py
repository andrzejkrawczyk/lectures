from pytest.backend_layers_division.models.books_request import ValidatedBookRequest


class Book():

    def __init__(self):
        pass

    @classmethod
    def from_validated_book_request(cls, validated_book_request):
        if not isinstance(validated_book_request, ValidatedBookRequest):
            raise TypeError()
        return Book(validated_book_request)