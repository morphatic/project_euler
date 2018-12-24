"""Python solution to `Project Euler Prolem 1 <https://projecteuler.net/problem=1>`."""

from math import ceil
from functools import reduce


def multiples(base=3, bound=1000):
    """Get multiples of an integer.

    Get all of the multiples of the given integer starting at
    zero, up to the given upper bound

    Keyword arguments:
    base  -- The integer whose multiples will be returned (default 3)
    bound -- The upper bound to which multples will be calculated (default 1000)
    """
    return list(map(lambda i: i * base, range(0, ceil(bound / base))))


def asum(arr):
    """Calculate the sum of an array of integers.

    arr -- The array of integers for which the sum is to be calculated
    """
    return reduce(lambda total, i: total + i, arr)


def union(a_1, a_2):
    """Concatenates and removes duplicates from two integer arrays.

    a_1 -- First array of integers
    a_2 -- Second array of integers
    """
    return list(set(a_1) | set(a_2))
