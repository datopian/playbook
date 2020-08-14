# Agile Delivery

This document introduces our scrum-based agile process for delivering projects.

This process can be used for both technical and non-technical projects[^1].

The key principles of the agile approach to delivery are[^2]:

1. Organize work in **short cycles** called **sprints** [2(-4) weeks]
2. The management **does not interrupt** the team during a work cycle
3. The team reports to the **product owner** (who represents the client)
    * Team = delivery team + scrum master
    * The primary client is the key stakeholder(s) benefitting from the project. The secondary client is the delivery organization who have a fiscal and reputational stake.
4. The team estimates **how much time** work will take
5. The team decides **how much work** it can do in an iteration
6. The team decides **how** to do the work in the iteration
7. The team **measures its own performance**
8. Define work goals **before** each cycle starts
9. Define work goals (primarily) through **job stories**

[^1]: Whilst Scrum (and Agile generally) was originally developed for software projects, it has now successfully been used for many non-software projects.
[^2]: Adapted from http://www.forbes.com/sites/stevedenning/2011/04/29/scrum-is-a-major-management-discovery/


## Roles

These are largely based on standard scrum process see e.g. Wikipedia http://en.wikipedia.org/wiki/Scrum_(software_development)

### Product Owner

Represents the stakeholders and is the voice of the customer. He or she is **accountable** for ensuring that the **team delivers value to the business**. The Product Owner's primary task is the creation and prioritization of job or user stories. Specifically, the Product Owner:

* writes (or has the team write) customer-centric items typically [user stories][] or, preferably, [job stories][]
* **assigns "business" value** to them
* **prioritizes** (ranks) them
* and adds them to the [product backlog](http://en.wikipedia.org/wiki/Scrum_(software_development)#Product_backlog)

Scrum teams should have one Product Owner, and while they may also be a member of the delivery team, this role should not be combined with that of the Scrum Master.

See also http://www.mountaingoatsoftware.com/agile/scrum/product-owner

[user stories]: /user-stories/
[job stories]: /job-stories/

### Scrum Master

Delivery is **facilitated** by a Scrum Master, who is accountable for **removing impediments to the ability of the team to deliver the product goals** and deliverables. The Scrum Master is **not** a **traditional team lead or project manager,** but acts as a buffer between the team and any distracting influences. The Scrum Master ensures that the process is used as intended. The Scrum Master is the **enforcer of the rules of process**, often **chairs key meetings**, and **challenges the team to improve**. The role has also been referred to as a **servant-leader** to reinforce these dual perspectives.

### Delivery Team

**Responsible for delivering** potentially shippable increments (PSIs) of product at the end of each Sprint (the Sprint Goal). The Delivery Team is **self-organizing**, even though there may be some level of interface with other parts of the organization.


## Project Kick-Off and Preparation

Before one goes into the sprint cycle there is some preparatory work that should be done. Total time required should be no more than a day. However, for larger projects this may take longer, esp if the kick-off meeting involves discovering the product backlog with the priamry client. The Product Owner is overall responsible for this stage of the process.

### Project A10

: Product Owner  
:clock: 1h

* This work should result in the creation of a Project Overview document
* Total Budget
* Aims and Requirements (aka Purpose, Outcomes and Outputs. Also deliverables)
* Project Plan
* Issue tracker, repo etc (Or other key PM tools and links)
* Risks
* Resourcing Amount (FTE months)

### Key job stories

Product Owner as lead with involvement as appropriate of other relevant personnel

**[2-6h]**

* Generate first set of user stories for this project.
* Do **not** need to be comprehensive -- can add user stories later. However, good to have really core user stories down, and enough to cover, what (at this point), one would anticipate to be at least first 2-3 sprint iterations.
* Cannot over-state the value of generating (good) user stories at this point. Will have a transformative effect on the quality of the project.
* Should involve some or all of delivery team + scrum master, at least some part of this:

  * Gets everyone up to speed
  * Rubber-duck test (have to explain and walk through user stories with others which helps clarify them)

### Kick-off meeting

It is suggested this is merged with first sprint planning meet (however, can have separate, especially if you want to inform a broader group of people)

Product Owner, Scrum Master and Delivery Team need to be there


## The Sprint Process and Key Concepts

### 2-week sprint process

  * Tasks agreed in sprint planning meeting on a Monday -- sprint then runs for 2 weeks.
  * Tasks should be in product backlog (see next item).

### Product Backlog

See http://www.mountaingoatsoftware.com/agile/scrum/product-backlog -- we use GitLab or GitHub issues and project boards

* Product backlog consists of user stories or tasks related to user stories (should flag which user story a task relates to if not a single user story)
* Tasks are broken into at least 2 groups:

  * Prioritized (tasks in priority order). Only Product Owner should move tasks here
  * Unprioritized: storage place for all tasks that people have thought up but have not yet been prioritized (and are usually implicitly of lower priority than currently prioritized tasks)
  * Tasks should contain short descriptions and link to user story
  * **It's not necessary to start a project with a lengthy, upfront effort to document all requirements**

### Sprint Planning meeting

http://www.mountaingoatsoftware.com/agile/scrum/sprint-planning-meeting

* Results in 2 outputs

  * A sprint backlog -- A sprint backlog is a list of the product backlog items the team commits to delivering plus the list of tasks necessary to delivering those product backlog items.
  * A sprint goal -- short, one- or two-sentence, description of what the team plans to achieve during the sprint. It is written collaboratively by the team and the product owner.

* Individual Tasks should be less than 2d total time (reduces estimation error)
* Meeting is timeboxed to 1-2.5h (~ 20-30m x size of FTE team)

### Sprint review

What did we ship this sprint? See http://www.mountaingoatsoftware.com/agile/scrum/sprint-review-meeting

* End of sprint (e.g. Friday).
* No more than 15 minutes times the number of people in team.
* Team shows what they accomplished during the sprint. Typically this takes the form of a demo.
* Kept very informal, typically with rules forbidding the use of PowerPoint slides and allowing no more than two hours of preparation time for the meeting. A sprint review meeting should not become a distraction or significant detour for the team; rather, it should be a natural result of the sprint.
* See Appendix for detailed overview.

### Sprint retrospective

What can we learn from this sprint for the future? See http://www.mountaingoatsoftware.com/agile/scrum/sprint-retrospective

* End of sprint (suggest holding straight after review). Even shorter.
* Start-Stop-Continue structure (what should team start doing, stop doing, and continue doing)

### Standup

See http://www.mountaingoatsoftware.com/agile/scrum/daily-scrum and http://en.wikipedia.org/wiki/Stand-up_meeting

* (Very) regular meeting -- e.g. daily.
* Purpose: keep team in sync; surface blockers.
* Each person answers 3 questions:

  * What did I accomplish yesterday?
  * What will I do today?
  * What obstacles are impeding my progress?

* meeting is strictly timeboxed to 5-15m

  * Answers should be very short -- each person should speak for no more than 2 minutes (less as the team gets larger).
  * If bigger issues arise, take them out of standup.

* Only people "committed" to the project may speak (anyone “involved” with the project may listen)

### Job Stories

See [Job Stories][job stories]

### Managing the Product Backlog Board

Milestones

* Sprints are organised via Milestones. Naming convention: `Sprint - DD MMM YYYY` with the date being the last day of the sprint.
* Issues scheduled for future sprints are allocated to the relevant milestone.
* Icebox - catch-all milestone for issues that are "someday maybe" type of things (not likely to be worked on the near-term)

Labels

* ‘Prioritized Backlog’ - issues that have been reviewed and prioritised but have not been allocated yet.
* ‘In Progress’ - issues currently worked. 
* ‘Blocked/Waiting For’ - if there is a blocker. 
* ‘In Review’ - issue is reviewed and/or has to be signed off. Once signed off, the issue needs to be closed.
* ‘Wontfix’, ‘Duplicate’, ‘Invalid’ - closed issue without being delivered, e.g. circumstances have changed, a duplicate issue has emerged which provides the desired outcome or the issue isn’t valid anymore. Note: add a short comment specifying the reason why the issue hasn’t been delivered.


### Estimating Cost

Estimation is central to Workability and low-stress because it allows us to make promises grounded in reality.

Estimation is the process of estimating time to complete tasks. There are many approaches to estimation.

Equally important as estimating, is **assessing** performance against estimates so as to improve our skill at estimating -- without assessment estimates don't get better, without assessment you don't know your velocity (how much you can actually get done).

We base our estimation on [planning poker][]. In the "extreme" version: tasks go to the lowest estimator. We generally do not practice that and instead it is up to scrum-master with delivery team to use planning poker to come to an agreed estimate via discussion. In general tasks that are over 5d should be broken down into smaller tasks. This will both improve estimation (errors greatly increase as tasks get larger) and make tasks better suited to planning (as tasks can fit inside one sprint).

[planning poker]: http://en.wikipedia.org/wiki/Planning_poker

### Estimating Business Value

This is done by the Product Owner and Product Owner ultimately has sole responsibility for setting business value.

Input can be taken from Delivery Team and recommend using same method as planning poker, capping maximum points at around 100.

### Sprint Review Meeting

At the end of each sprint, a sprint review meeting is held.

During this meeting, the **Scrum team shows what they accomplished during the sprint**. Typically this takes the form of a **demo of the new features**.

The sprint review meeting is intentionally kept **very informal**, typically with rules **forbidding the use of PowerPoint slides** and allowing **no more than two hours of preparation time** for the meeting.

A sprint review meeting should **not become a distraction or significant detour for the team**; rather, it should be a **natural result of the sprint**.

During the sprint review, the project is assessed against the sprint goal determined during the sprint planning meeting. Ideally, the team has completed each product backlog item brought into the sprint, but it's more important that they achieve the overall goal of the sprint.

**Structure Suggestion [based on** [***link***](http://nomad8.com/a-template-for-the-sprint-review/)**]**

#### 1. The Scrum Master opens the review and reiterates the purpose of the meeting [2m]

* Show what the team has built during the last sprint
* Engage with the audience
* Collect feedback

#### 2. The Product Owner presents what he wanted to get out of the sprint [3m]

* Describe the sprint goal and why you chose it
* Explain why it is important for the project and for the company as a whole
* Give people context about where we’re at in the greater scale of things

#### 3. The Scrum Master (+ Delivery Team) presents the sprint [5-7m]

* Tell the story of the sprint: How did it go? Was anyone sick? New team members? Anything else important?
* Give a status of the sprint and an overview of which stories were finished and which ones weren’t

#### 4. For each story: [less than 1.5h]

* The demoing team member shows the story description and describes the boundaries (explain the acceptance criteria without reading them out)
* Demonstrate the feature on a real system
* Take questions and listen to feedback while you demonstrate. Remember to collect ideas for new features and user stories to include on the product backlog.
* Repeat step 4 for all user stories the team finished during the sprint.
* On some teams we alternate who is doing the practical demonstrations for each user story, on some we alternate for or each sprint review and on others we always utilise the same team member’s talent for telling stories and guiding people through an entertaining demo. We do whatever works best for each team and audience.

#### 5. Scrum Master closes the demo [3m]

* Wrap up and thank people for their attendance and participation
* Communicate the time and date for the next end-of-sprint review.

References: http://www.mountaingoatsoftware.com/agile/scrum/sprint-review-meeting

### Sprint Review and Retrospective Template

As described above, the Sprint Review is an opportunity for the Scrum Team to inspect itself and identify improvements to be enacted during the next Sprint. However, if the sprint review doesn't have a structure, it is very easy to drift into chaos. This is why we came up with [Sprint Review and Retrospective Template](https://docs.google.com/document/d/1O2WsVE8reRhDJGRdr3oSmH-obV3-N_FdYoOF1cdHZ1s/edit). You can use it as a base to step on when closing the sprint - feel free to add a/o remove sections if they are not relevant for your project.

The template document contains:

* A gdocs template with explanations under each title
* A markdown template (e.g. for a gitlab/github issue)
* An example of a sprint review and retrospective 

### Sprint Retrospective

http://www.mountaingoatsoftware.com/agile/scrum/sprint-retrospective

## FAQ

### What about a Project Manager -- is the Product Owner the PM?

From [*this answer*](http://stackoverflow.com/questions/10775637/scrum-different-product-owner-and-project-manager)

The Product Owner and a Project Manager are quite different.

On a traditional project, a Project Manager, as the title implies, manages a project.

However, on a Scrum project, the Development Team manages their own work.

The Product Owner is responsible for maximizing the value of the product and the work of the Development Team. They are the sole person responsible for managing the Product Backlog.

Product Backlog Management includes:

* Clearly expressing Product Backlog items;
* Ordering the items in the Product Backlog to best achieve goals and missions;
* Ensuring the value of the work the Development Team performs;
* Ensuring that the Product Backlog is visible, transparent, and clear to all, and shows what the Scrum Team will work on next;
* Ensuring the Development Team understands items in the Product Backlog to the level needed.

