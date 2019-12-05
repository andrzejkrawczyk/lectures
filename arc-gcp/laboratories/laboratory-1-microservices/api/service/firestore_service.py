from google.cloud import firestore


class FirestoreService(object):

    def __init__(self):
        self.db = firestore.Client()

    def add_random_data(self):
        doc_ref = self.db.collection(u'users').document(u'alovelace')
        doc_ref.set({
            u'first': u'Ada',
            u'last': u'Lovelace',
            u'born': 1815
        })
