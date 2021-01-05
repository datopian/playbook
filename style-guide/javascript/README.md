# JavaScript Style Guide

This document is a guide of Datopian’s coding standards for source code in the JavaScript programming language.

## 1. Formatting

Write all new code in ES6 ([ES6 Coding Standards]).

### 1.1 Block indentation

* Use spaces; never use tabs.
* 2 space indentation.

Correct Indentation: :thumbsup:

```javascript
// good
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

Incorrect indentation: :thumbsdown:

```javascript
// bad
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

* 79 character line limit.

### 1.3 Language Features

* Variables, functions and methods should be ```camelCase```.
  * Correct: :thumbsup:
  
  ```javascript
  // good
  var shapeHeight = 5.0;
  var shapeWidth = 6.0;
  ```

  * Not correct: :thumbsdown:
  
  ```javascript
  // bad
  var ShapeHeight = 5.0;
  var ShapeWidth = 6.0;
  ```

* Classes are ```TitleCase```.
  * Correct: :thumbsup:
  
  ```javascript
   // good
  class MovingShape {
    constructor(id, x, y) {
        this.id = id
        this.move(x, y)
    }
    move(x, y) {
        this.x = x
        this.y = y
    }
   }
  ```

  * Not correct: :thumbsdown:
  
  ```javascript
  // bad
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

* Don’t use semi-colons.

[ES6 Coding Standards]:http://es6-features.org/#Constants

## 2. Linting

* Use eslint to lint code. https://eslint.org/
* Tutorial: https://www.youtube.com/watch?v=hppJw2REb8g
* ESLint for Visual Studio: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
* There are some samples available [here](/style-guide/javascript/linting-samples)
* After install and set up lint, you can follow next steps [here](/style-guide/javascript/linting)

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
* React (VueJS is possible esp for lightweight projects -- please ask)
* Redux

There is a boilerplate project [here](https://gitlab.com/datopian/react-redux-boilerplate) which includes reasonable configuration for starting a React + Redux, Webpack, Tailwind (etc) application.

### 6.0. [React](https://reactjs.org/)

[React](https://reactjs.org/) is a powerful tool for templating frontend components in a heirarchical fashion (think -- menu component --> menu item component --> link item component, etc). React is fast, efficient, and easy to read and write. React helps to manage DOM events using the component lifecycle. (Note that in apps that maintain non-trivial state, events should be managed using the [Redux framework](https://redux.js.org/) (also [see below](#redux))

#### 6.0.1. [Create React App](https://github.com/facebook/create-react-app)

Setting up and configuring react apps for browser compatibility ([see webpack section, below](#8. Webpack)) is is a significant task that includes a fair degree of complexity. Doing this setup work may be time consuming and inconsistent when left to individual teams or developrs. Opt, when possible, for out-of-the-box and repeatable solutions such as [Create React App](https://github.com/facebook/create-react-app). Create React App creates a framework for react applications, including sane webpack configuration, test harnesses, etc. It is flexible, configurable, and fast to set up, with repeatable results. Use it.

#### 6.0.2. [React Cosmos](https://github.com/react-cosmos/react-cosmos)

[React Cosmos](https://github.com/react-cosmos/react-cosmos) allows discrete components to be instantiated along with their props and context. In this way UI elements can be viewed and tested in isolation with a range of configurations.

Cosmos allows for quick setups (zero to hero with a couple of commands) and quick iteration. Use it!

### 6.1. [Redux](https://redux.js.org/)

Larger React applications which maintain state (think: checkboxes, expanded or collapsed elements, form values, etc etc) should be built using  Redux. Defined by their authors as "a predictable state container for JavaScript apps," the Redux franework uses a listener type of pattern for events and maintains a single state object for an entire application. There is some learning curve, but it is a very failsafe way to maintain a single source of truth in your frontend applications.

The following presentation describes Redux and its use cases, as well as a widespread anti-pattern that we should avoid.

https://rangle.slides.com/yazanalaboudi/deck

## 7. Modules

Javascript supports the use of [exportable modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).

Javascript code should be modular, testable, and tested.

## 8. Webpack

Browser compatibility in javascript is a difficult problem. Use [webpack](https://webpack.js.org/) for bundling JS code for cross-browser compatibility.

## 9. Compiled JS in CKAN Classic

It is [more or less well documented](https://docs.ckan.org/en/2.8/theming/javascript.html) how to include modular non-compiled JS code in CKAN. However, including larger JS libraries and compiled JS code requires additional forethought.

In addition to the javascript module pattern provided by CKAN Classic, CKAN additionally provides its own system for managing static resources -- [fanstatic](http://www.fanstatic.org/en/latest/). While fanstatic is idiosyncratic and not designed with modern JS ecosystems in mind, it is an effective way to include larger JS builds in CKAN extensions.

To some degree, these practices remain open to experimentation and improvement.

Some heuristics:

* Maintain modular javascript applications and libraries in separate repositories, where appropriate.
* Use [Create React App](https://github.com/facebook/create-react-app) to create React-based widgets / "SPA"s / embeddable standalone applications (for example [the data explorer application](https://github.com/datopian/data-explorer)) in React
* For library code and other code that is not embeddable as a standalone app, use webpack to create exports with the appropriate browser compatibility requirements. Then use fanstatic to manage the compiled JS in CKAN. See [ckanext-querytool](https://github.com/datopian/ckanext-querytool) for an example of how this can be done.
