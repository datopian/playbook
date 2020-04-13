# Version Control

We use Git for all projects.

### Commit messages

```bash
[ex][m]: plotly json examples - fixes #23.
```

That is:

* a tag: `[ex]` this is an example -- you make these tags up and use them consistently.
* a size: `[m]` a size of this commit one of the following: `xs`, `s`, `m`, `l`, `xl`.
* a short descriptive sentence of what you did. I need this as well as what issue this refs as I need to be able to understand the commit on its own without reading something else.
* Finally anything that involves referencing or closing a github issue. e.g. `refs #xx` or `fixes #xx` (fixes and closes are synonymous so use either one).

So command would look like this:

```bash
git commit -m '[ex][m]: plotly json examples - fixes #23.'
```

### Branch management

We generally follow [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/), with some modifications, and some flexibility per project. The following should hold true for pretty much all projects:

* Have a `master` branch.
* Never commit directly to `master`.
* Always work from a `feature/{}` or a `fix/{}` branch that is checked out from `master`.
* Always reference issues from Git messages using `#{issue_id}`, and the various other related conventions used by most Git hosts.
* Properly describe changes in commit messages: "Fixes database migration script failure on Python 2.7", not "Fix."
* Prefer to use the "Squash and merge" approach for pull requests using GitHub web interface.
