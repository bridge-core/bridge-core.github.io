---
description: 'Documentation on how to register new file types to bridge. with plugins.'
sidebar: 'plugins'
---

# File Definitions

## General

File definitions allow you to register new file types to bridge. They are loaded from the `<PLUGIN NAME>/file_definitions` folder.

## Format

The following interfaces describe the JSON format of file definition files.

### IFileDefinition

```typescript
interface IFileDefinition {
	// ID of your new file type
	id: string
	// Matcher to recognize your file type
	includes: string
	// Conditionally change availability of file type
	target_version?: string
	// Whether this file is a RP or BP file; Default: BP file
	rp_definition?: boolean
	// How to display a file of this type; Default: File viewer determined by file extension
	file_viewer?: 'json' | 'text' | 'model' | 'mcstructure'
	// Lightning cache definition for this file type
	lightning_cache?: string
	// Highlighter definition for this file type
	highlighter?: string
	// Start state for the auto-completions
	start_state?: string
	// Build array exceptions -explicit exception to bridge.'s is_array detection
	build_array_exceptions?: string[]
	// Comment character
	comment_character?: string
	// File creator
	file_creator?: IFileCreator
	// Documentation lookup data
	documentation?: {
		base: string
		extend: string
	}
}
```

### IFileCreator

```typescript
interface IFileCreator {
	// Displays inside of tabs, file explorer & new file window
	icon: string
	// Display name for the file type
	title: string
	// File extension
	extension: string
	// Where to create files of this type
	path: string
	// Templates
	templates: {
		$default_pack?: {
			// Where to load vanilla templates from
			path: string
		}
		// Additional file templates
		[template_name: string]: any
	}
}
```

## Examples

-   [`packages/data/file_definitions.json`](https://github.com/bridge-core/data/blob/master/packages/data/file_definitions.json)
