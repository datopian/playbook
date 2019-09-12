## Tech Onboarding Guide

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

