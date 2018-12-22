// import the code to be tested
import { multiples, sum, union } from '.';

describe('A program to sum all of the multiples of 3 and 5 below 1000', () => {
  it('can get all multiples for a given integer up to a specified upper bound', () => {
    expect(multiples(3, 10)).toEqual([0, 3, 6, 9]);
    expect(multiples(200)).toEqual([0, 200, 400, 600, 800]);
    expect(multiples(5, 17)).toEqual([0, 5, 10, 15]);
  });

  it('can calculate the sum of integers in an array', () => {
    expect(sum([0, 3, 6, 9])).toBe(18);
    expect(sum([0, 200, 400, 600, 800])).toBe(2000);
    expect(sum([0, 5, 10, 15])).toBe(30);
  });

  it('can construct the logical union of two arrays', () => {
    const a1 = [1, 2, 3, 4, 5];
    const a2 = [4, 5, 6, 7, 8];
    expect(union(a1, a2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('can solve Euler Project Problem 1', () => {
    const solution = sum(union(multiples(3), multiples(5)));
    console.log(
      `The sum of all the multiples of 3 or 5 below 1000 is: ${solution}`
    );
    expect(solution).toBe(233168);
  });
});
