---
description: ''
sidebar: 'extensions'
---

# Contributing Extensions

## Repository

bridge. pulls extensions from the [bridge-core/plugins](https://github.com/bridge-core/plugins) repository. In order to make your extension appear within bridge., you need to add it to this repository.

## Adding an Extension

_Before adding your plugin to the repository please ensure that the plugin is working._

To add your extension, drag the extension's folder into the `plugins` folder.
Once the pull request is merged, it will **automatically create a zip file** for the plugin and will add it to the plugins.json or extensions.json file, depending on the version of bridge. the extension is targeted for so you DO NOT need to do this yourself.

**Ensure your extension manifest contains the following information:**

-   `"author"`
-   `"name"`
-   `"version"`
-   `"id"`
-   `"description"`
-   `"tags"`

Properties not listed here are optional.

If you're contributing a extension for bridge. v2, set the `"target"` property in the extension manifest to `"v2"` or `"both"` if the extension is compatible with both versions. If this isn't specified, it will default to `"v1"`.
