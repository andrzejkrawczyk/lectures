class BookRepository():

    def getBooks(self, ids):
        return self._getFromFirestore(ids)

    def addBook(self, book):
        return self._addToFirestore(book.toFirestoreData())

    def _getFromFirestore(self, ids):
        pass
