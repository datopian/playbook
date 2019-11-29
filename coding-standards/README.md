# Datopian Coding Standards

This document outlines coding standards for use at Datopian. It is a living document, and we encourage pull request and issues to improve on or contest ideas as expressed.

## Related documents

* [Code reviews](/code-reviews/): A description of our general code review process at Datopian.

## TL;DR

* We use Python and Javascript (Node.js). If you plan to develop in another language please flag this and discuss.
* Tests are required. Unit tests, as well as functional and integration tests. Aiming for test coverage of 80% and above is desirable.
  * Tests must be automated via a continuous integration platform that is triggered when code is pushed to the canonical repository.
* Documentation is required for all code. Documentation is just as important as tests.
  * Document functions, classes, modules and packages with docstrings.
  * Provide a great `README.md` file with examples of how to use the code.
  * Only use documentation builders like Sphinx for large projects; prefer `README.md` files for brevity and accessibility of documentation.
* Use spaces and never tabs.
  * Javascript, HTML and CSS: 2 space indentation.
  * Python: 4 space indentation.
* Strictly enforce a 79 character line limit.
* Lint Javascript with `eslint`; Lint Python using `pylint`.
* Use common language conventions for naming functions, classes and variables.
* Code should be submitted via pull requests, which another person should merge.
* Use continuous deployment.
  * Apps should be deployed from a continuous integration service when a successful build is made on the branch used for production.
  * Packages should be published to the respective package registry when a tag is pushed.
* Write small, reusable libraries where possible. There are many opportunities for reuse across our different products.
* We support modern browsers. Notably, IE 10 and above. Our browser support is in sync with the browser support of Google web properties, as [declared here](https://support.google.com/a/answer/33864?hl=en)

---

## Languages

Our work is done in Python and Javascript (Node.js). There can be good reasons for writing a particular library or app in another language, but if you think this is the case, please raise this issue directly before starting any work.

For example apps that implement the Datopian preferences, see the following:

* [oki lib in Javascript](https://github.com/okfn/oki-js)
* [oki lib in Python](https://github.com/okfn/oki-py)

### Style Guides

* [Javascript](/style-guide/javascript/)
* [Python](/style-guide/python/)
* [Markdown](/style-guide/markdown/)

## Version control

We use Git for all projects.

### Branch management

We generally follow [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/), with some modifications, and some flexibility per project. The following should hold true for pretty much all projects:

* Have a `master` branch
* Never commit directly to `master`
* Always work from a `feature/{}` or a `fix/{}` branch that is checked out from `master`
* Always reference issues from Git messages using `#{issue_id}`, and the various other related conventions used by most Git hosts.
* Properly describe changes in commit messages: "Fixes database migration script failure on Python 2.7", not "Fix."
* Prefer to use the "Squash and merge" approach for pull requests using GitHub web interface

## Continuous integration and deployment

All projects must be configured with a CI server. The CI server must run the test suite with linting.

## App deployment

All apps must be deployed from the CI server.

## Package publication

All packages must be published to npm and pypi from the CI server. The procedure is:

1. Create your package and prepare it for publication.
2. Register the package on the appropriate registry.
3. Give the `datopian` user owner rights on the package.
4. Create tags for package versions.
5. Use the Travis integration to publish on tags.

## Web apps

### URLs

* In general do not use trailing slash on urls (but ensure you redirect 301 from trailing slash to non-trailing slash)
  * e.g.: /work not /work/, /work/9 not /work/9/

### RESTful APIs

* Use plural versions of entities names for endpoints
* When implementing RESTful APIs, keep them RESTful, but don't hesitate to create endpoints that are not RESTful when it is practical

### Browser support

We support modern browsers. Notably, IE 10 and above. Our browser support is in sync with the browser support of Google web properties, as [declared here](https://support.google.com/a/answer/33864?hl=en)

## Further reading

* http://docs.python-guide.org/en/latest/

## Commit messages' format

```bash
[ex][m]: plotly json examples - fixes #23.
```

That is:

* a tag: [ex] this is an example - you make these tags up and use them consistently.
* a size: [m] a size of this commit one of xs s m l xl
* a short descriptive sentence of what you did. I need this as well as what issue this refs as I need to be able to understand the commit on its own without reading something else.
* Finally anything that involves referencing or closing a github issue. e.g. refs #xx or fixes #xx (fixes and closes are synonymous so use either one)

So command would look like this:

```bash
git commit -m '[ex][m]: plotly json examples - fixes #23.'
```
