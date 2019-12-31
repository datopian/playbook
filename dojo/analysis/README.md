# Analysis: Needs, Design and Planning

We use the term "Analysis" broadly to cover:

* Distinguishing Needs
* Designing solutions
* Planning work

It is therefore a broader than just "requirements analysis" (capturing needs), it also includes designing and architecting solutions and planning implementation.

In keeping with a general agile approach, the analysis process should be kept in a healthy balance and iteration with implementation. In addition, analysis itself can cycle over its sub-stages: analysis feeds into design and planning, which, in turn, feeds back into further analysis.

Finally, we emphasize that analysis is applicable both to large projects and to a single simple task. Just as test-driven development is worthwhile even for simple changes, so analyis will pay dividends even for small script or a minor change to a website.

## Analysis in Context

Analysis is one part of the larger software development lifecycle. It is the yin to the implementation yang. It is the "look before you jump" companion to "let's just code".

```mermaid
graph LR

analysis[Analysis]
impl[Implementation]

analysis --> impl
impl -.-> analysis
```

In agile fashion, the process is a loop as implementation leads back into analysis as new needs are discovered, or simply as more user stories are pulled down from the backlog for detailed analysis and planning.

Breaking this down in more detail we can see it clearly mapped against classic software development life cycle with its phases of: requirements analysis, designing architecture, development and programming, testing and deployment.

```mermaid
graph LR

subgraph Analysis
  needs[Needs]
  design[Design]
  planning[Plan]
end

subgraph Implementation
  coding[Code]
  testing[Test]
  deploy[Deploy]
end

needs --> design
design --> planning
planning --> coding
coding --> testing
testing --> deploy
```

NB: we have drawn this to follow classic software development and omitted certain details. For example, testing (if we test-driven development) may come both before and after development etc. And, of course, implementation loops back into analysis.


## Analysis Overview

There are 3 sub-stages of analysis:

1. **Needs**: Capturing and distinguishing needs of clients and users
2. **Design**: Researching, designing and architecting a solution to address those needs utilizing and developing our (and others) tools and patterns
3. **Plan**: planning work to deliver that solution. This includes breaking down a design into tasks, clarifying their dependencies and estimating these (i.e. a roadmap).

```mermaid
graph TD

needs --> epics
epics --> analysis
analysis --> plan

subgraph "What we want"
  needs[Needs Discovery]
  epics[Distillation into e.g. Epics]
end

subgraph "How we do it"
  analysis[Technical Analysis]
  plan[Plan of Work / Prioritized Backlog]
end
```

```mermaid
graph TD

needs[Need Discovery]
epics[Epic Distillation]
analysis[Technical Analysis]
planning[Planning]

summary((Needs<br/>Summary))
epicsout((User Epics))
design((Design))
plan((Plan of Work))

needs --> epics
epics --> analysis

needs -. produces .-> summary
summary -. input to .-> epics
epics -. produces .-> epicsout
epicsout -. input to .-> analysis
analysis -. produces .-> design
analysis  --> planning
design -. input to .-> planning
planning -. products .-> plan
```

## Distinguishing Needs

This approach borrows from the GTD "Inbox" and information processing pattern.

1. **Capture** *everything* you can into a Needs Document usually in a section called "Inbox". This is a brain dump type exercise where you capture as much as possible. This can include half-done user stories, emails, technical diagrams, requirements etc.
2. **Clarify** Process this information into distilled user or job "epics", i.e. high level summaries of needs in the form of [job stories][] (or [user stories][]).
    * You can start by Inline as much as is relevant from the inbox items into the document.
    * Organize that, pulling together common items.
    * Start creating User / Job "Epics" in a new section

At the end of this process you should have a set of high level epics with associated backup material (in bullet points or in an appendix).

Now that you have an initial set of needs you can move onto designing a solution.

:::tip
We prefer the term need or want to requirements. It helps focus on the overall desire of the user rather than the specifics of a solution.
:::

[job stories]: /job-stories/
[user stories]: /user-stories/


## Design and Architecture

In this section you design a solution. In software this may involve doing some degree of technical architecture: specifying components and their interconnections, component behaviour etc.

1. **Research**: search for existing patterns and tools that address this kind of problem. How well do they fit etc.
2. **Select and adapt**: select existing patterns and/or tools that can be adapted to this purpose. How do they fit together? What work is required to connect them? Are new bespoke components needed?
3. **Blueprint** design and architect an outline of the overall solution

This process may again use the GTD Inbox + Clarify pattern with the research stage being "inbox-y" with a lot of quick capturing of ideas and tools followed by some annotation and analysis. It is fine if this research is quite messy as it is then followed by the clarification (select and adapt) into the design blueprint.

## Plan the Work

The final stage involves breaking down the solution into distinct tasks and clearly defining done in the form of acceptance criteria. It may also involve estimation of those tasks to 

Our usual process involves creating one of more task epics following the [issue / tasks template][issues]. Depending on the needs of the situation these epics may be more or less detailed and in some cases you may even break out explicit sub-tasks at finer levels of detail. This can be useful if accurate estimation is needed -- though beware of false precision.

## Examples

TODO e.g. Quizzical, doing tech docs

* [Harvester Needs Analysis - Dec 19](https://docs.google.com/document/d/1C9GrgJrRJcwT8ZbYIIggWpOd_paZqdxq_7J00-vUZHA/edit)
* [Full Data Download (EDS) - Dec 19](https://docs.google.com/document/d/1yKK9_mRHC9-X9hN263OpjEKZb1jOOVDC5GYHdrCHam8/edit)
* [Quiz Format Research and Design](https://gitlab.com/datopian/experiments/quizzical/issues/2) -- this is a gitlab issue and is in the "epic" format for issues. It is a little messy but still gives a good sense of a real world analysis (this time to design a quiz format).


## Structure of an Analysis Documents

Documents related to Analysis SHOULD be named:

`... [Needs] Analysis`

The `[Needs]` indicates that this optional. If the document is *just* needs information without design then Needs SHOULD be included.

For example:

`Awesome Data Portal Needs Analysis`

This is the suggested default structure for a large scale Analysis document. You will generally work backwards through this document adding sections as you go. That is, you will start with Inbox, create the Epics section, then do Research, then do Design based on the Research and finally produce the Summary which summarizes the needs (epics) and solution (design).

:::tip
Inbox and Research are both "Inbox" sections that then get distilled: Inbox into Epics and Research into Design. As such, it can be useful to move Research down below Epics and to mark both as done in some way e.g. by adding "Archive" to their names. Given their archival nature, when sharing the doc with third parties one may even consider removing these sections or clearly separating from the 3 main sections to avoid confusion.
:::

```
# Summary

# Design

# Research 

# Epics

# Inbox
```

A smaller scale version of this is the [template for issues / tasks][issues].

[issues]: /issues-tasks/

### Templates

* [Google Doc Template][template]
* [Smaller scale version template in markdown for issues / tasks][issues].

[template]: https://docs.google.com/document/d/1a_KTb2d70odrl1EF12AOQ0zzfxlVcHObnUPhhdFtCAw/edit#

<mermaid />

