# Project Euler

My solutions to the programming challenges a projecteuler.net in various programming languages.

## Structure of this Repo

Each programming language for which I've produced solutions contains its own subdirectory. Within each subdirectory I've installed the necessary tools and configurations to follow a well-defined, popular coding syntax style convention. I've also installed a unit-testing library so that I can follow a test-driven approach to these projects (TDD). Each language subdirectory has it's own README with language-specific notes.

Within each language subdirectory, there is a subdirectory for each solution which follows the naming convention `XXXX_title_of_problem` where `XXXX` is the zero-padded number of the problem, e.g. `0001`, and the title is the [snake-cased](https://en.wikipedia.org/wiki/Snake_case) title from the Project Euler website. (Note: I elected to use four digits for the problem numbers because while there are still only, as of today 2018-12-22, 637 total problems, we might see the day when it tops 1000!) Each problem directory should contain, at a minimum, three files:

1. A `README.md` file with the problem description, and any problem-specific notes I made while solving it,
2. A file containing unit tests for my solution to the problem, and
3. A file containing the code implementing the actual solution.

The resulting directory structure should look something like this:

```bash
├── .gitignore
├── LICENSE
├── README.md
└── js
    ├── .eslintrc.json
    ├── .gitignore
    ├── .pretteirrc.json
    ├── 0001_multiples_of_3_and_5
    │   ├── README.md
    │   ├── index.js
    │   └── index.spec.js
    ├── README.md
    ├── node_modules
    │   └── ... 3rd party packages ...
    ├── package-lock.json
    └── package.json
```

## Hat Tip

Hat tip to [Bennet Garner](https://twitter.com/BennettGarner) whose [post on Medium](https://blog.usejournal.com/consider-yourself-a-developer-you-should-solve-the-project-euler-problems-ed8d13397c9c) inspired and challenged me to get started with these challenges.
