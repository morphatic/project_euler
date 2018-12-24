/**
 * JavaScript solution to {@link https://projecteuler.net/problem=3|Project Euler Problem 3}
 * @module
 */

/**
 * Finds the greatest common divisor of two numbers `a` and `b`
 *
 * @param   {integer} a The first number
 * @param   {integer} b The second number
 * @returns {integer}   The GCD
 */
const gcd = (a, b) => {
  while (0 !== b) [a, b] = [b, a % b];
  return a;
};

/**
 * Implements Pollard's _ρ_ for finding prime factors of a number `n`
 * @see {@link https://en.wikipedia.org/wiki/Pollard%27s_rho_algorithm|Pollard's _ρ_ Algorithm}
 * @see {@link https://stackoverflow.com/a/48208795/296725|SO thread recommending tuning `c`}
 *
 * @param   {integer} n   The number for which we wish to find a prime factor
 * @param   {integer} [c] Tunes the random function `g(x)` in cases where the default (1) doesn't work
 * @returns {integer}     A prime factor, or `n` if none is found
 */
const prho = (n, c = 1) => {
  const g = a => (a ** 2 + c) % n;
  let x = 2;
  let y = 2;
  let d = 1;
  while (1 === d) {
    x = g(x);
    y = g(g(y));
    d = gcd(Math.abs(x - y), n);
  }
  return d;
};

/**
 * Determines whether a number is prime or not
 *
 * @param   {integer} n The number whose primality is to be determined
 * @returns {boolean}   True if the number is prime
 */
const isPrime = n => {
  if (2 === n || 3 === n) return true;
  if (0 === n % 2 || 0 === n % 3) return false;
  let i = 5;
  let w = 2;
  while (i ** 2 <= n) {
    if (0 === n % i) return false;
    i += w;
    w = 6 - w;
  }
  return true;
};

/**
 * Returns a sorted list of all of the prime factors of a number `n`
 *
 * @param   {integer}   n The number whose prime factors are to be discovered
 * @returns {integer[]}   A sorted array of prime integers
 */
const primeFactorsOf = n => {
  const factors = [];
  let c = 1;
  let nx = n;
  let f;
  while (factors.reduce((prod, val) => prod * val, 1) !== n) {
    // get a factor
    f = prho(nx, c);
    if (f === nx) {
      // prho failed, increase c
      c += 1;
    } else {
      // add the factor to our array
      factors.push(f);
      // divide n by f
      nx /= f;
      // if n is prime...
      if (1 < nx && isPrime(nx)) {
        // add it to factors
        factors.push(nx);
      }
    }
  }
  // sort numeric ascending
  return factors.sort((a, b) => a - b);
};

module.exports = {
  gcd,
  prho,
  isPrime,
  primeFactorsOf
};
