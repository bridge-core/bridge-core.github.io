---
description: ''
sidebar: 'extensions'
---

# Snippets

## General

Snippets allow bridge. users to quickly insert a large code snippets into their currently active editor. The snippet API is designed in a way that makes snippets work automatically for both the text editor and tree editor bridge. v2 provides.

## Extension Integration

Extensions can also add new snippets by providing them inside a `<EXTENSION NAME>/snippets` folder. Create a JSON file per snippet you want to add. The individual file names don't matter.

## Format

| Name                  | Type                   | Description                                                                                                                                     |
| --------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                | `String`               | Name of your snippet                                                                                                                            |
| `description`         | `String`               | A description of your snippet. Used inside of the completion item menu                                                                          |
| `fileTypes`           | `String[]`             | File types your snippet is compatible with, for a full list see our [file type documentation](/extension-docs/other/default-file-types/)        |
| `locations`           | `String[]`             | Locations inside of a JSON file where the snippet can be inserted, e.g. "minecraft:entity/components" or "minecraft:entity/component_groups/\*" |
| `targetFormatVersion` | `ITargetFormatVersion` | Describe the range of format versions that is required for your snippet to work                                                                 |
| `data`                | `Object`               | Raw JSON data to insert when the user chooses to apply your snippet                                                                             |

### ITargetFormatVersion

```typescript
interface ITargetFormatVersion {
	// The minimum format version your snippet requires
	min: string
	// The maximum format version your snippet requires
	max: string
}
```

## Example

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
