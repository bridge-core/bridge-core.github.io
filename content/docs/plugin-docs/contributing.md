---
description: ''
sidebar: 'plugins'
---

# Contributing Plugins

## Repository

bridge. pulls plugins from the [bridge-core/plugins](https://github.com/bridge-core/plugins) repository. In order to make your extension appear within bridge., you need to add it to this repository.

## Adding a Plugin

_Before adding your plugin to the repository please ensure that the plugin is working._

To add your plugin, drag the plugin's folder into the `plugins` folder.
Once the pull request is merged, it will **automatically create a zip file** for the plugin and will add it to the plugins.json or extensions.json file so you DO NOT need to do this yourself.

**Ensure your plugin manifest contains the following information:**

-   `"author"`
-   `"name"`
-   `"version"`
-   `"id"`
-   `"description"`
-   `"tags"`

Properties not listed here are optional.

If you're contributing a plugin for bridge. v2, set the `"target"` property in the plugin manifest to `"v2"` or `"both"` if the plugin is compatible with both versions. If this isn't specified, it will default to `"v1"`.
