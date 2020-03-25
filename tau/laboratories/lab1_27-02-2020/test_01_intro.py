from josephus import josephus

def test_josephus():
    user_input = list(range(1, 10))
    expected_output = [3, 6, 9, 4, 8, 5, 2, 7, 1]
    
    result = list(josephus(user_input, 3))
    
    assert {
        1: 2,
        3: 5
    } == dict(a="asdla")