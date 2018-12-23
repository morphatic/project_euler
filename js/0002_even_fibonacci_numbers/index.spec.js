// import the code to be tested
import { evenFibonacci, sum } from '.';

describe('A program to find the sum of even-numbered Fibonacci values <= 4,000,000', () => {
  it('can generate an even-numbered Fibonacci sequence', () => {
    const fib = evenFibonacci(21);
    expect(fib.next().value).toBe(2);
    expect(fib.next().value).toBe(8);
    expect(fib.next().value).toBe(undefined);
  });

  it('can generate an even-numbered Fibonacci sequence as an array', () => {
    expect([...evenFibonacci(50)]).toEqual([2, 8, 34]);
  });

  it('can calculate the sum of integers in an array', () => {
    expect(sum([0, 3, 6, 9])).toBe(18);
    expect(sum([0, 200, 400, 600, 800])).toBe(2000);
    expect(sum([0, 5, 10, 15])).toBe(30);
  });

  it('can solve Euler Project Problem 2', () => {
    const solution = sum([...evenFibonacci(4000000)]);
    console.log(
      `The sum of even-numbered Fibonacci values <= 4,000,000 is: ${solution}`
    );
    expect(solution).toBe(4613732);
  });
});
