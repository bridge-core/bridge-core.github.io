---
description: 'Snippet documentation.'
sidebar: 'extensions'
---

# Snippets

## General

Snippets allow bridge. users to quickly insert a large code snippets into their currently active editor. The snippet API is designed in a way that makes snippets work automatically for all file types, including .mcfunction, .molang .js, .ts and .json files in both the text editor and tree editor bridge. v2 provides.

## Extension Integration

Extensions can add new snippets by providing them inside a `<EXTENSION NAME>/snippets` folder. Create a JSON file per snippet you want to add. The individual file names don't matter.

## Format

| Name                  | Type                           | Description                                                                                                                                                                                                       |
| --------------------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                | `String`                       | Name of your snippet                                                                                                                                                                                              |
| `description`         | `String`                       | A description of your snippet. Used inside of the completion item menu                                                                                                                                            |
| `fileTypes`           | `String[]`                     | File types your snippet is compatible with, for a full list see our [file type documentation](/extension-docs/other/default-file-types/)                                                                          |
| `locations`           | `String[]`                     | Locations inside of a JSON file where the snippet can be inserted, e.g. "minecraft:entity/components" or "minecraft:entity/component_groups/\*"                                                                   |
| `targetFormatVersion` | `ITargetFormatVersion`         | Describe the range of format versions that is required for your snippet to work                                                                                                                                   |
| `data`                | `String \| Object \| String[]` | Data to insert when the user chooses to apply your snippet, this data can be an object for json files and a string or an array of strings which are joined with a new line (`\n`) to be inserted into a text file |

### ITargetFormatVersion

```typescript
interface ITargetFormatVersion {
	// The minimum format version your snippet requires
	min: string
	// The maximum format version your snippet requires
	max: string
}
```

## Examples

```json
{
	"name": "My First Snippet",
	"description": "This is the first snippet I have ever created",
	"fileTypes": ["entity"],
	"locations": ["minecraft:entity/events"],
	"data": {
		"New Event": {
			"add": {
				"component_groups": []
			},
			"remove": {
				"component_groups": []
			}
		}
	}
}
```

```json
{
	"name": "Hello World",
	"description": "Displays 'Hello World'",
	"fileTypes": ["function"],
	"data": "say Hello World"
}
```

```json
{
	"name": "Numbers",
	"description": "Displays values 1-5",
	"fileTypes": ["function"],
	"data": ["say 1", "say 2", "say 3", "say 4", "say 5"]
}
```
