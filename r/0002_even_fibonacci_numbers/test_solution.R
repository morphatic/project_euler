# import library to be tested
source("./solution.R")

context("A program to sum even-numbered Fibonacci values <= 4,000,000")

test_that("it can generate an even-numbered Fibonacci sequence", {
  fib <- evenFibonacci.generator(bound = 21)
  expect_equal(fib(), 2)
  expect_equal(fib(), 8)
  expect_null(fib())
})

test_that("it can generate an even-numbered Fibonacci sequence as a vector", {
  expect_equal(fib(50), c(2, 8, 34))
})