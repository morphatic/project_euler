# Project Euler: JavaScript

This directory contains my solutions to the [Project Euler problems](https://projecteuler.net/archives) written in JavaScript. I've chosen to adopt [ES2015/ES6](https://www.ecma-international.org/ecma-262/6.0/) syntax for these solutions as that is more or less already the norm for most codebases (late 2018/early 2019).

## Tools

I'm using [Jest](https://jestjs.io/) as my testing framework. By default, I've set it up to use the `--watch` flag so that I don't have to manually run the tests after every time I change and save my code. Each directory contains, at a minimum, two files: `index.js` contains the solution, and `index.spec.js` contains the tests.

I'm also using [ESLint](https://eslint.org/) + [Airbnb Style Guide](https://github.com/airbnb/javascript) + [Prettier](https://prettier.io/) which I've set up following this [great tutorial by Sebastián Yandún](https://medium.com/@svyandun/eslint-airbnb-javascript-style-guide-prettier-vs-code-ffdad3029044). Although, I'm basically agnostic about most syntax style-related issues, I do wholeheartedly endorse the notion that following a well-defined style is an essential best practice for any modern coding team. These particular styles are currently popular and I'm using them for some other projects, which is why I decided to adopt them here.

## Running the Tests

To run the tests:

1. `cd js`
2. `npm test`

To stop the tests:

1. `[ctrl] + c` or just `q`

## Documentation

All solution files are documented following the [JSDoc](http://usejsdoc.org/) format.
