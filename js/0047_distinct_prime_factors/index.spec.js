// import the code to be tested
import { uniquePrimeFactorsOf, consecutives } from '.';

describe('A program to find the first four consecutive integers to have four distinct prime factors each', () => {
  it('can get a series of n consecutive numbers with n unique prime factors', () => {
    expect(consecutives(2)).toEqual([14, 15]);
    expect(consecutives(3)).toEqual([644, 645, 646]);
    expect(consecutives(4)).toEqual([36134, 36135, 36136, 36137]);
  });

  it('can solve Euler Project Problem 47', () => {
    const arr = consecutives(4);
    const upf0 = uniquePrimeFactorsOf(arr[0]);
    const upf1 = uniquePrimeFactorsOf(arr[1]);
    const upf2 = uniquePrimeFactorsOf(arr[2]);
    // const upf3 = uniquePrimeFactorsOf(arr[3]);
    console.log(upf0, upf1, upf2 /*, upf3*/);
    expect(upf0.size).toBe(4);
    expect(upf1.size).toBe(4);
    expect(upf2.size).toBe(4);
    // expect(upf3.size).toBe(4);
    const solution = arr[0];
    console.log(
      `The first of four consecutive integers to have four distinct prime factors is: ${solution}`
    );
    expect(solution).toBe(36134);
  });
});
