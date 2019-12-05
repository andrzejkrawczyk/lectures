# Laboratorium 1

* Zaimplementować konfigurację z wykresu
* skonfigurować dispatch yamla

## API service
* wystawić endpoint /api/v1/auth/login - do logowania użytkownika za pomocą sesji
* wystawić endpoint /api/v1/auth/register - do rejestracji nowego użytkownika
* wystawić endpointy CRUD dla wybranego produktu, 10 atrybutów
* zabezpieczyć wszystkie endpointy dla zalogowanego

## Frontend service

* postawić statycznie hostowaną aplikację angularową
* napisać widok do logowania
* napisać widok do rejestracji
* dodać formularze typu CRUD, 10 atrybutów
* aplikacja zabezpieczona przed niezalogowanymi użytkownikami
* startowy ekran - logowania / rejestracji


## Mobile service

* napisać kalkę serwisu frontend z inną szatą graficzną i layoutem
* dostosować widoki do urządzenia mobilnego o wybranej rozdzielczości


### Przydatne komendy

*gcloud app deploy <nazwa.yaml> --version=<nazwa-wersji> --no-promote --no-stop-previous-version*
Wdrożenie serwisu o nadanej nazwie z danego yamla.
--no-promote -> nie ustawia danej wersji jako domyślnej
--no-stop-previous-version -> nie zatrzymuje wcześniej wdrożonych wersji
*gcloud app deploy dispatch.yaml* - wdrożenie dispatch yamla i ustawień do projektu
