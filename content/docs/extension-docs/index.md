---
description: ''
sidebar: 'extensions'
prev: '/editor-docs/other/molang/'
---

# Extension API

This is the documentation for bridge.'s Extension API. We are still working on bringing more and more capabilities to the API.

## General

bridge. loads extensions per project. This means that every workspace can have an unique set of extensions. Extensions are a composition of JSON, JavaScript and Vue files. Publicly available extensions can be found [here](/created-extensions/).

## Getting Started

Navigate to the directory where bridge. stores your projects. Choose the project to which you want to add the extension to and navigate to the `.bridge/extensions` folder. You can also add extensions globally in the `extensions` folder of bridge.'s root directory.

Inside this directory, you can create a new folder per extension you want to add. Create a new JSON file in the root of your extension called _manifest.json_ (`.bridge/extensions/<EXTENSION NAME>/manifest.json`).

## Extension Manifest

The extension manifest stores important data on your add-on like its version number, the extension name etc.
More information on the extension manifest can be found [here](/extension-docs/extension-manifest/)

### Example Manifest

```json
{
	"author": "solvedDev",
	"icon": "mdi-code-braces",
	"id": "aad1d7ec-a32e-4732-ad2b-abb770e38202",
	"version": "1.0.0",
	"name": "My Extension",
	"link": "www.my_homepage.com/me",
	"target": "v2",
	"description": "My first bridge. extension",
	"api_version": 2,
	"tags": [
		"Utility"
	],
	// Used for compiler plugins
	"compiler": {...},
	// Used for custom components/commands
	"contributeFiles": {...}
}
```

-   Make sure to always **generate a new id** for all of your extensions. You can grab one from [here](https://www.uuidgenerator.net/).
-   The `link` attribute is optional and allows you to provide a link to an external webpage which appears in bridge.'s UI.

## Scripts

Scripts are loaded from the `<EXTENSION NAME>/scripts` folder. Scripts are written in JavaScript and allow extensions to deeply hook into bridge.'s functionality. You can create new windows, add new tab types and lots more.
