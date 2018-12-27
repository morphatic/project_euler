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
# evenFibonacci.generator(bound) %::% numeric : numeric


evenFibonacci.generator <- function(bound = 4000000, s1 = 0, s2 = 1) {
  n1 <- s1
  n2 <- s2
  function() {
    tmp <- n1 + n2
    while (tmp %% 2 != 0) {
      tmp <- n1 + n2
      if (tmp > bound) return(NULL)
      n1 <<- n2
      n2 <<- tmp
    }
    return(tmp)
  }
}

