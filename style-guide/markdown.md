# Markdown style guide  

This style guide contains some useful recommendations, tips and tricks for using markdown. 
They will help you format and design great Datopian markdown documents!

## Headings

### ATX-style headings

``` 
## Heading 2
```
Headings with **=** or **-** underlines can be annoying to maintain and don't fit with the rest of the heading syntax. The user has to ask: Does `---` mean H1 or H2?

Bad example: :-1: :x:

``` 
Paris - Is it the most romantic city in the world? 
---------
```
Good example: :+1: :white_check_mark:

``` 
Paris, Is it the most romantic city in the world? ? 
---------
```

### Add spacing to headings

Prefer spacing after # and newlines before and after:

Good example: :+1: :white_check_mark:

```  
...text before.

# Heading 1

Text after...
```

Lack of spacing makes it a little harder to read in source:

Bad example: :-1: :x:

``` 
...text before.

# Heading 1
Text after... 
```

## Lists

### Use lazy numbering for long lists

Markdown is smart enough to let the resulting HTML render your numbered lists correctly. For longer lists that may change, especially long nested lists, use "lazy" numbering:

``` 
1.  Foo.
1.  Bar.
    1.  Foofoo.
    1.  Barbar.
1.  Baz.
```

However, if the list is small and you don't anticipate changing it, prefer fully numbered lists, because it's nicer to read in source:

``` 
1.  Foo.
2.  Bar.
3.  Baz.
```

### Nested list spacing

When nesting lists, use a 4 space indent for both numbered and bulleted lists:
 
``` 
1.  2 spaces after a numbered list.
    4 space indent for wrapped text.
2.  2 spaces again.

*   3 spaces after a bullet.
    4 space indent for wrapped text.
    1.  2 spaces after a numbered list.
        8 space indent for the wrapped text of a nested list.
    2.  Looks nice, doesn't it?
*   3 spaces after a bullet.
```

The following works, but it's very messy:

Bad example: :-1: :x:

``` 
* One space,
with no indent for wrapped text.
     1. Irregular nesting... DO NOT DO THIS.
```

Even when there's no nesting, using the 4 space indent makes layout consistent for wrapped text:

```  
*   Foo,
    wrapped.

1.  2 spaces
    and 4 space indenting.
2.  2 spaces again.
```

However, when lists are small, not nested, and a single line, one space can suffice for both kinds of lists:

```  
* Foo
* Bar
* Baz.

1. Foo.
2. Bar.
```

## Code

### Inline

Backticks (``) designate `inline code`, and will render all wrapped content literally. Use them for short code quotations and field names:

``` 
You'll want to run `really_cool_script.sh arg`.

Pay attention to the `foo_bar_whammy` field in that table.
```

Use inline code when referring to file types in an abstract sense, rather than a specific file:

```  
Be sure to update your `README.md`!
```

Backticks are the most common approach for "escaping" Markdown metacharacters; in most situations where escaping would be needed, code font just makes sense anyway.

### Codeblocks

For code quotations longer than a single line, use a codeblock:

```  
```python
def Foo(self, bar):
  self.bar = bar```
```

#### Declare the language

It is best practice to explicitly declare the language, so that neither the syntax highlighter nor the text editor must guess.

#### Indented codeblocks are sometimes cleaner

Four-space indenting is also interpreted as a codeblock. These can look cleaner and be easier to read in source, but there is no way to specify the language. We encourage their use when writing many short snippets:

``` 
You'll need to run:

    bazel run :thing -- --foo

And then:

    bazel run :another_thing -- --bar

And again:

    bazel run :yet_again -- --baz
```

#### Escape newlines

Because most commandline snippets are intended to be copied and pasted directly into a terminal, it's best practice to escape any newlines. Use a single backslash at the end of the line:
``` 
```shell
bazel run :target -- --flag --foo=longlonglonglonglongvalue \
--bar=anotherlonglonglonglonglonglonglonglonglonglongvalue```
```

#### Nest codeblocks within lists

If you need a codeblock within a list, make sure to indent it so as to not break the list:

```
*   Bullet.

    ```c++
    int foo;
    ```

*   Next bullet.
```

You can also create a nested code block with 4 spaces. Simply indent 4 additional spaces from the list indentation:

``` 

*   Bullet.

        int foo;

*   Next bullet.
```

## Table of contents

Requires markdown.toc to be true.

Place `[TOC]` surrounded by blank lines to insert a generated table of contents extracted from the H1, H2, and H3 headers used within the document:

```  
# Title

[TOC]

## Section 1

Blah blah...

## Section 2

Go on...
```

H1 headers are omitted from the table of contents if there is only one level one header present. This allows H1 to be used as the document title without creating an unnecessary entry in the table of contents.

Anchors are automatically extracted from the headers.
See [named anchors](https://gerrit.googlesource.com/gitiles/+/master/Documentation/markdown.md#Named-anchors).

## Tips and tricks

* The [CommonMark spec](https://spec.commonmark.org/0.20/#hard-line-breaks) decrees that two spaces at the end of a line should insert a `<br />` tag. However, many directories have a trailing whitespace presubmit check in place, and many IDEs will clean it up anyway. Avoid the need for a `<br />` altogether. Markdown creates **paragraph tags simply with newlines:** get used to that.

* Obey projects' character line limit wherever possible. Otherwise, wrap your text. Long URLs and tables are the usual suspects when breaking the rule. Headings can't be wrapped, but you better keep them short. Often, **inserting a newline before a long link** preserves readability while minimizing the overflow.

* Long links make source Markdown difficult to read and break the 80 character wrapping. Wherever possible, **shorten your links.** Markdown link syntax allows you to set a link title, just as HTML does. Write the sentence naturally, then go back and wrap the most appropriate phrase with the link. For example:

  ``` 
  See the [syntax guide](syntax_guide.md) for more info.
  Or, check out the [style guide](style_guide.md).
  ```

* Use images sparingly, and **prefer simple screenshots.** This guide is designed around the idea that plain text gets users down to the business of communication faster with less reader distraction and author procrastination. However, it's sometimes very helpful to show what you mean.

* **Prefer lists to tables.**  Any tables in your Markdown should be small. Complex, large tables are difficult to read in source and most importantly, a pain to modify later.

