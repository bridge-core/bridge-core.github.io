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
More information on the extension manifest can be found [here](/extension-docs/extension-manifest/).

## Scripts

Scripts are loaded from the `<EXTENSION NAME>/scripts` folder. Scripts are written in JavaScript and allow extensions to deeply hook into bridge.'s functionality. You can create new windows, add new tab types and lots more.
