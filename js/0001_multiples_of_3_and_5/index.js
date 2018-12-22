/**
 * JavaScript solution to {@link https://projecteuler.net/problem=1|Project Euler Problem 1}
 * @module
 */

/**
 * Get all of the multiples of the given integer starting at
 * zero, up to the given upper bound. For array-generation code:
 * @see {@link https://stackoverflow.com/a/10050831/296725}
 *
 * @param   {integer}   base  The integer whose multiples will be returned, default: 3
 * @param   {integer}   bound The upper bound to which multples will be calculated, default: 1000
 * @returns {integer[]}       An array of integer multiples of `base` up to `bound`
 */
const multiples = (base = 3, bound = 1000) =>
  [...Array(Math.ceil(bound / base)).keys()].map(i => i * base);

/**
 * Calculate the sum of an array of integers.
 *
 * @param   {integer[]} arr The array of integers for which the sum is to be calculated
 * @returns {integer}       The calculated sum
 */
const sum = arr => arr.reduce((total, i) => total + i, 0);

/**
 * Concatenates and removes duplicates from two arrays
 *
 * @param   {integer[]} a1 First array of integers
 * @param   {integer[]} a2 Second array of integers
 * @returns {integer[]}    The concatenated arrays with duplicates removed
 */
const union = (a1, a2) => [...new Set(a1.concat(a2))];

module.exports = {
  multiples,
  sum,
  union
};
