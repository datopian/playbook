# Issues / Tasks

We create issues for most tasks we are working on. The following provides the pattern for creating and managing issues. We recommend you follow these pattern for two reasons:

1. It helps *you* think through the task (much effort has been saved by good job stories even on the most mundane of tasks).
2. A good, consistent structure helps *others* understand and facilitates communication in a distributed, multi-cultural team.

Both these points apply not only to issue creating but also updating and closing: will you remember in 3 months why you closed that issue and how? If you take over a task from an unavailable team mate can you quickly understand what they completed and where that work is?

## Creating Issues

This key information SHOULD be present:

* Short description: what is involved. A user story/job story if possible.
* Acceptance criteria: what would it mean for this to be done.
* Tasks Checklist: a list of tasks involved to accomplish this task. If you are not sure yet a first task should be "Analyze this and get set of tasks".

```markdown
Short description of bug or feature need preferentially in a job story form.

[Can have multiple items esp if an epic]

[May have a sub section called Stories if you want to list stories]

## Acceptance

* [ ] ...
* [ ] ...

## Tasks

* [ ] ...
* [ ] ...

## Analysis

*This section is optional. It is where you provide further analysis of the problem
and analyze potential solutions, ending with a recommendation and tasks
(the tasks are usually moved out into the tasks section above).*
```

::: tip
On Github (and GitLab) you can create an issue template so this structure is always present.
:::

### Issue Naming

Issue creators MAY use the following naming patterns:

* `[epic]` prefix in title for epic issues
* (Optional) Grouping ... e.g. `[ux]` for UX issues

### Relationships between Issues

Make sure you record relationships between issues, e.g.:

* Individual issues and their epics.
* Support requests and their fixes.

:::tip
Use keywords such as 'parent of #...', 'child of #...', 'depends on #...' in the issue description to automatically create these relationships.
:::

## Labels and Milestones

Labels are a great way to highlight the status, relationship and context of issues. For example:

* Support issues must have a support label (indicating their support package).
* All client related issues must have a client label (all colored #800080).
* Issues related to other, internal, projects need to be labelled accordingly.
* Contextual labels are encouraged:
  * 'Source' labels for support issues (e.g. client/sentry/uptime, etc.).
  * 'Technical Debt', 'Bug', etc.

Once labels are prioritized or worked on they need to be labelled accordingly and added to the relevant milestone. A description of how to use labels and milestones within sprints can be found in [Agile Delivery](/agile/).

## Adding an Estimate

We RECOMMEND estimates because you need them to make "promises" and by making them you have data from which to improve both estimating and performance.

**Github:** Using ZenHub you can add estimates. Epics: your estimate for an epic should only be for time on subtasks **not** included in sub-issues.

**GitLab:** Estimation support is built in, e.g. put `/estimate Xh` in the comments to add estimated time or `/spend Xh` for time consumed.

## Completing Tasks

When completing a task (i.e. a checklist item) you SHOULD:

* Check the item.
* Edit the item to add some information about what happened and make this obvious (e.g. use bolding) so that people can see at a glance the status of the issue (and don't have to wade through all the comments).
* Leave a comment on the issue task so that people get notified.

:::tip WHY
Why do both description updates and commenting? Because we want both *flow* and *state* information readily available. For example, a product owner may just want to see quickly the overall state of the work by looking at the issue description without having to wade through a complex comment thread. A comment is needed as it provides a changelog, a structured discussion and notifications (plus updating the description is not visible in the changelog and triggers no notification).
:::

For example, suppose the task was:

```markdown
* [ ] Create the mockup of front page
```

The updated item would be:

```markdown
* [x] Create the mockup of front page **Done -- mockup here {LINK}. Few minor items to finalize once we have answers from client**
```

And the comment here would be almost identical (often comments can be terser):

```markdown
Mockup complete:{LINK}. Few minor items to finalize once we have answers from client.
```

## Closing Issues

When closing issues you MUST leave a comment like this so that readers (including you later) are clear at glance what the outcome was and why, including being able to locate quickly any outputs produced as part of resolving the issue.

```markdown
FIXED | INVALID | WONTFIX | DUPLICATE.
*Insert your comment about what resolved this with links or issue references.*
```

Example:

```markdown
FIXED. See commit {link to commit} and staging  {link to page on staging that was changed}.
```

```markdown
WONTFIX. This is not worth doing as the benefit is minor and a lot of work to implement
e.g. we have to change the whole way we do search.
```

Notes:

* When issues are closed in a commit you do not need to add a separate comment.
* If `INVALID, WONTFIX, DUPLICATE` you SHOULD also assign the relevant label. Why? Labels show up listing and comments don't. Conversely labels are not obvious when reading the issue comment thread.

::: tip
Use the 'Fixes #...' keyword in your commit messages (or pull request descriptions) to automatically close issues when a PR is merged.

You can refer to issues in another repo by using the full notation, e.g. 'fixes DatopianGlobal/PM#10'.
:::
