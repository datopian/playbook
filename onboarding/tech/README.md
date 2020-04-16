# Tech Onboarding Guide

This guide walks through the essential basics of tech work at Datopian.

## Preliminaries

First, please actively takes notes on your experience so you can provide constructive and critical feedback 📣 both on this guide and especially on the tools you use so that we can improve them. 👍

Create an issue in the [Onboarding issue tracker](https://gitlab.com/datopian/dojo/onboarding/-/issues) based on this template to track your progress and record the results of your work. When completing items that require outputs, make sure you record the outputs in the issue (either inline in the task or at the bottom for larger items).

```md
When doing something substantive

## Part I: Processes and tools

* [ ] Read *all* of the style guides
  * [ ] Installed any linters
* [ ] Read about job stories and watched the video at the bottom (you do *not* need to read all the links)
  * [ ] Created >= 2 job stories (try and make these as real and relevant as possible, pick something you are working on)
  * [ ] Written short paragraph summarizing difference between job stories and user stories
* [ ] Created >= 2 issues following the structure (e.g. in onboarding issue tracker)
* [ ] Command line git installed (and a GUI if you like that)
* [ ] Python 2 and 3 installed
* [ ] Recent version of NodeJS installed

## Part II: Data Packages

* [ ] Read the documentation
  * [ ] Summarize in your own words what a data package is
  * [ ] Create a minimal datapackage.json by hand (and validate it)
* [ ] Curate a new dataset
  * [ ] Select a dataset from https://github.com/datasets/awesome-data/issues
  * [ ] Turn it into a data package with a script to automate collecting the data
  * [ ] Added a graph (bonus)
  * [ ] Published to datahub.io
* [ ] Provided feedback

## Part IIB: DataHub

* [ ] Account on DataHub.io
* [ ] Have published a sample dataset to your account
* [ ] Provided feedback on the experience

## Part III: CKAN Classic

* [ ] Read the full tutorial
* [ ] Created a working extension and published to github/GitLab (post screenshots of results)

## Part IV: CKAN Next Gen

* [ ] Read the materials
* [ ] Frontend running
* [ ] Frontend customized
* [ ] Frontend deployed
```

## Part I: Processes and tools

Let's get familiar with our work environment and install relevant tooling. 🛠

Steps:

* Read our [Coding Style Guides][style-guide].
* Read about [Job stories][user-story] and practice doing a job story.
* Read the structure for [issues and tasks][issues] (for background, you may want to skim our [Guide to (Technical) Analysis][analysis]).
* Small introduction about workflow: boards, issues, milestones, sprint planning.
* Relevant tooling: Git, Python, Node.js...

[style-guide]: /style-guide/
[user-story]: /job-stories/
[issues]: /issues-tasks/
[analysis]: /dojo/analysis/

## Part II: Data Packages

Intention: you are familiar with Data Packages and are able to curate a new dataset as a Data Package (and publish it to DataHub in next step).

Steps:

* [Frictionless Data and Data Packages](https://tech.datopian.com/frictionless/).
  * Read this and the tutorial linked at the bottom.
* Our best practice process for curation and publishing of datasets: Data Package + DataFlows + Github (+ Actions).
  * Data Package (plus Table Schema and CSV) is the container format plus the data schema.
    * DataFlows is how we build lightweight data pipelines to pull the data together: [github.com/datahq/dataflows](https://github.com/datahq/dataflows)
  * Github (or GitLab) is our default location for storing (smallish) datasets.
  * We use Github Actions to automate running the pipeline, publishing to DataHub and doing continuous data integration.
* **Practice task**: Curate a new dataset.
  * Select a dataset from [github.com/datasets/awesome-data/issues](https://github.com/datasets/awesome-data/issues) -- easiest is to look at the board and focus on "Ready to Package": [github.com/datasets/awesome-data/projects/1](https://github.com/datasets/awesome-data/projects/1) (verify your choice with your mentor or coach).
  * Turn it into a data package.
    * With a script to automate collecting (and packaging) the data.
  * [Validate it](https://datahub.io/tools/validate).
  * [Bonus] Add a graph to it.
  * Push to GitHub (or GitLab).
    * [Bonus] with automated collection automated by GitHub actions.
  * Publish to datahub.io.

## Part IIB: DataHub

Intention: you can publish data to the DataHub and have published a dataset to your account.

Steps:

* Sign up to [DataHub][] and follow the instructions.
* Publish a Single Data file: [datahub.io/docs/getting-started/publishing-data](https://datahub.io/docs/getting-started/publishing-data)
* Publish the Data Package you created -- it's just `data push` again.

[DataHub]: https://datahub.io/

## Part III: CKAN Classic

Intention: you are familiar with CKAN, you have it set up for development work and you have created a hello world extension.

Steps:

* Work through the [Getting Started with CKAN tutorial](https://tech.datopian.com/ckan/).
* Create your own extension to do something funky with CKAN.

## Part IV: CKAN Next Gen (CKAN 3)

Intention: you are familiar with CKAN, you have it set up for development work and you have created a hello world extension.

* [Read the overview](http://tech.datopian.com/next-gen/).
* [Install and trial the Next Gen Frontend](http://tech.datopian.com/frontend/).
  * Tweak the front page in some fun way to add content.
  * Add a new route to show a new page `/dash` (which can be empty other than a title).
  * Deploy this somewhere.
