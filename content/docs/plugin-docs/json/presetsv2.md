---
description: 'Documentation for the bridge. v2 preset api'
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
| `category`						   | `String`              | Category of the preset entity, item, ect |
| `packTypes`						   | `String`			   | Which packs are needed for the preset    |
| `targetVersion`                      | `Array`               | Conditionally change preset availability |
| `createFiles`                        | `Array`               | JSON files to create                     |
| `expandFles`                         | `Array`               | Files to add data to or expand           |
| `fields`                             | `Array`               | This defines new inputs                  |



### Create, Expand Files

Both components of the manifest `createFiles` and `expandFiles` will need 3 things:
- The template file name
- The file path where they will be created or expanded
- The Variables injected to the file

The template file name is a string that will include the file name and the extension of the file name such as `.json` or `.lang` that will be created or expanded.
The file path will define where the specified template file will be created. If the file is supposed to be expanded the path need to define what file its expanding for example `RP/texts/en_US.lang`.
The variables that will be included in the specified template file will also need to be "Injected" so bridge. knows what variables need to be replaced with their corresponding values






### Fields

Fields create input boxes in the preset window where the player can input some type of data like a image or text that will be assigned to the variable specified after the name of the input box these are the types of input:

- Text
- File
- Selection box
- Numbers
- Switch


#### Input Types

Input types are "boxes" where the user can input different type of data values like `text`, `image`, `models` and more. Input type is defined in the properties of each input box inside the manifest of a preset. To create a new input box create a new array inside of `fields` array.


###### Text

`textInput` is the default type of input is `text`. To create a `text` input type make a array with the name of the text box as a `string` followed by another `string` which is the variable where the user's input will be assigned to


###### File

`fileInput` input types can be created by an array this will include the name of the input box, the input type. Last by creating a `object` properties are defined such as `accept`, `icon` these can only be used inside a `fileInput` input type.


###### Selection Box

`selectInput` is an input type creates selection boxes or drop down lists that have a fixed amount of options. To make a selection box create a input box with a name and assign a variable to it, then create a properties object and define the type of input box as `selectInput` then a `default` value this is the default option the input box will be set. Create an array named `options` then for each option create an object that will define what the display `text` and `value` should be.


###### Number Input

`numberInput` is an input type that creates a slider this slider goes from a specified `min` number to a specified `max` number. This slider will count up or down by a specified `step` number. To create a `numberInput` create a new input box with the `numberInput` as the input `type` then put a `min`, `max`, `step` number.


###### Switch

`switch` is the simplest type of input which is a literal switch that can be turned on or off. The variable that is assigned to the input will get `0` or `1` based on the switch state (`0` for `off` and `1` for `on`). To create it set the input `type` to `switch`


##### Input Properties

Input Properties are poperties that can be defined inside of an input box these are grouped in a `object` and will change depending on what input type is selected. There are 3 properties that work with all input types and those are:

- `type` Type of input.
- `default` Default value for the input.
- `optional` Whether or not the input is optional.


### Icon
Icons show up in the presets window. Presets use [Material Design Icons](https://materialdesignicons.com/) a collection of icons that can be defined in the manifest.json by typing `mdi-` followed by the icon's name.


### Variables

Variables are able to be used in the `createFiles` and `expandFile` components of the `manifest.json they` can also be used any other files in the preset as long as they are "injected" in the file.

Variables can be referenced by using them inside of two curly brackets: `{{VARIABLE}}`. bridge. automatically replaces variables with the current corresponding variable value.

Note: The variable `PROJ_PREFIX` is already pre-defined and contains the namespace of the project (colon is not included).




## Examples

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

### Field Exaples

```javascript
["Text", "TEXT"]
```

```javascript
[
	"File", 
	"FILE",
	{
		"type": "fileInput",
		"accept": "image/png"
	}
]
```

```javascript
[
	"Selection box",
	"SELECT",
	{
		"type": "selectInput",
		"default": "select1",
		"options": [
			{"text": "select1", "value": "select1"},
			{"text": "select2", "value": "select2"},
			{"text": "select3", "value": "select3"}
		]
	}
]
```

```javascript
[
	"Number Slider",
	"NUM_SLIDE",
	{
		"type": "numberInput",
		"min": 0,
		"max": 10,
		"step": 1
	}
]
```

```javascript
[
	"Switch me!",
	"BOOLEAN",
	{
		"type": "switch",
	}
]
```

### More Examples:


-	[`Bridge. Vannila Presets`](https://github.com/bridge-core/editor/tree/main/data/preset)
-	[`More Vannila Entity Presets by Joelant05`](https://github.com/bridge-core/plugins/tree/master/plugins/MoreVanillaEntityPresets)



Page written by Paty
