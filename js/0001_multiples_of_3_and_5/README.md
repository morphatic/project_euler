# Problem 1: Multiples of 3 and 5

> If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
> Find the sum of all the multiples of 3 or 5 below 1000.

## Post-Mortem

Ok, so I've been programming, at least as a hobby, since I was a kid, and seriously since 1999. This was not a terribly hard problem to solve, but, much to my chagrin, I **_didn't_** get the right answer on the first try. While perhaps a blow to my ego, this problem showed me how much I **_don't_** tend to think like a mathematician, and also how much room for error there is when converting English into math into code.

I did get the correct answer on the 2nd try. Although I did have an [off-by-one error](https://en.wikipedia.org/wiki/Off-by-one_error) along the way, I was gratified to find that my TDD style of approaching the problem helped me catch and fix that one **before** submitting my first attempted solution. If you're looking for a hint, the thing that tripped me up was how to handle duplicate/shared multiples of the two numbers. Now that I've figured it out, it is clear, though perhaps not obvious, from the wording how I should have handled it in the first place. If I were an analyst producing a spec for developers to follow, I think I would probably try to be more explicit about this facet of the problem and/or provide a more extensive example that would have allowed them to catch the error before deciding they were "done."

That being said, as a programming challenge, the vagueness and uncertainty is part of what made it fun. :smile:
