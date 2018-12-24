# pylint: disable=unused-variable
"""Unit tests for Euler Project Problem 1: Multiples of 3 and 5."""

from solution import multiples, asum, union


def describe_project_euler_problem_1():
    """A program to sum all multiples of 3 and 5 below 1000."""

    def test_multiples():
        """It can get all multiples for a given integer up to a specified upper bound."""
        assert multiples(3, 10) == [0, 3, 6, 9]
        assert multiples(200) == [0, 200, 400, 600, 800]
        assert multiples(5, 17) == [0, 5, 10, 15]

    def test_asum():
        """It can calculate the sum of integers in a list."""
        assert asum([0, 3, 6, 9]) == 18
        assert asum([0, 200, 400, 600, 800]) == 2000
        assert asum([0, 5, 10, 15]) == 30

    def test_union():
        """It can construct the logical union of two arrays."""
        a_1 = [1, 2, 3, 4, 5]
        a_2 = [4, 5, 6, 7, 8]
        assert union(a_1, a_2) == [1, 2, 3, 4, 5, 6, 7, 8]

    def test_solution():
        """It can solve Euler Project Problem 1."""
        assert asum(union(multiples(3), multiples(5))) == 233168
