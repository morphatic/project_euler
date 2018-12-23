/**
 * JavaScript solution to {@link https://projecteuler.net/problem=2|Project Euler Problem 2}
 * @module
 */

/**
 * Generate all even-numbered values of the Fibonacci sequence up to and including `bound`
 *
 * @param  {integer} [bound] The upper bound for the sequence, default: 4,000,000
 * @param  {integer} [s1]    The first seed for the sequence, default: 0
 * @param  {integer} [s2]    The second seed for the sequence, default: 1
 * @yields {integer}         The next integer in the sequence or undefined if done
 */
function* evenFibonacci(bound = 4000000, s1 = 0, s2 = 1) {
  while (s1 + s2 <= bound) {
    if (0 === (s1 + s2) % 2) yield s1 + s2;
    [s1, s2] = [s2, s1 + s2];
  }
}

/**
 * Calculate the sum of an array of integers.
 *
 * @param   {integer[]} arr The array of integers for which the sum is to be calculated
 * @returns {integer}       The calculated sum
 */
const sum = arr => arr.reduce((total, i) => total + i);

module.exports = {
  evenFibonacci,
  sum
};
