# Onboarding Guide

## Intention

*The intention of this Onboarding Guide is to fulfil on the following user story.*

As an Onboardee I want a simple step by step process to get set up (that I can do largely on my own) so that I am ready to go (and know i am ready to go) and feel part of the team. 

## Start your onboarding

*We want your feedback as new joiners! Be critical, tell us what does not work, what isn’t obvious!*

1. **Login in to your email account** and read your onboarding email (if you haven't already)

2. **Read the [Handbook main guide](https://handbook.datopian.com/guide/)**. Note ALL questions that arise in a [google doc](https://docs.google.com/document/)

2. **Setup accounts on the systems we use**. See below. **Do this before you do next steps!**

3. Add contact details to [Team Phonebook][phonebook] 

4. Email the Onboarder that you have accounts set up and details in team phonebook. They will now go and add you to relevant systems

5. Wait until you get a response to let you know you are added to relevant systems

6. Read about your work processes for the job you do

5. Go through work “processes” in more detail; This depends on the accountability the Onboardee will assume; E.g.

    * Work sprints
    * Kanban management 
    * Practice on Gitlab (acceptance criteria, checklist, closing issues…)
    * How to take meeting notes on operation meeting notes

7. Do the [onboarding quiz][quiz]

[quiz]: https://docs.google.com/forms/d/e/1FAIpQLSc4R_LiybAO6tGIYU9wbgg9xDyU9kSf5cG8__AKVaMg9gC1Bw/viewform?usp=pp_url
[phonebook]: https://docs.google.com/spreadsheets/d/1hFw3jFHq_TF4m_Z76n0uzBz85UB9Yht4P2IZAPicBOI/edit#gid=129072431

## Systems we use

Create an account on each of these. Please make sure you set up Gravatar first. For items marked with a `*` please add your account id to the phone book.

* Gravatar - https://gravatar.com. **Do this before anything else so your gravatar is used on the other accounts.** We set this up so that your profile picture will show up automatically on your profile on other systems. Add *all* the email(s) you will use on other accounts. For example, if you plan to sign up to Trello with your personal email rather than your organization email then also add that email address to your gravatar.
* Github - https://www.github.com **Please tell your onboarder your github handle so we can add you**
* Gitlab - https://gitlab.com/ **Please tell your onboarder your gitlab handle so we can add you**

## Setting up Google Drive

After setting up your email address, you will have access to **GSuite**, and of course, [Google Drive](https://drive.google.com/drive/).

The Onboarder will grant you access to relevent Team Drives, so you can access and store the information / documents you require.

* Any new documents / sheets /presentations you create should be created in the appropriate folder in the Team Drive, **not your personal drive**. This speaks to our open and collaborative working culture. 
* If you require access to files that you currently don't have access to, please reach out to your Onboarder.

### Style Guide

Set up google docs to use our default styles: [ Handbook Style Guide section ][styleguide]

[styleguide]: /guide/#style-guide

### E-Mail Signature
Please implement this [E-mail signature template](https://docs.google.com/document/d/1gpw5zucdlA_tU5geFpIs89AxuJ0is8kMEh6mIDkttnY/edit) into your gmail account


## Using the Calendar

It is expected that you keep your calendar up to date, so that if it shows as free, that means a colleague can add a meeting during that period. For more information please check the [Guide Section](https://handbook.datopian.com/guide/#our-principles) in the Handbook.


### Getting paid and claiming expenses

Please read the [ Getting Paid ](https://handbook.datopian.com/guide/#getting-paid) and the [ Expenses ](https://handbook.datopian.com/guide/#expenses)  sections of the handbook. 

### Stand up

The team used to have a daily stand-up. This was replaced by asynchronous update on the stand-up on Google chats in the Standup channel in the following format:

* Plan
* Recap
* Blockers (is there something getting in the way for you to complete your tasks)
* Availability



## Tech Team Onboarding (Datahub)

**This section was writen for developers working on Datahub but contains a lot of useful information for Developers working for Datopian.**

*Training new Jedis!*

3 parts:

1. Processes and tools
2. Using DataHub
3. Packaging data

### Step I: Processes and tools


Intention: Onboardee is familiar with our work environment and has relevant tooling installed

* [ ] Check: know gitter channel to use by default, know we use team rarely, know how to get bot help, know key bot commands
* [ ] Check: key github orgs: datopian (pretty empty) and datahub stuff which datahq, datasets org for storing datasets
* [ ] Check: can do a standup (do in bot channel and then delete)
* [ ] Check: have they read team guide in detail, have they read about scrum and user stories.
	* Check: have them create a user story ...
* [ ] Coding standards: https://github.com/okfn/coding-standards
* [ ] Have python, node, git etc installed

In addition, we learn about what we can improve in our documentation of processes.

#### Agenda

* Setting up access
  * gitter channels (datahub, dev, team, frictionlessdata, datahubio)
  * github repo and org (datahq for now)
* Processes
  * Do a standup
  * Do a user story
* Small introduction about workflow: boards, issues, milestones, sprint planning
* Relevant tooling: git, python, node, ...
* Coding standards: https://github.com/okfn/coding-standards

### Part II: DataHub

Intention: you can publish data to the DataHub 

* have published a sample dataset to your account
* provided feedback on the experience


:::tip
Onboarder: Watch them via screen share (as they download) and have them take notes on this experience (what worked, what didn't)
:::

Agenda:

* Sign up to datahub and follow instructiions
* Command line tool: data-cli - only provide documentation and then have them push sample dataset or file
	* https://datahub.io/docs/getting-started/publishing-data
* data-desktop - only provide documentation (blog post re alpha release)
	* push sample dataset or file

### Part III: Packaging Data

Intention: you are able to curate a new (core) dataset and publish it to DataHub

*This is a task the Onboardee will go away and do on their own once they are briefed*

Agenda

* Introduction about Data Package https://frictionless.io/
  * Specifications https://specs.frictionlessdata.io/
* Know about core data and data curation: http://datahub.io/docs/core-data/curators
* Introduction to automated curation and publishing: Data Package + DataFlows + Github + Travis
	* DataFlows - https://github.com/datahq/dataflows
	* Travis
* **Practice task**: Curate a new dataset (look through registry and select one)
	* Select a dataset e.g. (check these still need doing)
		* Global house prices: https://github.com/datasets/registry/issues/55
		* Exchange rates: https://github.com/datasets/registry/issues/15
  * Check: they know what their task is for next 24h (i.e. package a dataset). What would "done" look like?


## Wrapping up 

_Please go through the checklist to see if you have completed your onboarding_

* You have had your onboarding call
* Read the Onboarding and Guide pages of the Handbook
* Updated the phonebook with your details
* You have access to Team Drives, email, team calendar
* You have access to our Github/Gitlab repo   
* You have been introduced to the team on Google Chats and you have said hello to the team 
* You have installed default styles to your googledoc
* You have completed the quiz
* Have posted your first daily stand-up
