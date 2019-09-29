# Tech Onboarding Guide

*Training new Jedis!*

3 parts:

1. Processes and tools
2. Using DataHub
3. Packaging data

## Step I: Processes and tools

Intention: You are familiar with our work environment and have relevant tooling installed

### Steps

* Read about our [Coding standards][coding-standards]
* Read about [User stories][user-story]
  * Do a user story
* Small introduction about workflow: boards, issues, milestones, sprint planning
* Relevant tooling: git, python, node, ...

[coding-standards]: /coding-standards/
[user-story]: /user-stories/

## Part II: DataHub

Intention: you can publish data to the DataHub 

* have published a sample dataset to your account
* provided feedback on the experience

:::tip
Onboarder: Watch them via screen share (as they download) and have them take notes on this experience (what worked, what didn't)
:::

### Steps

* Sign up to datahub and follow instructiions
* Publish a Dataset: https://datahub.io/docs/getting-started/publishing-data
* Command line tool: data-cli - only provide documentation and then have them push sample dataset or file

## Part III: Packaging Data

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
	* Select a dataset from https://github.com/datopian/awesome-data/issues or https://github.com/datasets/registry/issues
  * Turn it into a data package with a script to automate collecting the data

