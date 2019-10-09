# Git and Version Control

Using Git is essential for everyone working with code -- and even if you don't knowing some Git will be valuable as it is also used for some content management including many of our websites.

This howto is short and primarily consists of pointers to good materials elsewhere. In particular, **[Pro Git][pro] is both a great introduction and a detailed guide to Git and is available online for free**. If you are new to Git we strongly recommend checking it out.

[pro]: https://git-scm.com/book/en/v2/

## Introduction

Git is a Distributed Version Control System (DVCS).

A Version Control System is a system that records changes to a file or set of files over time so that you can recall specific versions later.

Clients don’t just check out the latest snapshot of the files: they fully mirror the repository. Any of the client repositories can be copied back up to the server to restore it. Every checkout is really a full backup of all the data.

Read the following:

* [Intro to Version Control Systems][vcs]
* [Intro to Git itself][intro-to-git]

[vcs]: https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control
[intro-to-git]: https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F

## Git Hosting

Even though git is distributed you will often need an online git repository either to share code with colleagues and clients or to publish open code to the world. 

Github and Gitlab are the main git repository hosting providers.

* Gitlab is a default provider for git hosting because it is open-source and provides the best value for money.
* Github is a secondary provider because of its established dominance. We mainly use it for publishing open source work due to its higher visibility.

## Recommended tools

By default use the command line.

If you want something other than the command line, Visual Studio Code as it has good git integration built-in.

## Getting Started

**We reiterate that the best approach is to follow the [Pro Git book][pro].** Here we excerpt some key parts to provide a quick overview: 

You are going to do some simple tasks for starting:

* Prepare your first time set-up
  * visit https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup
  * set-up your username
  * set-up your e-mail
* Cloning an existing repo to your local machine: 
  * Read: https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository
  * For example, find "handbook" project in Datopian Gitlab https://gitlab.com/datopian/core/handbook
  * find SSH or HTTPS URL for clone
  * the magic command is `$ git clone "URL"`
* Open handbook file with VSCode or the git command line
* Your files are ready for editing now! 

## Basics

* `$ git status`: check the status of your files
* `$ git add`: "stage" changes after changes, so that git can track and it's ready for commit. 
* `$ git pull` this command is used to to download and integrate remote changes. Make sure you do pull before commit.
* `$ git commit` means to save your changes to the local repository, so that you can push to server later. Please remember to follow [commit message's format](https://handbook.datopian.com/onboarding/first-steps/#commit-messages%E2%80%99-format).  
* `$ git push` "push" to the server, others can see the changes and can pull your version. 
* `$ git log` view commit history

Key steps (pull before staging to ensure you are in sync with upstream):

```
pull -> stage -> commit -> push
```

## Links

* [Pro Git][pro]
* http://anitacheng.com/git-for-non-developers -- smooth article for non-technical with a general step by step guide, easy to read
* https://githowto.com -- A guided tour that walks through the fundamentals of Git

