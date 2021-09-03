---
description: 'Documentation on extension manifests.'
sidebar: 'extensions'
---

# Extension Manifest

The extension manifest is used to store data about your extension. It should be located in the root of your extension and must be called `manifest.json`

## Fields

### `icon`

**Type: string**

The icon should be the the id of a [Material Design Icon](https://materialdesignicons.com/) starting with `mdi-`, for example: `mdi-apple`

### `author`

**Type: string**

The author can be any string and is used to display the author of the extension in bridge.'s UI.

### `id`

**Type: string**

The id should be a unique UUID V4 which you can generate from [UUIDGenerator](https://www.uuidgenerator.net/).

### `version`

**Type: string**

The version should be a version in the format `X.X.X`, for example `1.2.3`. This version number needs to be incremented when you are updating your extension.

### `name`

**Type: string**

The name field should simply contain the name of the extension to be shown in bridge.'s UI.

### `link`

**Type: string**

The link can be a link to a webpage relevant to the extension or creator. Users can follow the link from a button in bridge.'s UI.

### `target`

**Type: string**

The target can be one of three options: `v1`, `v2` or `both`. This is used when you publish the extension to the extensions store to choose whether to publish the extension to bridge. v1, bridge. v2 or both.

### `description`

**Type: string**

The description of your extension should be a brief overview of what your extension does. This is shown in bridge.'s UI.

### `api_version`

**Type: integer**

The API version is only relevent for bridge. v1 and can be either `1` or `2`. It tells bridge. whether the extension is for the new or old extension API. If it is omitted, it will default to the latest version.

### `tags`

**Type: Array<string>**

The tags list should be an array of extension tag ids. Available tag ids can be found [here](https://github.com/bridge-core/editor-packages/blob/main/packages/common/extensionTags.json).

### `compiler`

**Type: Object**

The compiler field should be used for compiler plugins to specify the id and file location of the plugin.

Structure:

```json
{
	"compiler": {
		"plugins": {
			"<ID>": "<LOCATION>"
		}
	}
}
```

Example:

```json
{
	"compiler": {
		"plugins": {
			"jsonEncoder": "compiler/jsonEncoder.js"
		}
	}
}
```

### `contributeFiles`

**Type: Object**

The contribute files field is used to install files or folders into the project when the extension is installed. This should be used to install custom components and commands to the `BP/commands` and `BP/components` folder.

You can add individual files like this:

```json
{
	"contributeFiles": {
		"<FILE_SOURCE>": "<FILE_DESTINATION>"
	}
}
```

```json
{
	"contributeFiles": {
		"components/item/myComponent.js": "BP/components/item/myComponent.js"
	}
}
```

and add folders like this:

```json
{
	"contributeFiles": {
		"<FOLDER_SOURCE>": "<FOLDER_DESTINATION>"
	}
}
```

```json
{
	"contributeFiles": {
		"components/item": "BP/components/item/"
	}
}
```

## Example

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
	"tags": ["Utility"]
}
```
