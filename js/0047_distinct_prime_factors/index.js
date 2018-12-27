/**
 * JavaScript solution to {@link https://projecteuler.net/problem=47|Project Euler Problem 47}
 * @module
 */

// import helpers from Problem #3
import { gcd, prho, isPrime } from '../0003_largest_prime_factor';

/**
 * Returns a sorted list of all of the UNIQUE prime factors of a number `n`
 *
 * @param   {integer}   n The number whose prime factors are to be discovered
 * @returns {integer[]}   A sorted array of prime integers
 */
const uniquePrimeFactorsOf = n => {
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
  // sort numeric ascending and convert to a Set
  return new Set(factors.sort((a, b) => a - b));
};

const consecutives = n => {
  if (2 === n) return [14, 15];
  const arr = consecutives(n - 1);
  let x = 1;
  for (let i = 0; i < n; i += 1) {
    x += 1;
    while (0 !== ((arr[0] * x + 1) / arr[1]) % 1) x += 1;
  }
  return Array(n)
    .fill()
    .map((_, idx) => x * 14 + idx);
};

module.exports = {
  uniquePrimeFactorsOf,
  consecutives
};
