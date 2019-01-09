# Induction Guide

[[toc]]

## Intention

*The intention of this Induction Guide is to fulfil on the following user stories.*

Personas

* Inductee = New Joiner
* Inductor / Induction Manager = person setting up New Joiner

As an Inductee I want a simple step by step process to get set up (that I can do largely on my own) so that I am ready to go (and know i am ready to go)

As the Inductor I want to know what I need to do for and with the Inductee and that I've done it all so that Inductee is set up and supported and I don't miss things out

* Things i need to do before the Inductee starts their induction (e.g. ensure they have a contract)
* Things to do during induction
* Things to do after induction

## Inductor

*Note these steps need always be done in the order list. E.g. sometimes getting a formal contract completed may take some time and you can still set up their email and start induction*. 

1. **Contract**: Ensure they have a contract set up (and signed) - usually ops will take care of this
2. **GSuite Account and Email**: Create their email account e.g. first.last@domain.com on Google Apps and share the login details via email (part of email creation wizard in google apps)
3. **Induction email**: Send them induction email to their new org email cc'ing their personal email (if you have it)
4. **Create accounts**: on systems where they can't create themselves
   * Xero
   * Slack

Wait for them to get setup on Systems then ...

1. **Add them to teams**:
    * Trello: add to Org team
    * Gitter: add to relevant channels
    * Slack: add to relevant channels
    * Github: add as a member of the org, add to relevant teams
    * Gitlab: add as a member of the org, add to relevant teams
    * GSuite / Drive: add them to relevant team drives and google groups

### Welcome Email

Subject: Welcome to Viderum/Datopian - next steps in getting you set up

Hi {XXX},

Welcome to Datopian/Viderum.

In preparation for the induction call on Monday:

**1. Your Viderum Email**

We have created a Viderum email for you. You should have already received an email about this with details of how to sign in and set your password.

Please do that as soon as possible.

**2. Our induction call**

An induction call has been scheduled. An invite has been sent to your Viderum calendar and email!

If that time does not work please let us know.

**3. Start inducting yourself!**

We have designed the induction process to be largely self-service so you can set yourself up!

Please start working your way through the "Inductee"  section of the Induction:

https://handbook.datopian.com/induction/#inductee

Best,

...


[handbook]: https://handbook.datopian.com/
[guide]: https://handbook.datopian.com/guide/

## Inductee

*We want your feedback as new joiners! Be critical, tell us what does not work, what isn’t obvious!*

1. **Login in to your email account** and read your induction email (if you haven't already)

2. **Read the [Handbook main guide][guide]. Note ALL questions that arise in a google doc

2. **Setup accounts on the systems we use**. See below.

3. Add contact details to [Team Phonebook][phonebook] (TODO: work out where we store headshots -- maybe we link)

4. Email the Inductor that you have accounts set up and details in team phonebook. They will now go and add you to relevant systems ...

5. Wait until you get a response to let you know you are added to relevant systems

6. Read about your work processes for the job you do

5. Go through work “processes” in more detail; This depends on the accountability the Inductee will assume;
E.g.

    * Work sprints
    * Trello management 
    * Practice on trello (acceptance criteria, checklist, closing issues…)
    * How to take meeting notes on operation meeting notes

7. Do the induction quiz

[phonebook]: https://docs.google.com/spreadsheets/d/1hFw3jFHq_TF4m_Z76n0uzBz85UB9Yht4P2IZAPicBOI/edit#gid=129072431

### Systems we use

Create an account on each of these. Please make sure you set up Gravatar first. For items marked with a `*` please add your account id to the phone book.

* Gravatar - https://gravatar.com. We set this up so that your profile picture will show up automatically on your profile on other systems. Add *all* the email(s) you will use on other accounts. For example, if you plan to sign up to Trello with your personal email rather than your organization email then also add that email address to your gravatar.
* Github - https://www.github.com 
* Gitlab - https://gitlab.com/
* Gitter - https://gitter.im/ (we recommend signing in with your github account as it helps in permissions management)
* Trello - https://trello.com/

### Setting up Google Drive

4. Step 6: Practice: Find documents in the google drive 
More practice...

#### Style Guide

Set up google docs to use our default styles: [Handbook Style Guide section][styleguide]

[styleguide]: /guide/#style-guide

### How we communicate

See section in team handbook XXX

https://handbook.datopian.com/guide/#communications

Exercises

* [ ] Say hi on Gitter

### Using the Calendar

You have been given access to create, edit and share in Art Earth Tech Team calendar.

### Tracking time

TODO

### Submitting your invoices and getting paid

* Set up an invoice in Xero
* Setup and invoice with an expense in Xero

### Stand up

* Everyday Standup at 10 am French time in appear.in/artearthtech
* If not meeting, do the Standup in Gitter
* Add ‘+ Standup’ at the end of your Standup so that it’s recorded in the Drive automatically;

### Trello

* [ ] Create a task in trello for practice ...


## Tech Team Onboarding

*Training new Jedis!*

3 parts:

1. Processes and tools
2. Using DataHub
3. Packaging data

### Step I: Processes and tools

Intention: Inductee is familiar with our work environment and has relevant tooling installed

* [ ] Check: know gitter channel to use by default, know we use team rarely, know how to get bot help, know key bot commands
* [ ] Check: key github orgs: datopian (pretty empty) and datahub stuff which datahq, datasets org for storing datasets
* [ ] Check: can do a standup (do in bot channel and then delete)
* [ ] Check: have they read team guide in detail, have they read about scrum and user stories.
	* Check: have them create a user story ...
* [ ] Coding standards
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

### Part II: DataHub

Intention: you can publish data to the DataHub

* have published a sample dataset to your account
* provided feedback on the experience

::tip
Onboarder: Watch them via screen share (as they download) and have them take notes on this experience (what worked, what didn't)
:::

Agenda:

* Sign up to datahub and follow instructiions
* Command line tool: data-cli - only provide documentation and then have them push sample dataset or file
	* https://datahub.io/docs/getting-started/publishing-data
* data-desktop - only provide documentation (blog post re alpha release)
	* push sample dataset or file

## Part III: Packaging Data

Intention: you are able to curate a new (core) dataset and publish it to DataHub

*This is a task the Onboardee will go away and do on their own once they are briefed*

Agenda

* Small introduction about Data Package https://frictionless.io/
  * Specifications https://specs.frictionlessdata.io/
* Know about core data and data curation http://datahub.io/docs/core-data/curators
* Introduction to automated curation and publishing: Data Package + DataFlows + Github + Travis
	* DataFlows
	* Travis
* **Practice task**: Curate a new dataset (look through registry and select one)
	* Select a dataset e.g. (check these still need doing)
		* Global house prices: https://github.com/datasets/registry/issues/55
		* Exchange rates: https://github.com/datasets/registry/issues/15
  * Check: they know what their task is for next 24h (i.e. package a dataset). What would "done" look like?


Output:

```
data/data.csv
scripts/process.py
datapackage.json
README.md
```

