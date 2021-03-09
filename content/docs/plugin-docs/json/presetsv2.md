---
description: ''
sidebar: 'Plugins v2'
---

# Presets v2

## General

Presets are groups of files which can be created through the preset interface by only entering an identifier and clicking "CREATE!". They help quickly setting up new items, entities or similiar features. This page covers the presets in version 2 of the api

## Plugin Integration

Plugins can also add new presets by providing them inside a `<PLUGIN NAME>/presets` folder. Create a folder per preset you want to add. Each folder should contain a manifest.json file and templates of all files your preset should create.

## Manifest Format

### Main

| Name                                 | Type                  | Description                              |
| ------------------------------------ | --------------------- | ---------------------------------------- |
| `name`                               | `String`              | Name to display inside the preset window |
| `description`                        | `String`              | Preset description                       |
| `icon`                               | `String`              | Icon to show inside of the preset window |
| `targetVersion`                      | `Array`               | Conditionally change preset availability |
| `createFiles`                        | `FileMap`             | JSON files to create                     |
| `expandFles`                         | `FileMap`             | Files to add data to                     |
| `fields`                             | `InputUI`             | This defines new inputs                  |

### `FileMap`

Takes the file name as a `sting`, the file path where the file will be created or expanded and the variables used in the file

### `InputUI`

Creates a text box, the name of the text box can be defined in a `string` and afterwards be linked to a variable. Any input in that text box will be saved in the assigned variable.



## Icon
Icons show up in the presets window. Presets use [Material Design Icons](https://materialdesignicons.com/) a collection of icons that can be defined in the manifest.json by typing `mdi-` followed by the icon's name.

## Variables

Variables are able to be used in the `createFiles` and `expandFile` components of the `manifest.json they` can also be used any other files in the preset as long as they are "injected" in the file.

Variables can be referenced by using them inside of two curly brackets: `{{VARIABLE}}`. bridge. automatically replaces variables with the current corresponding variable value.

Note: The variable `PROJ_PREFIX` is already pre-defined and contains the namespace of the project (colon is not included).


## Examples


### Variable Example

```javascript
{
  "texture_data": {
    "{{IDENTIFIER}}": {
      "textures": [ "textures/items/{{IDENTIFIER}}" ]
    }
  }
}
```


### Manifest Example

```javascript
{
	"name": "Bat",
	"icon": "mdi-bat",
	"description": "Creates a new bat entity.",
	"category": "fileType.entity",
	"targetVersion": [">=", "1.8.0"],
	"fields": [
		["Identifier", "IDENTIFIER"],
		["Display Name", "IDENTIFIER_NAME"]
	],

	"createFiles": [
		[
			"entity.json",
			"BP/entities/{{IDENTIFIER}}.json",
			{ "inject": ["IDENTIFIER", "PROJECT_PREFIX"] }
		],
		[
			"animation.json",
			"RP/animations/{{IDENTIFIER}}.json",
			{ "inject": ["IDENTIFIER"] }
		]
	],
	"expandFiles": [
		[
			"en_US.lang",
			"RP/texts/en_US.lang",
			{ "inject": ["IDENTIFIER", "IDENTIFIER_NAME", "PROJECT_PREFIX"] }
		]
}
```


### More Examples:

-	[`More Vannila Entity Presets by Joelant05`](https://github.com/bridge-core/plugins/tree/master/plugins/MoreVanillaEntityPresets)
