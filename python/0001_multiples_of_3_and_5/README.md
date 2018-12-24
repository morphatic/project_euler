# Problem 1: Multiples of 3 and 5

> If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
> Find the sum of all the multiples of 3 or 5 below 1000.

## Post-Mortem

Most of the work I did for this solution was converting [my JavaScript solution to this problem](../../js/0001_multiples_of_3_and_5/README.md) into Python, and also getting my Python development environment set up to solve more problems. The code itself was relatively straightforward. I spent the majority of my time learning Python's `docstring` conventions and learning how Black wanted me to format code.

It's interesting to see what language features are "built-in" versus having to be explicitly imported into a module. For example the `reduce()` function in `JavaScript` comes built-in and doesn't require any sort of `import` statement, whereas in Python, you have to `from functools import reduce`. The same was true for `math.ceil()`. With JavaScript, all of the core language features come bundled with the runtime environment itself. Python makes you explicitly state that you want to use a particular language feature. This doesn't bother me and I can see reasons for doing it both ways. I find the difference interesting.
