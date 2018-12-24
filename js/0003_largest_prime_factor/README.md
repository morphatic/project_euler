# Problem 3: Largest Prime Factor

> The prime factors of 13195 are 5, 7, 13 and 29.
>
> What is the largest prime factor of the number 600851475143?

## Post-Mortem

So. I got it on the first try, but it took a really long time. Google got me relatively quickly to [this Wikipedia article on factorization with Pollard's _ρ_](https://en.wikipedia.org/wiki/Pollard%27s_rho_algorithm), but my mathematical intuition is so poor, that it was not clear to me what the algorithm was doing, nor why. Implementing an algorithm from pseudocode is pretty straightforward, but if it doesn't work, and you don't understand the process the pseudocode represents, it's pretty hard to debug it.

Again, TDD came to my rescue. I was able to decompose the problem into smaller steps (determining primality, calculating GCD, etc.) and relatively quickly narrow down exactly where the algorithm was failing. As it turns out, the algorithm actually worked _perfectly_ as described on Wikipedia for the main problem I was trying to solve. However, it **_didn't_** work for some of the "simple" test cases that I had written. Pollard's _ρ_ apparently doesn't work well for perfect squares, and the [best advice I could find](https://stackoverflow.com/a/48208795/296725) was just to randomly increment one of the parameters until the algorithm converged. So even though I had figured out the solution more than an hour earlier, I stuck with this problem until I was able to get it to work for more generic instances. Doggedness and tenacity are definitely some of the most valuable characteristics for a programmer.

In other news, I'm getting better at using destructuring assignment. It's _really_ handy for swapping variable values in a way that would otherwise require a third, intermediate variable.

## Post-Post-Mortem

So after reading some of the other solutions, I'm definitely noticing a pattern. Many/most of the other responses can be sorted into two categories:

1. Simple/direct solutions that may "work" _only_ for this problem, but fail in more general scenarios. These solutions also tend to have unpredictable performance
2. More elegant solutions that have better performance, more nuanced code that shows some understanding/appreciation of the math behind it, and just overall greater attention to detail

Both of these styles of coding absolutely have a place in professional coding environments. After solving three of these, I can absolutely tell that I aspire to be considered among the 2nd of these two groups.
