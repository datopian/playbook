(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{411:function(n,t,e){"use strict";e.r(t);var s=e(33),a=Object(s.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"setting-up-datopian-мarkdown-style-in-vs-code"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-datopian-мarkdown-style-in-vs-code"}},[n._v("#")]),n._v(" Setting-up Datopian Мarkdown Style in VS Code")]),n._v(" "),e("p",[n._v("We use David Anson’s VS Code markdownlint as the basis for our markdown rules.")]),n._v(" "),e("h2",{attrs:{id:"installation-of-markdownlint-plug-in-to-vs-code"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation-of-markdownlint-plug-in-to-vs-code"}},[n._v("#")]),n._v(" Installation of markdownlint plug-in to VS Code")]),n._v(" "),e("p",[n._v("Open VS Code and go to Extensions or "),e("code",[n._v("Ctrl + Shift + X")]),n._v("(Windows) or "),e("code",[n._v("CMD + Shift + X")]),n._v(" (Mac OS). Then type "),e("code",[n._v("markdownlint")]),n._v(", select Markdownlint by David Anson and install it."),e("br"),n._v("\nAdditional detailed installation instructions can be found on "),e("a",{attrs:{href:"https://github.com/DavidAnson/vscode-markdownlint#install",target:"_blank",rel:"noopener noreferrer"}},[n._v("David Anson’s GitHub repository"),e("OutboundLink")],1),n._v(".")]),n._v(" "),e("p",[n._v("Optional you can install Mermaid markdown plug-in to create nice flow charts in markdown.")]),n._v(" "),e("h2",{attrs:{id:"change-vs-code-settings-json-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#change-vs-code-settings-json-file"}},[n._v("#")]),n._v(" Change VS Code settings.json file")]),n._v(" "),e("p",[n._v("Open "),e("code",[n._v("File -> Preferences -> Settings")]),n._v(" or use "),e("code",[n._v("Ctrl + ,")]),n._v(" (Windows) or "),e("code",[n._v("CMD + ,")]),n._v(" (Mac OS) and edit "),e("code",[n._v("settings.json")]),n._v(" file."),e("br"),n._v("\nYou can also access "),e("code",[n._v("settings.json")]),n._v(" quickly by opening the command palette "),e("code",[n._v("CMD + Shift + P")]),n._v(" (Mac OS) or "),e("code",[n._v("Ctrl + Shift + P")]),n._v("(Windows)) and type "),e("code",[n._v("settings.json")])]),n._v(" "),e("p",[n._v("Add the following content to this file.")]),n._v(" "),e("div",{staticClass:"language-markdown extra-class"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[n._v('"markdownlint.config": {\n  "MD007": { "indent": 2 },\n  "MD022": { "lines'),e("span",{pre:!0,attrs:{class:"token italic"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("_")]),e("span",{pre:!0,attrs:{class:"token content"}},[n._v('above": 1,\n             "lines')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("_")])]),n._v('below": 1 },\n  "MD024": { "siblings'),e("span",{pre:!0,attrs:{class:"token italic"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("_")]),e("span",{pre:!0,attrs:{class:"token content"}},[n._v('only": true },\n  "no-bare-urls": false,\n  "no-inline-html": {\n    "allowed')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("_")])]),n._v('elements": [\n      "mermaid"\n    ]\n  }\n}\n')])])]),e("p",[n._v("so the settings.json looks similar to the following")]),n._v(" "),e("div",{staticClass:"language-markdown extra-class"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[n._v('{\n    "python.pythonPath": "some'),e("span",{pre:!0,attrs:{class:"token italic"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("_")]),e("span",{pre:!0,attrs:{class:"token content"}},[n._v('path\\\\python.exe",\n    "git.autofetch": true,\n    "markdownlint.config": {\n      "MD007": { "indent": 2 },\n      "MD022": { "lines')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("_")])]),n._v('above": 1,\n                 "lines'),e("span",{pre:!0,attrs:{class:"token italic"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("_")]),e("span",{pre:!0,attrs:{class:"token content"}},[n._v('below": 1 },\n      "MD024": { "siblings')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("_")])]),n._v('only": true },\n      "no-bare-urls": false,\n      "no-inline-html": {\n        "allowed_elements": [\n          "mermaid"\n        ]\n      }\n    }\n}\n')])])]),e("p",[n._v("Now just save the modified "),e("code",[n._v("settings.json")]),n._v(" configuration file. Your markdown linting settings are activated and ready for use.")])])}),[],!1,null,null,null);t.default=a.exports}}]);