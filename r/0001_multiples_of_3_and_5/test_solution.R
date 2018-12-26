# import library to be tested
source("./solution.R")

context("A program to sum all of the multiples of 3 and 5 below 1000")

test_that("it gets all multiples for a given integer < specified upper bound", {
  expect_equal(multiples(3, 10), c(0, 3, 6, 9))
  expect_equal(multiples(200), c(0, 200, 400, 600, 800))
  expect_equal(multiples(5, 17), c(0, 5, 10, 15))
})

test_that("it can calculate the sum of integers in a list", {
  expect_equal(sum(c(0, 3, 6, 9)), 18)
  expect_equal(sum(c(0, 200, 400, 600, 800)), 2000)
  expect_equal(sum(c(0, 5, 10, 15)), 30)
})

test_that("it can construct the logical union of two lists", {
  a1 <- c(1, 2, 3, 4, 5)
  a2 <- c(4, 5, 6, 7, 8)
  expect_equal(union(a1, a2), c(1, 2, 3, 4, 5, 6, 7, 8))
})

test_that("it can solve Project Euler Problem 1", {
  expect_equal(sum(union(multiples(3), multiples(5))), 233168)
})
