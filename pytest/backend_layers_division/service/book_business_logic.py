from backend_layers_division.models.books import Book

from backend_layers_division.service.book_repository import BookRepository


class BookLogic():

    def delete_book(self, book_to_delete):
        if not isinstance(book_to_delete, Book):
            raise TypeError()

        status = BookRepository().delete(book)
        return status