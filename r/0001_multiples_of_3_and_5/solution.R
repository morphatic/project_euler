#' R solution to `Project Euler Prolem 1 <https://projecteuler.net/problem=1>`.

#' Get multiples of an integer.
#'
#' \code{multiples} gets all of the multiples of the given
#' integer starting at zero, up to the given upper bound (exclusive).
#' Returns a vector of doubles.
#'
#' @param base  Integer whose multiples will be returned (default 3)
#' @param bound Upper bound to which multples will be calculated (default 1000)
#'
#' @export
#'
#' @examples
#' multiples(3, 10) ## returns c(0, 3, 6, 9)
multiples <- function(base = 3, bound = 1000) {
  map_dbl(c(0:(ceiling(bound / base) - 1)), ~ base * .x)
}

