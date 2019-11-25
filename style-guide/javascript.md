# JavaScript Style Guide

This document is a guide of Datopian’s coding standards for source code in the JavaScript programming language.

## 1. Formatting
    
Write all new code in ES6 ([ES6 Coding Standards])

### 1.1 Block indentation

* Use spaces; never use tabs
* 2 space indentation

Correct Indentation:

```
method(foo) {
  if (condition(foo)) {
    try {
      something();
    } catch (err) {
      recover();
    }
  }
}
```

Incorrect indentation:

```
method(foo) {
    if (condition(foo)) {
        try {
            something();
        } catch (err) {
            recover();
        }
    }
}
```

### 1.2 Line Wrapping

* 79 character line limit

### 1.3 Language Features

* Variables, functions and methods should be ```camelCase```
    * Correct
    ```
    var shapeHeight = 5.0;
    var shapeWidth = 6.0; 
    ```
    * Not correct
    ```
    var ShapeHeight = 5.0;
    var ShapeWidth = 6.0; 
    ```
* Classes are ```TitleCase```
    * Correct
        ```
        class MovingShape {
          constructor (id, x, y) {
            this.id = id
            this.move(x, y)
          }
          move (x, y) {
            this.x = x
            this.y = y
          }
        }
        ```
    * Not correct
        ```
        class movingShape {
          constructor (id, x, y) {
            this.id = id
            this.move(x, y)
          }
          move (x, y) {
            this.x = x
            this.y = y
          }
        }
        ```
* Don’t use semi-colons

[ES6 Coding Standards]:http://es6-features.org/#Constants

## 2. Linting

* Use eslint to lint code. https://eslint.org/
* Tutorial: https://www.youtube.com/watch?v=hppJw2REb8g
* ESLint for Visual Studio: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

## 3. Testing

* Use mocha to test code.
    * https://mochajs.org/
* Use Zombie.js or jsdom for tests that require a DOM.
    * http://zombie.js.org/
    * https://github.com/jsdom/jsdom

## 4.  Docstrings

Use Google-style documentation conventions.

https://google.github.io/styleguide/jsguide.html

## 5. User documentation

Prefer to make really good README.md files, rather than implementing a full documentation framework.

## 6. Framework

* lodash
* Express
* React (VueJS is possible esp for lightweight projects – please ask)