# Issues / Tasks

## Creating Issues

This key information should be present:

* Short description: of what is involved. A user story if possible
* Acceptance criteria: what would it mean for this to be done
* Tasks/Checklist: A list of tasks involved in doing this task. If you don't know a first task should be "Analyze this and get set of tasks"

```
Short description of bug or feature need preferentially in a job story form.

[Can have multiple items esp if an epic]

[May have a sub section called Stories if you want to list stores]

## Acceptance [Criteria]

* [ ] ...
* [ ] ...

## Tasks

*Task list*

* [ ] ...
* [ ] ...

## Analysis

*This section is optional. It is where you provide further analysis of the problem and analyze potential solutions, ending with a recommendation and tasks (the tasks are usually moved out into the tasks section above)*
```

All issues must be properly labelled:
- Support issues must have a support label (indicating their support package)
- All client related issues must have a client label (all colored #800080)
- Issues related to other, internal, projects need to be labelled accordingly
- Contextual labels are encouraged:
  - 'Source' labels for support issues (e.g. client/sentry/uptime etc.)
  - 'Technical Debt', 'Bug' etc.

Make sure you record relationships between issues, e.g.
- Individual issues and their epics
- Support requests and their fixes

:::tip
Use keywords such as 'parent of #...', 'child of #...', 'depends on #...' in the issue description to automatically create these relationships.
:::

::: tip
On Github (and Gitlab) you can create an issue template so this structure is always present.
:::

### Issue Naming

* Put [epic] prefix in title for epic issues
* (Optional) Grouping ... e.g. `[ux]` for ux issues


## Adding an Estimate

**Github:** Using ZenHub you can add estimates. These should be in hours. Epics: your estimate for an epic should only be for time on subtasks **not** included in subissues.

**Gitlab:** Estimation support is built in.


## Closing Issues

When closing issues you should leave a comment like this so that readers (including you later) are clear at glance what the outcome was and why, including being able to locate quickly any outputs produced as part of resolving the issue.

```
FIXED | INVALID | WONTFIX | DUPLICATE. *Insert
your comment about what resolved this with links or issue references.*
```

Example:

```
FIXED. See commit {link to commit} and staging  {link to page on staging that was changed}.
```

```
WONTFIX. This is not worth doing as the benefit is minor and a lot of work to implement e.g. we have to change the whole way we do search.
```

Notes:

* When issues are closed in a commit you do not need to add a separate comment.
* If `INVALID, WONTFIX, DUPLICATE` also assign the relevant label. Why? Labels show up listing and comments don't. Conversely label is not obvious when reading the issue comment thread

::: tip
Use the 'Fixes #...' keyword in your commit messages (or pull request descriptions) to automatically close issues when a PR is merged.

You can refer to issues in another repo by using the full notation, e.g. 'fixes DatopianGlobal/PM#10'
:::

