# Project Euler: Python

This directory contains my solutions to the [Project Euler problems](https://projecteuler.net/archives) written in Python. I've chosen to adopt version 3.x as that is the latest version and recommended for all new Python projects. On my Mac, I needed to update my `~/.zshrc` file to get my shell to use the latest version of Python (which I got by installing [Anaconda](https://www.anaconda.com/download/)) following the recommendation of [this Stack Overflow post](https://stackoverflow.com/a/18425592/296725) to create an `alias` for `python3` (and `pip3`) used only for my logged-in shell sessions (so it won't interfere with system-wide processes that rely on Python 2.x). If you're not using [ZSH](https://ohmyz.sh/), you'll probably want to make these changes in `~/.bash_profile` instead of `~/.zshrc`. I had to upgrade the Anaconda version of Python to 3.7 using [these instructions](https://www.anaconda.com/blog/developer-blog/python-3-7-package-build-out-miniconda-release/) which installed the latest versions of most of the packages I needed for development. I also used [this `.gitignore` file](https://github.com/github/gitignore/blob/master/Python.gitignore).

## Tools

I'm using [Pytest](https://docs.pytest.org/en/latest/) as my testing framework. I installed two plugins [`pytest-testmon`](https://pypi.org/project/pytest-testmon/) and [`pytest-watch`](https://github.com/joeyespo/pytest-watch) so that I could keep pytest running while developing. Check out the `pytests.ini` file in this directory for more configuration options. I also installed [`pytest-describe`](https://github.com/ropez/pytest-describe) because I'm used to the Jasmine/Mocha/Jest/RSpec style of organizing my tests, and this plugin lets me get closer to that.

By default my editor, [VSCode uses Pylint](https://code.visualstudio.com/docs/python/linting) to find syntactical and stylistic errors in code using the [PEP 8 Style Guide](https://www.python.org/dev/peps/pep-0008/). I went ahead and generated a `.pylintrc` file (`pytest --generate-rcfile >> .pylintrc`) even though I'm not sure I'm going to customize it so that I could learn more about the different configuration options for Pylint. Although, I'm basically agnostic about most syntax style-related issues, I do wholeheartedly endorse the notion that following a well-defined style is an essential best practice for any modern coding team.

<p align="center"><img src="https://i.ibb.co/SwxMdQj/vscode-install-python-autoformatter.png" alt="A dialog box from Visual Studio Code asking me whether or not I wanted to install one of three python autoformatters: autopep8, black, or yapf."></p>

Interestingly, once I got started working, VSCode prompted me to install an autoformatter (image above). I'm only an occasional python programmer and I don't really stay up to date on the latest tooling. I think it's pretty amazing that not only did VSCode prompt me to install a specific tool, it also gave me a choice about which of the currently most popular tools I wanted. Since I didn't know, I of course googled it and found this [really great breakdown of the three autoformatters](https://medium.com/3yourmind/auto-formatters-for-python-8925065f9505) by [Kevin Peters](https://twitter.com/kevinpeters_) from June 2018. I was tempted to go with Yapf in the Facebook configuration, but ultimately I decided to go with [Black](https://github.com/ambv/black) for several reasons:

1. It's maintained by one of the python core devs, so it's likely to remain popular and actively supported
2. It's closest to [Prettier](https://prettier.io/) in its approach, which appeals to me since I already understand Prettier
3. The name is a clever reference to Henry Ford's famous quote about the Model T: "You can have any color you want...as long as it's black."

## Running the Tests

To run the tests:

```bash
ptw
```

To stop the tests:

`[ctrl] + c`

## Documentation

All solution files are documented following the [Pydoc](https://www.python.org/dev/peps/pep-0257/) docstring conventions.
