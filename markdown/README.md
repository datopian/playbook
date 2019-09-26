# Markdown

Markdown is a lightweight markup language with plain text formatting syntax. It is easy-to-use and widely deployed to on the web, for example by DataHub, GitHub, Stackoverflow and many other sites.

In Markdown You control the display of the document: formatting words as bold or italic, adding images, and creating lists are just a few of the things we can do with Markdown. Mostly, Markdown is just regular text with a few non-alphabetic characters thrown in, like ## or **.


[[toc]]


## Why Markdown

First, plain text is awesome 😎 Plain text never goes out of fashion -- plain text files written thirty years ago are still readable on your modern computer (unlike more complex formats). You can also create and use plain text almost anywhere.

But ... plain text has no formatting like bold, italic, or bullet lists etc. Plain text needs conventions for "headings", lists etc. Wouldn't it be cool if we had a way to add this to plain text *and* this then could be converted to HTML or something that does actually look good? Enter Markdown 🦸


## Tutorials

If you are looking to *learn* Markdown we recommend these interactive tutorials:

* https://www.markdowntutorial.com/ (an easy turorial with interactive exercises)
* https://commonmark.org/help/tutorial/ (10 minute of Markdown exercises)


## General markdown guideline

### Basics

`usual text` usual text  
`*italic text*` *italic text*   
`**bold text**` **bold text**,  
`~~crossed though~~` ~~crossed though~~  
`double space` - doublespace at the end of the text will break the lines


`---` horizontal line like this:

---


### Blockquotes

```
Santa Claus said:

> Happy Christmas, hohoho
```

Santa Claus said:

> Happy Christmas, hohoho


### Headers

```
# this is a Header1
## Header2
...
###### Header6
```

### Links

`https://example.com` https://example.com - automatic  
`[Example](https://example.com)` [Example](https://datahub.io) - defined text  
`![alt text](https://goo.gl/YPFoy5 "image title")`
![alt text](https://goo.gl/YPFoy5 "image title")

### Lists

```
* task 1
* task 2
  * task 2a
  * task 2b
```

* task 1
* task 2
  * task 2a
  * task 2b

List with checkboxes:

:::info
These work only in certain places e.g. GitHub, GitLab, HackMD. But not here in Vuepress
:::

```
* [x] unchecked
* [ ] checked
```

### Code

Markdown:

```
This is inline code: `inline code`
```

This is inline code: `inline code`

Multi-line code starts with triple backtick and ends with triple backtick apostrophe as well. You also you can add the programming language name:

\```[python|bash|php|etc]  
print('hello world')```

Renders as:

```python
print('hello world')
```

## Advanced features

As you can see, formatting text with Markdown is as easy as using notepad. Also, the markdown syntax could be extended easily. Here are some extra features that you can use.

::: warning
These features may not always be supported by the tool you are using so check before you use them.
:::

### FrontMatter

In the world of computer programming, **frontmatter** is metadata at the top of a file.
Just put your metadata between two lines like this:

```
---
title: 5 minutes Markdown guide
date: 2017-12-21
authors: ['name']
---
```

And our site will use this metadata while forming the page. The result you can see on top of this page ('authors' is used in the blog posts).

### Table of contents

If you will add `[toc]` in your document - this will be automatically transformed into Table Of Content section, with links to all your Headers.

### Info boxes

You can add info boxes in your text and the message will appear in a box with orange borders:

```
:::success
My important message here.
:::
```

and this is how it would be rendered:

:::success
My important message here.
:::
