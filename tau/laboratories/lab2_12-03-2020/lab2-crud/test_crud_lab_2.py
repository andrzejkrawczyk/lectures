from crud_lab_2 import insert_advertisement

expected_result = 5

def prepare_request():
    pass


def test_crud_lab_blackbox():
    request = prepare_request()

    result = insert_advertisement(request)

    assert result == expected_result
