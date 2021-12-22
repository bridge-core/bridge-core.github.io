---
description: 'Documentation on how to register new file types to bridge.'
sidebar: 'extensions'
---

# File Definitions

## General

File definitions allow you to register new file types to bridge. File definitions are only loaded by JSON files located under `<packageName>/fileDefinitions` or `<EXTENSION NAME>/fileDefinitions` from an extension.

## Format

The following interfaces describe the JSON format of file definition files.

```typescript
interface IFileType {
	type?: 'json' | 'text' | 'nbt'
	id: string
	icon?: string
	detect?: {
		scope?: string | string[]
		matcher?: string | string[]
		fileContent?: string[]
		fileExtensions?: string[]
	}

	schema: string
	types: (string | [string, { targetVersion: [CompareOperator, string] }])[]
	packSpider: string
	lightningCache: string
	definitions: IDefinitions
	formatOnSaveCapable: boolean
	documentation?: {
		baseUrl: string
		supportsQuerying?: boolean // Default: true
	}
	meta?: {
		commandsUseSlash?: boolean
	}
	highlighterConfiguration?: {
		keywords?: string[]
		typeIdentifiers?: string[]
		variables?: string[]
		definitions?: string[]
	}
}
interface IDefinitions {
	[key: string]: IDefinition | IDefinition[]
}
interface IDefinition {
	directReference?: boolean
	from: string
	match: string
}
```

### `type`

The type of file that this file definition should define. This is used to help bridge. figure out how to load the file.
Example: `"type": "json"`

### `id`

The unique id of the file definition.
Example: `"id": "entity"`

### `icon`

The [Material Design Icon](https://materialdesignicons.com/) that should be associated with this file type.
Example: `"icon": "mdi-minecraft"`

### `detect`

Properties for detecting this file.

-   `scope` - The folder scope of of the project that the file will be found in, e.g. `"scope": "BP/entities/"`
-   `matcher` - A single path or list of paths using glob patterns to match the more precise file location. e.g. `"matcher": ["BP/entities/**/*.json", "BP/entities/*.json"]`
-   `fileContent` - A top level property of the file that could be used to guess the file type of a file, e.g. `"fileContent": ["minecraft:entity"]`
-   `fileExtensions` - File extensions that this file can use. This is used to help guess the file type. E.g. `"fileExtensions": [".mcstructure"]`

### `schema`

This can define the path to a JSON schema to provide auto-completions and validation to the file.
Example: `"schema": "file:///data/packages/minecraftBedrock/schema/entity/main.json"`

### `types`

This can be used to define the path to a TypeScript declaration file for auto-completions and validation in JavaScript or TypeScript files. You can optionally specify a target version to filter the type declaration file.
Example: `"types": ["types/scriptingApi/common.d.ts","types/scriptingApi/client.d.ts"]`

### `packSpider`

This can reference a pack spider definition file so this file type can be linked to others with PackSpider.
Example: `"packSpider": "entity.json"`

### `lightningCache`

This can reference a lightning cache definition file so data can be collected from this file type for use in schemas and other bridge. features.

### `definitions`

This property is used to provide data to bridge.'s go to definition within JSON files.
Example:

```json
{
	"definitions": {
		"identifier": [
			{
				"from": "clientEntity",
				"match": "identifier"
			},
			{
				"from": "spawnRule",
				"match": "identifier"
			}
		],
		"lootTablePath": {
			"directReference": true
		}
	}
}
```

In this example the `"identifier"` and `"lootTablePath"` are lightning cache keys from this file.
`"match"` specifies a lightning cache key that this key should match and `"from"` specifies the file id to search for this key.
`"directReference"` should be set to true when the value of the cache key is a direct file path to the definition file.

### `formatOnSaveCapable`

This should be set to true if the file is able to be automatically formatted by monaco when the file is saved.
Example: `"formatOnSaveCapable": false`

### `documentation`

-   `"baseUrl"` - Should be the base URL of the documentation of this file.
-   `"supportsQuerying"` - Whether the documentation supports querying specific strings.

Example:

```json
{
	"documentation": {
		"baseUrl": "https://bedrock.dev/docs/stable/Entities"
	}
}
```

### `meta`

Additonal meta data for the file type.

-   `commandsUseSlash` - Whether inline commands in this file use a slash before them. If this is false, the slash will be removed automatically from commands written in the file.

Example:

```json
{
	"meta": {
		"commandsUseSlash": true
	}
}
```

### `highlighterConfiguration`

This defines the syntax highlighter configuration for this file. And which strings should be colored with specific color names.

Example:

```json
{
	"highlighterConfiguration": {
		"variables": [
			"description",
			"component_groups",
			"permutations",
			"components",
			"events"
		],
		"typeIdentifiers": ["format_version", "event"],
		"definitions": [
			"animations",
			"scripts",
			"filters",
			"add",
			"remove",
			"run_command"
		]
	}
}
```

## Examples

-   [`Built-in fileDefinitions`](https://github.com/bridge-core/editor-packages/tree/main/packages/minecraftBedrock/fileDefinition)
