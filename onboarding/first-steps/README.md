# First Steps

## Gitlab

We use Gitlab https://gitlab.com/ for a lot of project management as well as managing our code in git repositories. We want to introduce you to it here briefly because we will use its issue tracker functionality.

It's fine if you are unfamiliar with Gitlab - you only need the basics for now.

You can also read this tutorial in your own time: https://docs.gitlab.com/ee/gitlab-basics/


## Template Issue

You are going to track your progress using a Gitlab issue in the onboarding project.

* Please go to https://gitlab.com/datopian/onboarding/issues
* Create your own Gitlab issue and use it to track your Onboarding progress
- Copy and paste the checklist below into your Gitlab issuee and modify it/add more learnings to it while going through the Onboarding process (eg. Markdown, Hackmd, Gitlab etc). 

*Make sure to keep it updated every day after onboarding session!*

```
This is my exciting onboarding issue! 🚀

## Onboarding Essentials

### Prerequisites

* [ ] I have access to email
* [ ] I have set up all my accounts
* [ ] I have sent details via Phonebook form
* [ ] I have set up my laptop

### First Steps

* [ ] I have access to GDrive
  * [ ] Email signature
  * [ ] Doc Styles
* [ ] Calendar
  * [ ] Add a calendar meeting
  * [ ] Invite one of the other people
  * [ ] Delete it
  * [ ] Add any days to your and the team calendar in next 2 months in which you will be away (delete these afterwards if inaccurate). 
* [ ] How we communicate
  * [ ] Go on GChat and message each other
  * [ ] Drop a message in the onboarding channel
* [ ] Stand up
  * [ ] Do a standup in the onboarding channel (Plan, Recap, Blockers (if any), Availability)
  * [ ] Check out the "standups" channel (don’t post there for now)
* [ ] Meeting
  * [ ] Create a meeting doc in the [onboarding practice folder](https://drive.google.com/drive/u/0/folders/1XbKO6_IbTLXu6-OVTzpPYJgJ_Hzn8Lxv)
```

## Setting up Google Drive

After setting up your email address, you will have access to **GSuite**, and of course, [Google Drive](https://drive.google.com/drive/).

The Onboarder will grant you access to relevent Team Drives, so you can access and store the information / documents you require.

* Any new documents / sheets /presentations you create should be created in the appropriate folder in the Team Drive, **not your personal drive**. This speaks to our open and collaborative working culture.
* If you require access to files that you currently don't have access to, please reach out to your Onboarder.

### E-Mail Signature

Please implement this [E-mail signature template](https://docs.google.com/document/d/1gpw5zucdlA_tU5geFpIs89AxuJ0is8kMEh6mIDkttnY/edit) into your gmail account.

### Default Styles

We want our documents to look neat and coherent so we set up a Style guide for Datopian. Follow the steps below to set it up for your Drive.

For **Documents:**

* Go into  [Doc Style Template](https://docs.google.com/document/d/1oOMD9l0fRpYKiYd0zf0MQsiP8URce3WFSPUHmYGN428/edit) (Drive: *All -> Handbook -> Style Guide -> Datopian)*
* Click the tab *Format - Paragraph Styles - Options - SAVE as my default styles*
* Open a new document
* Click the tab *Format - Paragraph Styles - Options - USE my default styles*
* Start writing.
* Double check you got it correctly - you can compare with the template


## Calendar

You have been given access to create, edit and share in Datopian Team calendar. We use the team calendar to track people's holidays and business trips.

It is expected that you keep your calendar up to date, so that if it shows as free, that means a colleague can add a meeting during that period.

You can also add the calendars of the teammates you're mostly working with so you can easily see their availability:

*  Go to your calendar and find the "Add calendar" section on the left sidebar
* Enter the email of the person you'd like to add
* You've now added the calendar
* Google Calendar automatically creates a Google Hangout Meets link.

_Also, talking of meetings, we have a weekly all hands, this will be in your Datopian calendar once you sign in to your email._


## How we communicate

*As a virtual organization we need to have efficient, reliable, cost-effective ways to communicate and share material.*

Google Chats is the main text channel we use to communicate with our team members.

Any project information or artifacts (e.g. README or technical specs) should be kept on the drive and not on Google Chats. **We use Google Chats as a communication platform and not a knowledge management platform.**

Once you have your Google Chats accounts, please let your Onboarder know and they will add you to the appropriate channels for your role and introduce you to everyone.

### Communication Tools

<mermaid>
graph LR
  sync((Synchronous))
  async((Asynchronous))
  sync --> video[Video]
  async --> chat[Chat - GChat]
  async --> email[Email]
</mermaid>

* **Chat** - We use [Google chat](https://chat.google.com/)
*A networking platform online (or download the app) where we have different rooms for different projects/purposes.*
*(Based on the transparent policy, we require people to speak publicly in the related group and @ the people you want to talk instead of texting privately, unless it is a personal chat.)*
* **Voice / Video calls:** Our default tool is Google Meet - video call links are automatically added to every meeting set up using our Google Apps calendar.

  *Face to face communication is a big deal for humans. Facial cues are very important. Always prefer video over voice for synchronous.*

* **Email** - we use Gmail
* **Documents** - GDrive for all internal documents, we also use Hackmd.


## Standups

The Team has a daily stand-up on Google chats in the Standup channel.

Purpose:
* keep team in sync
* surface blockers
* deal with issues arising (e.g. need to reprioritize in face of an arising issue or change in estimate)

Format:
* Plan (What is your plan for today?)
* Recap (What did you accomplish yesterday?)
* Blockers (Is there something getting in the way for you to complete your tasks)
* Availability (What is your availability for today?)


## Meetings

* For all meetings we should have a meeting doc. Usually if meetings are regular we have a single meeting doc for all those meetings (i.e "Admin meeting doc") and we then update by adding new date of the meeting.
* Please check out the [meeting template][] for a sense of the layout. You can copy this template for your own meetings.
* Structure is as follows:
  * Put the date (we often use the date as the heading for the meeting if we have a document with multiple meetings in it)
  * List who is present
  * Goals: a meeting **MUST** have an intention and **SHOULD** have a short list of measurable associated outputs. These are what you plan to achieve out of the meeting. Start the meeting by reviewing (or establishing) the goals.
  * Agenda: a meeting **SHOULD** have an agenda (a short list of items to cover)
  * Decisions & Actions (tasks that are assigned)
  * Notes

[meeting template]: https://docs.google.com/document/d/15tG_Bd-SxWQMUH9zNnft2kcxihqLwIccbbOpIhoUH8c/edit#


## Issues / Tasks

### Creating Issues

This key information should be present:

* Short description: of what is involved. A user story if possible
* Acceptance criteria: what would it mean for this to be done
* Tasks/Checklist: A list of tasks involved in doing this task. If you don't know a first task should be "Analyze this and get set of tasks"

```
Short description of bug or feature need preferentially in a user story form.

[Can have multiple items esp if an epic]

## Acceptance Criteria (for epics or "big" issues)

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

#### Issue Naming

* Put [epic] prefix in title for epic issues
* (Optional) Grouping ... e.g. `[ux]` for ux issues

### Estimating

**Github:** Using ZenHub you can add estimates. These should be in hours. Epics: your estimate for an epic should only be for time on subtasks **not** included in subissues.

**Gitlab:** Estimation support is built in.


### Closing Issues

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

### Commit messages' format

```
[ex][m]: plotly json examples - fixes #23.
```

That is:

* a tag: [ex] this is an example - you make these tags up and use them consistently.
* a size: [m] a size of this commit one of xs s m l xl
* a short descriptive sentence of what you did. I need this as well as what issue this refs as I need to be able to understand the commit on its own without reading something else.
* Finally anything that involves referencing or closing a github issue. e.g. refs #xx or fixes #xx (fixes and closes are synonymous so use either one)

So command would look like this:

```
git commit -m '[ex][m]: plotly json examples - fixes #23'
```

