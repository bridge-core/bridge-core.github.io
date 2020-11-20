---
description: ''
sidebar: 'plugins'
---

# @bridge/file-importer

Allows plugin authors to define a custom file importer that appears inside of bridge.'s app menu next to other import options (e.g. "Open File" & "Import OBJ Model"). Upon clicking one of the importers, a native file chooser dialog appears automatically. The registered importer only needs to define its `onImport` method that gets called for every file the user chooses to import.

## Registering an importer

**Function Signature:** `register(config: IImporterElement): string`

```typescript
interface IImporterElement extends IAppMenuElement {
	// Function that gets called once the user has selected the files to import
	onImport: (filePath: string) => Promise<void> | void
}
```

You can read more about the `IAppMenuElement` interface [here](../toolbar#iappmenuelement). The `onClick()` function cannot be used as there is a default click handler to open the file chooser that overrides it.
