// import the code to be tested
import { gcd, prho, isPrime, primeFactorsOf } from '.';

describe('A program to find the largest prime factor of a number', () => {
  it('can find the greatest common divisor of two numbers', () => {
    expect(gcd(4, 5)).toBe(1); // relative primes
    expect(gcd(25, 30)).toBe(5);
    expect(gcd(30, 45)).toBe(15);
    expect(gcd(45, 30)).toBe(15); // order doesn't matter
  });

  it('can find a prime factor of a number', () => {
    expect(prho(81)).toBe(3);
    expect(prho(25, 2)).toBe(5);
    expect([3, 17].includes(prho(51))).toBe(true);
  });

  it('can determine if a number is prime', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(71)).toBe(true);
    expect(isPrime(839)).toBe(true);
    expect(isPrime(1471)).toBe(true);
    expect(isPrime(6857)).toBe(true);
    expect(isPrime(101)).toBe(true);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(9)).toBe(false);
    expect(isPrime(51)).toBe(false);
  });

  it('can find all of the prime factors of a number', () => {
    expect(primeFactorsOf(81)).toEqual([3, 3, 3, 3]);
    expect(primeFactorsOf(50)).toEqual([2, 5, 5]);
    expect(primeFactorsOf(600851475143)).toEqual([71, 839, 1471, 6857]);
  });

  it('can solve Euler Project Problem 3', () => {
    const solution = primeFactorsOf(600851475143).pop();
    console.log(`The largest prime factor of 600851475143 is: ${solution}`);
    expect(solution).toBe(6857);
  });
});
