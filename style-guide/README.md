# Style Guides

Guides for coding (and writing) well, consistently and in style. "Style" covers a lot of ground, from "use camelCase for variable names" to "never use global variables" or "never start a sentence with but".

These are living documents, and we encourage pull request and issues to improve it -- or contest it. 😉

* [Python](./python/)
* [JavaScript](./javascript/)
* [Markdown](./markdown/)
* [HTML and CSS](./html-css/)
* [Web Apps](./web-apps/)
* [Continuous Integration and Deployment](./continuous-integration-deployment/)
* [Version Control](./version-control/)
* [Code Review](./code-review/)

## TL;DR

* Be consistent... And don't rewrite existing code to follow this guide.
* Don't violate a guideline without a good reason. (A reason is good when you can convince a teammate.)
* We use Python and JavaScript (Node.js). If you plan to develop in another language please flag this and discuss.
* Tests are required. Unit tests, as well as functional and integration tests. Aiming for test coverage of 80% and above is desirable.
  * Tests must be automated via a continuous integration platform that is triggered when code is pushed to the canonical repository.
* Documentation is required for all code. Documentation is just as important as tests.
  * Document functions, classes, modules and packages with docstrings.
  * Provide a great `README.md` file with examples of how to use the code.
  * Only use documentation builders like Sphinx for large projects; prefer `README.md` files for brevity and accessibility of documentation.
* Use spaces and never tabs.
  * JavaScript, HTML and CSS: 2 space indentation.
  * Python: 4 space indentation.
* Strictly enforce a 79 character line limit.
* Lint JavaScript with `eslint`; Lint Python using `pylint`.
* Use common language conventions for naming functions, classes and variables.
* Code should be submitted via pull requests, which another person should merge.
* Use continuous deployment.
  * Apps should be deployed from a continuous integration service when a successful build is made on the branch used for production.
  * Packages should be published to the respective package registry when a tag is pushed.
* Write small, reusable libraries where possible. There are many opportunities for reuse across our different products.
* We support modern browsers. Notably, IE 10 and above. Our browser support is in sync with the browser support of Google web properties, as [declared here](https://support.google.com/a/answer/33864?hl=en).

A note on our use of language:

* "Avoid" means don't do it unless you have good reason.
* "Don't" means there's never a good reason.
* "Prefer" indicates a better option and its alternative to watch out for.
* "Use" is a positive instruction.
* "MUST", "SHOULD", etc. are used in classic RFC style.

## Languages

Our work is done in Python and JavaScript (Node.js). There can be good reasons for writing a particular library or app in another language, but if you think this is the case, please raise this issue directly before starting any work.

For example apps that implement the Datopian preferences, see the following:

* [oki lib in JavaScript](https://github.com/okfn/oki-js)
* [oki lib in Python](https://github.com/okfn/oki-py)

## Frameworks

In the same way we have default choices for programming languages, we have for frameworks. These preferences exist after a thorough research concerning a common set of requirements in an average Datopian project.

Specific frameworks are covered per language.

