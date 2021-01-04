# Lining samples using Javascript

There are some configuration files and requirements to use in linting settings:

## Node.js Project

### Requirements

* Eslint  
  * eslint-plugin-prettier
  * eslint-plugin-node
  * eslint-plugin-import
* Prettier

Eslint configuration file sample `.eslintrc.json`
```json
{
    "env": {
        "es2021": true,
        "node": true,
        "jest": true,
    },
    "extends": [
        "eslint:recommended",
        "import",
        "prettier"
    ],
    "plugins": [
        "prettier",
    ],
    "rules": {
      "indent":["error", 2],
      "semi":[2, "never"],
      "quotes":["error", "single"],
      "max-len":["error", {
          "code": 79
      }]
    }
}
```
 
## React Project

### Requirements 
* Eslint  
  * eslint-plugin-prettier
  * eslint-plugin-react
  * eslint-plugin-cypress
* Prettier

Eslint configuration file sample `.eslintrc.json`
```json
{
    "env": {
        "browser": true,
        "es2021": true,
        "cypress/globals": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "prettier"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "modules": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier",
        "cypress"
    ],
    "rules": {
      "react/jsx-uses-vars": "error",
      "react/jsx-uses-react": "error",
      "react/prop-types": "off",
      "indent":["error", 2],
      "semi":[2, "never"],
      "quotes":["error", "single"],
      "max-len":["error", {
          "code": 79
      }]
    }
}
```