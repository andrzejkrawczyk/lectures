#https://www.otomoto.pl/oferta/mitsubishi-lancer-ogloszenie-prywatne-polski-salon-1-wlasciciel-bezwypadkowy-klima-ID6CVptW.html


# Oferta odOsoby prywatnej
# KategoriaOsobowe
# Marka pojazduMitsubishi
# Model pojazduLancer
# GeneracjaVIII (2007-)
# Rok produkcji2011
# Przebieg82 500 km
# Pojemność skokowa1 590 cm3
# Rodzaj paliwaBenzyna
# Moc117 KM
# Skrzynia biegówManualna
# NapędNa przednie koła
# TypKompakt

# request.GET / POST
# {
#
# }
# request.method = "POST | GET | DELETE ..."
"""
 :required moc: number
 :required skrzynia: enum<skrzynia>
 :required naped: enum<naped>
 :required paliwo: <enum>
 :optional pojemnosc_skosowa: number
 :optional przebieg: number
 :optional rok_produkcji: number
"""


def insert_advertisement(request):
    if request.method == "POST":
        return _add_advertisement(request.POST)
    else:
        return NotImplementedError
        # return _get_advertisement(request.GET)


def _add_advertisement(data_dict):
    if data_dict.get('moc') is not None:
        validation_result = validate_moc(data_dict.get('moc'))
        if not validation_result.valid:
            raise HttpInvalidRequest()

def validate_moc(moc):
    int(moc)

    if moc not in [ 60, 100, 118, 218, 250 ]:
        raise ValueError()

    return {
        "valid": True,
        "value": moc
    }