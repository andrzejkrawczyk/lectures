# Kalkulator zysku z faktury / działalności
Faktura składa się z części netto i podatku VAT. Faktura brutto to część netto powiększona o %VAT.

Przedsiębiorca płaci do US podatek VAT od faktur przychodowych. Może też zapłacić mniejszy VAT pomniejszając go o część VAT z faktur kosztowych.

Podatek dochodowy wylicza się na podstawie części netto pomniejszonej o pozycje kosztowe. Podatek dochodowy to % stawki z wyliczonego dochodu.

Program powinien przyjmować argument --invoices <file.csv> o strukturze
name, netto, vat_percent, date, z którego wczyta listę faktur.

Program powinien wyprintować:
* podatek dochodowy do zapłacenia
* podatek vat do zapłacenia
* rozliczenie miesięczne / kwartalne / roczne

Napisz powyższy program wraz z zestawem testów.

* testy na obliczenie vat
* testy na obliczenie podatku dochodowego
* testy na poprawne obliczenie rozliczeń miesięcznych / kwartalnych / rocznych
* testy na poprawne dodawanie faktur do zbioru faktur
* testy na poprawne wczytywanie danych z pliku