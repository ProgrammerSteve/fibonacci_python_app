import pytest
from utils.fibonacci import fibonacci

fib_1=1
fib_10=55
fib_70=190392490709135
fib_1001 = 703_303_677_114_228_158_218_352_548_771_835_497_701_812_698_363_587_327_426_049_050_871_545_371_181_969_335_797_422_494_945_626_117_334_877_504_492_417_659_910_881_863_632_654_502_236_471_060_120_533_741_212_738_673_391_111_981_393_731_255_987_676_900_919_022_452_453_234_035_01

@pytest.mark.parametrize("n, expected", [
    (1, fib_1),
    (10, fib_10),
    (70, fib_70),
    (1001, fib_1001)
])
def test_fibonacci(n, expected):
    assert fibonacci(n) == expected

def test_negative_value_fibonacci():
    with pytest.raises(ValueError):
        fibonacci(-1)