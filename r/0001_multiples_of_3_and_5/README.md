# Problem 1: Multiples of 3 and 5

> If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
> Find the sum of all the multiples of 3 or 5 below 1000.

## Post-Mortem

Most of the work I did for this solution was converting [my JavaScript solution to this problem](../../js/0001_multiples_of_3_and_5/README.md) into R, and also getting my R development environment set up to solve more problems. The code itself was relatively straightforward.

The most interesting thing about this solution is that the `sum()` and `union()` functions that I had to write for Python and JavaScript were already part of the base R implementation. That meant that the only real code that I had to write was to implement the function to generate the multiples of a number. This makes sense given that R was developed primarily to do statistical and data analysis.
