---
description: 'Documentation for the bridge. preset api'
sidebar: 'extensions'
---

# Presets

## General

Presets are groups of files which can be created through the preset interface by only entering an identifier and clicking "CREATE!". They help quickly setting up new items, entities or similiar features. This page covers the presets in version 2 of the API.

## Extension Integration

Extensions can also add new presets by providing them inside a `<EXTENSION NAME>/presets` folder. Create a folder per preset you want to add. Each folder should contain a `manifest.json` file and templates of all files your preset should create.

## Manifest Format

### Main

| Name               | Type                                     | Description                                  |
| ------------------ | ---------------------------------------- | -------------------------------------------- | ------------------------------------------------------------- |
| `name`             | `String`                                 | Name to display inside the preset window     |
| `description`      | `String`                                 | Preset description                           |
| `icon`             | `String`                                 | Icon to show inside of the preset window     |
| `category`         | `String`                                 | Category of the preset entity, item, ect     |
| `packTypes`        | `Array`                                  | Which packs are needed for the preset        |
| `additionalModels` | `Object`                                 | Advanced Optional Feature for preset scripts |
| `targetVersion`    | `Array`                                  | Conditionally change preset availability     |
| `createFiles`      | `Array<string, string, IPresetFileOpts>  | string`                                      | JSON files to create or the name of a presetScript to execute |
| `expandFles`       | `Array<string, string, IPresetFileOpts>` | Files to add data to or expand               |
| `fields`           | `Array`                                  | Creates new input boxes                      |

### Create, Expand Files

Both components of the manifest `createFiles` and `expandFiles` will need 3 things:

-   The template file name
-   The file path where they will be created or expanded
-   Other options for when creating the file

The template file name is a string that will include the file name and the extension of the file name such as `.json` or `.lang` that will be created or expanded.
The file path will define where the specified template file will be created. If the file is supposed to be expanded the path need to define what file it's expanding. Example: `RP/texts/en_US.lang`.
The variables that will be included in the specified template file will also need to be "injected" so bridge. knows what variables need to be replaced with their corresponding values.

## Options

```ts
interface IPresetFileOpts {
	/*
	 * Variables to inject into the file.
	 */
	inject: string[]
	/*
	 * Whether to open the file when the preset is created.
	 */
	openFile?: boolean
	/**
	 * Pack type to create the file in.
	 */
	packPath?: 'behaviorPack' | 'resourcePack' | 'skinPack' | 'worldTemplate'
}
```

### Fields

Fields create input boxes in the preset window where the user can input some type of data like an image or text that will be assigned to the variable specified after the name of the input box these are the types of input:

-   Text
-   File
-   Selection box
-   Numbers
-   Switch

#### Input Types

Input types are "boxes" where the user can input different types of data values like `text`, `image`, `models` and more. Input types are defined in the properties of each input box inside the manifest of a preset. To create a new input box create a new array inside of `fields` array and define a display name for the box and a variable to which the user's input gets assigned. Properties can be defined inside of an `object` thats in a input box.

###### Text

`textInput` is the default type of input. To create it make an array with the name of the text box as a `string` followed by another `string` which the variable to which the user's input gets assigned.

###### File

`fileInput` input types will ask for the user to input a file. To create the field, set the `type` property to `fileInput`. Set the optional `multiple` property to `true` to select more than one file. Use the `accept` property to limit the input to one type of file. Use `icon` property to set the icon of the input box.

###### Selection Box

`selectInput` is an input type that creates a selection box or drop down list of options. To make a selection box create a input box with a name and assign a variable to it, then create a properties object and define the type of input box as `selectInput` then a `default` value this is the default option the input box will be set. Create an array named `options` then for each option create an object that will define what the display `text` and `value` should be.

`options` also allows an object with `cacheKey` and `fileType`, where the file type is the id of the [file definition](/extension-docs/json/file-definitions/) and the cache key is the lightning cache key to get the values of.

###### Number Input

`numberInput` is an input type that creates a slider, this slider goes from a defined `min` number to a defined `max` number. This slider will count up or down by a defined `step` number. To create it create a new input box with the `numberInput` as the input `type` then put a `min`, `max`, `step` number.

###### Switch

`switch` is the simplest type of input which is a literal switch that can be turned on or off. The variable that is assigned to the input will get `true` or `false` based on the switch state. To create it set the input `type` to `switch`.

#### Input Properties

Input Properties are poperties that can be defined inside of an `object` that's in an input box. Properties change depending on what input type is selected. There are 3 properties that work with all input types and those are:

| Name       | Type      | Description                           |
| ---------- | --------- | ------------------------------------- |
| `type`     | `String`  | Type of input.                        |
| `default`  | `String`  | Default value for the input.          |
| `optional` | `Boolean` | Whether or not the input is optional. |

### Icon

Icons show up in the presets window. Presets use [Material Design Icons](https://materialdesignicons.com/), a collection of icons that can be defined in the manifest.json by typing `mdi-` followed by the icon's name.

### Variables

Variables are able to be used in the `createFiles` and `expandFile` components of the manifest they can also be used in any other files of the preset as long as they are "injected" into the file.

Variables can be referenced by using them inside of two curly brackets: `{{VARIABLE}}`. bridge. automatically replaces variables with the current corresponding variable value.

Note: The variable `PROJECT_PREFIX` is already pre-defined and contains the namespace of the project (colon is not included).

## Preset Scripts

### Usage

Preset scripts are JavaScript files which can handle file creation upon preset creation.

They can be referenced in presets by adding its file path to the `createFiles` array. If you create your own they can be put in the preset's folder and referenced using a relative path, e.g. `<EXTENSION_NAME>/presets/<PRESET_NAME>/myScript.js` can be referenced with `./myScript.js`, from the same preset folder.

Alternativley, you can reference [built-in preset scripts](https://github.com/bridge-core/editor-packages/tree/main/packages/minecraftBedrock/presetScript) with `presetScript/<SCRIPT_NAME>`.

## Creating

To create a preset script, create a JavaScript file in your `presets` folder. Inside should assign `module.exports` as a function to run on preset creation.

This function has the following passed into it:

| Identifier     | Type                                                                                | Description                                                                                           |
| -------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| createFile     | (filePath: string, data: any, opts: [IPresetFileOpts](#options)) => Promise\<void\> | Creates a file at the given path                                                                      |
| expandFile     | (filePath: string, data: any, opts: [IPresetFileOpts](#options)) => Promise\<void\> | Adds data to a file at the given path                                                                 |
| createJSONFile | (filePath: string, data: any, opts: [IPresetFileOpts](#options)) => Promise\<void\> | Creates a JSON file at the given path. Should take data as an object to be converted to a json string |
| loadPresetFile | (filePath: string) => Promise<File>                                                 | Returns the specified file from the preset's folder                                                   |
| models         | Object                                                                              | An object representing models input by the user or defined in `additionalModels`                      |

## Examples

### Manifest

```json
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
		"./myPresetScript.js",
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
	]
}
```

### Variable

```json
{
	"texture_data": {
		"{{IDENTIFIER}}": {
			"textures": ["textures/items/{{IDENTIFIER}}"]
		}
	}
}
```

### Fields

```json
["Text", "TEXT"]
```

```json
[
	"File",
	"FILE",
	{
		"type": "fileInput",
		"accept": "image/png"
	}
]
```

```json
[
	"Multiple Files",
	"FILES",
	{
		"type": "fileInput",
		"accept": "image/png",
		"multiple": true
	}
]
```

```json
[
	"Selection box",
	"SELECT",
	{
		"type": "selectInput",
		"default": "select1",
		"options": [
			{ "text": "select1", "value": "select1" },
			{ "text": "select2", "value": "select2" },
			{ "text": "select3", "value": "select3" }
		]
	}
]
```

```json
[
	"Entity Event Selection",
	"EVENT",
	{
		"type": "selectInput",
		"options": {
			"fileType": "entity",
			"cacheKey": "event"
		}
	}
]
```

```json
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

```json
[
	"Switch me!",
	"BOOLEAN",
	{
		"type": "switch"
	}
]
```

### Preset script

```js
module.exports = async ({ createFile, loadPresetFile, models, expandFile }) => {
	let { TEXTURE, IDENTIFIER, PROJECT_PREFIX, DEFAULT_TEXTURE, PRESET_PATH } =
		models
	let fileName = `${IDENTIFIER}.png`

	if (!TEXTURE) TEXTURE = await loadPresetFile(DEFAULT_TEXTURE)
	else fileName = TEXTURE.name
	const fileNameNoExtension = fileName.replace(/.png|.tga|.jpg|.jpeg/gi, '')

	await createFile(`textures/blocks/${PRESET_PATH}${fileName}`, TEXTURE, {
		packPath: 'resourcePack',
	})
	await expandFile(
		'textures/terrain_texture.json',
		{
			texture_data: {
				[`${PROJECT_PREFIX}_${IDENTIFIER}`]: {
					textures: `textures/blocks/${PRESET_PATH}${fileNameNoExtension}`,
				},
			},
		},
		{ packPath: 'resourcePack' }
	)
}
```

### More Examples

-   [`bridge. Vanilla Presets`](https://github.com/bridge-core/editor-packages/tree/main/packages/minecraftBedrock/preset)
-   [`More Vanilla Entity Presets`](https://github.com/bridge-core/plugins/tree/master/plugins/MoreVanillaEntityPresets)
-   [`Preset schema`](https://github.com/bridge-core/editor-packages/blob/main/packages/common/schema/bridge/preset/main.json)
