# Setting-up Datopian Мarkdown Style in VS Code

We use David Anson's VS Code markdownlint as the basis for our markdown rules.

## Installation of markdownlint plug-in to VS Code

Open VS Code and go to Extensions or `Ctrl + Shift + X`(Windows) or `CMD + Shift + X` (Mac OS). Then type `markdownlint`, select Markdownlint by David Anson and install it.
Additional detailed installation instructions can be found on [David Anson's GitHub repository].

Optional you can install Mermaid markdown plug-in to create nice flow charts in markdown.

## Change VS Code settings.json file

Open `File -> Preferences -> Settings` or use `Ctrl + ,` (Windows) or `CMD + ,` (Mac OS) and edit `settings.json` file.
You can also access `settings.json` quickly by opening the command palette `CMD + Shift + P` (Mac OS) or `Ctrl + Shift + P`(Windows)) and type `settings.json`

Add the following content to this file.

``` markdown
"markdownlint.config": {
  "MD007": { "indent": 2 },
  "MD022": { "lines_above": 1,
             "lines_below": 1 },
  "MD024": { "siblings_only": true },
  "no-bare-urls": false,
  "no-inline-html": {
    "allowed_elements": [
      "mermaid"
    ]
  }
}
```

so the settings.json looks similar to the following

``` markdown
{
    "python.pythonPath": "some_path\\python.exe",
    "git.autofetch": true,
    "markdownlint.config": {
      "MD007": { "indent": 2 },
      "MD022": { "lines_above": 1,
                 "lines_below": 1 },
      "MD024": { "siblings_only": true },
      "no-bare-urls": false,
      "no-inline-html": {
        "allowed_elements": [
          "mermaid"
        ]
      }
    }
}
```

Now just save the modified `settings.json` configuration file. Your markdown linting settings are activated and ready for use.

[David Anson's GitHub repository]:https://github.com/DavidAnson/vscode-markdownlint#install
