---
description: 'Theme documentation.'
sidebar: 'extensions'
next: '/extensions-docs/modules/'
---

# Themes

## General

Themes change how bridge. looks in a variety of ways. This includes changing both light mode and dark mode, syntax highlighter and many other parts of bridge.'s UI.

## Extension Integration

Extensions can also add new themes by providing them inside a `<EXTENSION NAME>/themes` folder. Create a JSON file per theme you want to add. The individual file names don't matter.

## Loading Behavior

bridge. applies the default color theme first and then overwrites it with the theme you provided. This means you only need to define the colors which should change in your custom theme. An exception to this behavior is the file highlighter definition. You have to specifically set all colors or bridge. will use the default text color (white/black).

## Format

### Main

| Name          | Type                            | Description                                     |
| ------------- | ------------------------------- | ----------------------------------------------- |
| `name`        | `String`                        | Name of your theme                              |
| `id`          | `String`                        | UUID for your theme                             |
| `colorScheme` | `String<light\|dark>`           | Color scheme of your theme                      |
| `colors`      | `Object<ThemeDefinition>`       | Colors of your theme                            |
| `highlighter` | `Object<HighlighterDefinition>` | Syntax highlighter colors of your bridge. theme |
| `monaco`      | `Record<string, string>`        | Color scheme for the monaco editor              |

### ThemeDefinition

| Name                      | Type     | Description                                                                          |
| ------------------------- | -------- | ------------------------------------------------------------------------------------ |
| `primary`                 | `String` | Color; affects menu icons, active tabs, MoLang edit icons, and more                  |
| `secondary`               | `String` | Color                                                                                |
| `accent`                  | `String` | Color; affects toolbar icons                                                         |
| `error`                   | `String` | Color; affects hovered errors, ! error marks, close button on close prompt, and more |
| `info`                    | `String` | Color                                                                                |
| `success`                 | `String` | Color; affects save button on close prompt                                           |
| `warning`                 | `String` | Color                                                                                |
| `background`              | `String` | Color; affects background of editor                                                  |
| `sidebarNavigation`       | `String` | Color; affects navigation sidebar                                                    |
| `expandedSidebar`         | `String` | Color; affects sidebar containing folders and files                                  |
| `sidebarSelection`        | `String` | Color;                                                                               |
| `menu`                    | `String` | Color; affects menus                                                                 |
| `toolbar`                 | `String` | Color; affects top bar with drop-down menus                                          |
| `footer`                  | `String` | Color; affects bottom bar containing notifications                                   |
| `tooltip`                 | `String` | Color; affects the tooltip that show when you hover over buttons                     |
| `tabActive`               | `String` | Color                                                                                |
| `tabInactive`             | `String` | Color                                                                                |
| `lineHighlightBackground` | `String` | Color                                                                                |
| `scrollbarThumb`          | `String` | Color                                                                                |
| `behaviorPack`            | `String` | Color                                                                                |
| `resourcePack`            | `String` | Color                                                                                |
| `skinPack`                | `String` | Color                                                                                |
| `worldTemplate`           | `String` | Color                                                                                |

### HighlighterDefinition

| Name                | Type                  | Description                                                        |
| ------------------- | --------------------- | ------------------------------------------------------------------ |
| `property`          | `Object<StyleObject>` | Custom style for syntax highlighter                                |
| `keyword`           | `Object<StyleObject>` | Custom style for syntax highlighter                                |
| `definition`        | `Object<StyleObject>` | Custom style for syntax highlighter                                |
| `atom`              | `Object<StyleObject>` | Custom style for syntax highlighter                                |
| `number`            | `Object<StyleObject>` | Custom style for syntax highlighter                                |
| `string`            | `Object<StyleObject>` | Custom style for syntax highlighter                                |
| `variable`          | `Object<StyleObject>` | Custom style for syntax highlighter                                |
| `variableStrong`    | `Object<StyleObject>` | Custom style for syntax highlighter                                |
| `meta`              | `Object<StyleObject>` | Custom style for syntax highlighter                                |
| `comment`           | `Object<StyleObject>` | Custom style for syntax highlighter                                |
| `colorCode.<Color>` | `Object<StyleObject>` | Custom style for syntax highlighter; affects Minecraft color codes |

### StyleObject

| Name             | Type                                               | Description     |
| ---------------- | -------------------------------------------------- | --------------- |
| `color`          | `String`                                           | Color           |
| `textDecoration` | `String<underline\|overline\|line-through\|blink>` | Text decoration |
| `isItalic`       | `Boolean`                                          | Set italic text |

## Example

```json
{
	"id": "bridge.default.dark",
	"name": "Default Dark",
	"colorScheme": "dark",
	"colors": {
		"text": "#fff",
		"primary": "#0073FF",
		"secondary": "#0073FF",
		"accent": "#0073FF",
		"error": "#ff5252",
		"info": "#2196f3",
		"warning": "#fb8c00",
		"success": "#4caf50",
		"background": "#121212",
		"sidebarNavigation": "#1F1F1F",
		"expandedSidebar": "#1F1F1F",
		"sidebarSelection": "#151515",
		"menu": "#252525",
		"footer": "#111111",
		"tooltip": "#1F1F1F",
		"toolbar": "#000000",
		"tabActive": "#121212",
		"tabInactive": "#1F1F1F",
		"lineHighlightBackground": "#1F1F1F"
	},
	"highlighter": {
		"type": {
			"color": "#a6e22e"
		},
		"keyword": {
			"color": "#f92672"
		},
		"definition": {
			"color": "#fd971f"
		},
		"atom": {
			"color": "#ae81ff"
		},
		"number": {
			"color": "#ae81ff"
		},
		"string": {
			"color": "#e6db74"
		},
		"variable": {
			"color": "#9effff"
		},
		"variableStrong": {
			"color": "#9effff"
		},
		"meta": {
			"color": "white"
		},
		"comment": {
			"color": "#75715e"
		},
		"colorCode.darkRed": {
			"color": "#AA0000"
		},
		"colorCode.red": {
			"color": "#FF5555"
		},
		"colorCode.gold": {
			"color": "#FFAA00"
		},
		"colorCode.yellow": {
			"color": "#FFFF55"
		},
		"colorCode.darkGreen": {
			"color": "#00AA00"
		},
		"colorCode.green": {
			"color": "#55FF55"
		},
		"colorCode.aqua": {
			"color": "#55FFFF"
		},
		"colorCode.darkAqua": {
			"color": "#00AAAA"
		},
		"colorCode.darkBlue": {
			"color": "#0000AA"
		},
		"colorCode.blue": {
			"color": "#5555FF"
		},
		"colorCode.lightPurple": {
			"color": "#FF55FF"
		},
		"colorCode.darkPurple": {
			"color": "#AA00AA"
		},
		"colorCode.white": {
			"color": "#FFFFFF"
		},
		"colorCode.gray": {
			"color": "#AAAAAA"
		},
		"colorCode.darkGray": {
			"color": "#555555"
		},
		"colorCode.black": {
			"color": "#000000"
		},
		"colorCode.minecoinGold": {
			"color": "#ff0000"
		},
		"colorCode.bold": {
			"color": "#fff",
			"textDecoration": "bold"
		},
		"colorCode.italic": {
			"color": "#fff",
			"textDecoration": "italic"
		},
		"colorCode.underline": {
			"color": "#fff",
			"textDecoration": "underline"
		}
	}
}
```

### More Examples:

-   [`Built-in Themes`](https://github.com/bridge-core/editor-packages/tree/main/packages/common/themes)
-   [`Theme Schema`](https://github.com/bridge-core/editor-packages/blob/main/packages/common/schema/bridge/theme/main.json)
