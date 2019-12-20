# Job Stories

::: warning
At Datopian we're moving to job stories from [user stories](/user-stories/).
:::

Like [user stories](/user-stories/), job stories are a great way of gathering requirements. They are especially in an agile environment, where one of the key values is **responding to change** over *following a plan*.

Job stories give the team more context for the user’s situation and allows them to share their viewpoint and create a solution for what the user wants to do.

Job stories are very similar to user stories with one key difference: personas becomes contexts (and jobs). We prefer job stories to user stories because they focus on a job to be done rather than a persona -- "When I'm on the morning commute and bored" vs "As a a middle-aged, educated person".

## Quick Start

**When** *<situation/context>*, **I want to** *\<motivations\>*, **so I can** *\<expected outcome\>*.

Example:

**When** I'm hungry, in a rush, and not sure when I'll be able to eat next, **I want to** be able to eat something 'on the go' with one hand **so I can** satisfy my hunger and make it to my appointment on time.

::: tip
Define problems, not solutions
:::

It is about understanding *what-is*, not creating a *what-should-be*.

## The More Context, the Better

In the image below, the following solutions could work:

* situation version 1: a sit down pizzeria
* situation version 2 & 3: a pizza in a take-away box
* situation version 4: a ready-made slice of pizza given in hand

![more context is better](https://miro.medium.com/max/2048/1*MvlgRZL90wtgSsvmtdZjww.png)

Source: Alan Klement 2013[^5-tips]

[^5-tips]: [Klement, Alan. (2013). _5 Tips For Writing A Job Story_. post on JTBD.info](https://jtbd.info/5-tips-for-writing-a-job-story-7c9092911fc9)

## Roles / Characters

In case the product has multiple roles or characters (different from personas), it can be helpful to include the role or character in the 'When ...' clause.

This would be similar to the 'As a ...' clause in a user story.

Using Ebay as an example:

> **When a buyer** has already made a bid on an item, they are anxious about missing a counter bid and **want to** immediately receive counter bid notifications, **so they can** have enough time to evaluate and update their own bid.

In this case it is helpful to clarify who we’re talking about, a *buyer* or a *seller*.

You can read more about characters here: https://medium.com/down-the-rabbit-hole/replacing-personas-with-characters-aa72d3cf6c69

### Why Personas are Not That Useful

As Alan Klement writes in [Replacing Personas With Characters][replacing]:

[replacing]: https://medium.com/down-the-rabbit-hole/replacing-personas-with-characters-aa72d3cf6c69

> Because personas focus on creating a story made up of a customer’s attributes, instead of a story that explains a purchase, personas leave the brain in a unsatisfied state. To fix this, in just a split second, the brain decides to make up it’s own story.

This makes them:

* Prone to prejudice/biases that the team might have for that persona or role.
* Gives a false sense of knowing the customer.

::: tip
Products don't match people, they match problems.[^intercom-pdf]
:::

[^intercom-pdf]: [Intercom on Jobs-to-be-Done. PDF](https://marketing.intercomcdn.com/assets/jtbd/v1/Intercom_on_Jobs-to-be-Done.pdf)

## Further Reading

Introduction to Job to be Done from Clayton Christiansen (excellent):

<iframe width="560" height="315" src="https://www.youtube.com/embed/sfGtw2C95Ms?start=28" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

* [Know Your Customers’ "Jobs to Be Done"][jobs-2016]
* [Marketing Malpractice: The Cause and the Cure (2005][marketing]

[jobs-2016]: https://hbr.org/2016/09/know-your-customers-jobs-to-be-done
[marketing]: https://hbr.org/2005/12/marketing-malpractice-the-cause-and-the-cure

Comparison of users stories with job stories:

* [Klement, Alan. (2013). *Replacing The User Story With The Job Story*. post on JTBD.info](https://jtbd.info/replacing-the-user-story-with-the-job-story-af7cdee10c27)
* [Fiedler, Kyle. (2015). *Converting To Job Stories*. post on thoughtbot](https://thoughtbot.com/blog/converting-to-jobs-stories)
* [Klement, Alan. *Designing features using Job Stories*. guest post on Intercom](https://www.intercom.com/blog/using-job-stories-design-features-ui-ux/)
  
Explanation of why it's important not to insert solutions when designing a job story:

* [Klement, Alan. (2013). *5 Tips For Writing A Job Story*. post on JTBD.info](https://jtbd.info/5-tips-for-writing-a-job-story-7c9092911fc9#da5a) (see tip 3)
* [Furnas, Josh. (2017). *Great Innovators Start with Customer Struggles (Not Customer Needs)*. post on JTBD.info](https://jtbd.info/great-innovators-start-with-customer-struggles-not-customer-needs-7f9a4fd9412a)

A good introduction to the Jobs to be Done theory:

* [Klement, Alan. (2016). *What is Jobs to be Done (JTBD)?*. post on JTBD.info](https://jtbd.info/2-what-is-jobs-to-be-done-jtbd-796b82081cca)

For a more in depth look into the Jobs to be Done theory:

* [Klement, Alan. (2016). *when coffee and kale compete: become great at making products people will buy*. book](http://www.whencoffeeandkalecompete.com/)
* [*Intercom on Jobs-to-be-Done*. PDF](https://marketing.intercomcdn.com/assets/jtbd/v1/Intercom_on_Jobs-to-be-Done.pdf)
* Christensen M., Clayton. (2016). *Competing Against Luck: The Story of Innovation and Customer Choice*. book

## Appendix

### The Problem With User Stories

> When I used to write user stories with my team, my teammates would read them, think they understand them and then go on with their own interpretation of the story, which ended up being different than mine.  I started noticing the problem was with the user stories, and not me, when different engineers would interpret the same story very differently.[^problem-with-user-stories]

[^problem-with-user-stories]: [Klement, Alan. (2013). *The Problem With User Stories and What's Better...*. personal blog on blogspot](https://web.archive.org/web/20160616195445/http://alanklement.blogspot.com/2013/03/the-problem-with-user-stories-and-whats.html)

**As a** *\<persona/role\>*, **I want to** *\<action\>*, **so that** \<outcome/benefit\>.

* ignores context, situations and anxieties
* a lot of assumptions sneak in

![too many assumptions](https://i.imgur.com/BpLmQsj.png)

To understand why person's are irrelevant, take a look at the following series of user stories:
![user stories table](https://miro.medium.com/max/922/1*AKw3nKW5wo3j1WvepFgOLg.jpeg)

Does having the persona/role in there add much?

### The Theory Behind Job Stories

Jobs-As-Progress: a theory that is promoted by Clayton Christensen, Alan Klement and Bob Moesta.[^jobs-as-progress]

[^jobs-as-progress]: [Klement, Alan. (2018). *Know the Two — Very — Different Interpretations of Jobs to be Done*. post on JTBD.info](https://jtbd.info/know-the-two-very-different-interpretations-of-jobs-to-be-done-5a18b748bd89)

> The phrase “jobs to be done” carries a lot of meaning with it. The three most important parts are:
>
>* **Job**. Just as an employer hires and fires employees to improve itself, consumers hire and fire products to help them achieve progress. Also like the employer/employee relationship, the product does the work, while the consumer enjoys the benefits of that work.
>* **to be**. When something doesn’t exist yet, we can say it is to be. A Job to be Done, then, is to create a life-situation that doesn’t exist yet.
>* **Done**. When I hire a product and make the progress I desire, then the Job is Done.[^why-the-name]

[^why-the-name]: [Klement, Alan. (2018). *Why Is It Called “Jobs to be Done”? (And Why Is This Important?)*. post on JTBD.info](https://jtbd.info/why-is-it-called-jobs-to-be-done-and-why-is-this-important-7febc880289b)

Theory tells you how and why things happen, not what you should do about it. Theory is descriptive, not prescriptive.
