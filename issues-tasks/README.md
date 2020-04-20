# Issues / Tasks

For every task we are working on we are creating an issue in GitLab. Because we are a distributed organisation it is crucial that we all adhere to the same format to ensure everyone understands content, requirements, status, collaborators etc. This document tells you all there is to know to set up an issue in line with Datopian standards. 

## Creating Issues

This key information should be present:

* Short description: what is involved. A user story/job story if possible.
* Acceptance criteria: what would it mean for this to be done.
* Tasks/Checklist: a list of tasks involved to accomplish this task. If you are not sure yet a first task should be "Analyze this and get set of tasks".

```
Short description of bug or feature need preferentially in a job story form.

[Can have multiple items esp if an epic]

[May have a sub section called Stories if you want to list stories]

[Optional: *Requestor:*]

[Optional: *Owner:*]

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

### Issue Naming

* Put [epic] prefix in title for epic issues
* (Optional) Grouping ... e.g. `[ux]` for ux issues

### Relationships between Issues

Make sure you record relationships between issues, e.g.:

* Individual issues and their epics.
* Support requests and their fixes.

:::tip
Use keywords such as 'parent of #...', 'child of #...', 'depends on #...' in the issue description to automatically create these relationships.
:::

::: tip
On Github (and GitLab) you can create an issue template so this structure is always present.
:::

## Labels and Milestones

Labels are a great way to highlight the status, relationship and context of issues. For example: 

* Support issues must have a support label (indicating their support package).
* All client related issues must have a client label (all colored #800080).
* Issues related to other, internal, projects need to be labelled accordingly.
* Contextual labels are encouraged:
  * 'Source' labels for support issues (e.g. client/sentry/uptime etc.).
  * 'Technical Debt', 'Bug' etc.

Once labels are prioritised or worked on they need to be labelled accordingly and added to the relevant milestone. A detailed description of how to use labels and milestones within sprints can be found in the [Datopian Playbook, Agile Delivery](https://playbook.datopian.com/agile/#the-sprint-process-and-key-concepts). 

## Adding an Estimate

**Github:** Using ZenHub you can add estimates. These should be in hours. Epics: your estimate for an epic should only be for time on subtasks **not** included in sub-issues.

**GitLab:** Estimation support is built in, e.g. put ‘/estimate Xh’ in the comments to add estimated time or ‘/spend Xh’ for time consumed.

## Completing Tasks

When completing a task (i.e. a checklist item) you SHOULD:

* Check the item.
* Edit the item to add some information about what happened and make this obvious (e.g. use bolding) so that people can see at a glance the status of the issue (and don't have to wade through all the comments).
* Leave a comment on the issue task so that people get notified.

For example, suppose the task was:

```
* [ ] Create the mockup of front page
```

The updated item would be:

```
* [x] Create the mockup of front page -- **Done -- mockup here {LINK}. Few minor items to finalize once we have answers from client**
```

And the comment here would be almost identical (often comments can be terser):

```
Mockup complete:{LINK}. Few minor items to finalize once we have answers from client.
```

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
* If `INVALID, WONTFIX, DUPLICATE` also assign the relevant label. Why? Labels show up listing and comments don't. Conversely labels are not obvious when reading the issue comment thread.

::: tip
Use the 'Fixes #...' keyword in your commit messages (or pull request descriptions) to automatically close issues when a PR is merged.

You can refer to issues in another repo by using the full notation, e.g. 'fixes DatopianGlobal/PM#10'.
:::
