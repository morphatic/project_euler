# Project Euler: R

This directory contains my solutions to the [Project Euler problems](https://projecteuler.net/archives) written in R. I also used [this `.gitignore` file](https://github.com/github/gitignore/blob/master/R.gitignore).

## Tools

The standard package for testing in R is [`testthat`](https://testthat.r-lib.org) developed by [Hadley Wickham](http://hadley.nz/). `testthat` was designed and developed for testing full R packages, and not individual one-off scripts like I'm creating for these programming challenges. So I had to hack together my own test runner, [`rtest`](./rtest), in order to be able to keep the same directory structure that I'm using for the other programming languages in this repository. The code in `rtest` is worth a look.

By default, `testthat` expects all of the tests to reside in a single directory within a package with a standardized organization. In order to make my tests work, I had to directly use the `watch()` function that comes bundled with `testthat`. Normally, this is an internal function used by `auto_test()`, and as such, is not meant to be called directly by end users. However, I couldn't configure `auto_test()` to do what I wanted, so I created my own callback function and gave it as a parameter to `watch()` and it worked beautifully. I even figured out that a call to `system2("clear")` would clear the screen in between test runs.

I'm also using [lintr](https://github.com/jimhester/lintr) to keep uniform formatting. Although, I'm basically agnostic about most syntax style-related issues, I do wholeheartedly endorse the notion that following a well-defined style is an essential best practice for any modern coding team.

## Running the Tests

To run the tests, for the first time you'll have to modify permissions on the `./rtest` file to make it executable, i.e. `chmod +x ./tests`. After that, tests can be run using:

```bash
./tests
```

To stop the tests, hit:

1. `[ctrl] + [c]`

The first time the tests run, they will install any necesary, but uninstalled R packages. After that, the tests should run quickly.

## Documentation

All solution files are documented following the [R documentation](http://r-pkgs.had.co.nz/man.html#man-functions) format.
