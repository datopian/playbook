# Setting-up Lint on Javascript Projects

After set up your lint configuration, you can add the following settings inside your project.


## Change VS Code settings.json file

Open `File -> Preferences -> Settings` or use `Ctrl + ,` (Windows) or `CMD + ,` (Mac OS) and edit `settings.json` file.
You can also access `settings.json` quickly by opening the command palette `CMD + Shift + P` (Mac OS) or `Ctrl + Shift + P`(Windows)) and type `settings.json`

Add the following content to this file.
  
```json

  "[javascript]": {
    "editor.formatOnSave": false
  },
  "eslint.alwaysShowStatus": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "eslint.autoFixOnSave": true
  }

```


## Change package.json  

Go to the `package.json` file and add a npm script to run eslint (Inside scripts object)

```json
"lint" : "yarn lint"
```

You can also add a script to automatically fix the errors:
```json
"lint:fix" : "yarn lint --fix"
```


## Github Actions

To set up a Github Actions workflow inside your project, follow steps bellow: 


Create a file to run your jobs on Github.

```bash   
> touch .github/workflow/main.yml
```

Add following content inside `main.yml` file.

```yaml
name: repository-name
on: 
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install modules
        run: yarn
    
      - name: Run lint check
        run: yarn lint
```
In case you already have a workflow file set, you can just add following job: 

```yaml
jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install modules
        run: yarn
    
      - name: Run lint check
        run: yarn lint
```