---
description: ''
sidebar: 'extensions'
---

# Compiler Plugins

bridge.'s compiler architecture allows anyone to create powerful plugins that can modify the compiler output in almost any way.

## Compiler Config

The compiler config tells the compiler which plugins to use in compilation. It should go in the `<PROJECT NAME>/.bridge/compiler` directory and be given any name. The `dev` compiler mode uses the `default.json` compiler config and the `dist` compiler mode allows you to choose from the available modes.

By default the `default.json` config should look like this:

```json
{
	"icon": "mdi-cogs",
	"name": "[Default Script]",
	"description": "[Transforms the \"bridge.\" folder structure to \"com.mojang\". \"bridge.\" runs it automatically in dev mode in the background to enable fast, incremental builds for testing.]",
	"plugins": [
		"typeScript",
		"entityIdentifierAlias",
		"customEntityComponents",
		"customItemComponents",
		"customBlockComponents",
		"customCommands",
		"moLang",
		[
			"simpleRewrite",
			{
				"packName": "BridgeTest"
			}
		]
	]
}
```

-   `icon`
    Specifies the [icon](https://materialdesignicons.com/) to show on the compiler config in bridge.'s UI.

-   `name`
    The name of the compiler config to show in bridge.'s UI.

-   `description`
    A description of the compiler config to show in bridge.'s UI.

**Note: The `name` and `description` have square brackets around them so that bridge. doesn't attempt to translate these strings.**

-   `plugins`
    An array of values that specify the ids of the compiler plugins to use. The values can either be a string, to simply add the plugin to the compiler, or it can be an array with the first value of the array as the compiler plugin's id and in the second value of the array there should be options for the compiler plugin in an object. For example, see that the `"simpleRewrite"` plugin above contains an argument `"packName"` which is passed to, and used in the plugin.

## Built-In Compiler Plugins

By default bridge. contains 6 different compiler plugins built-in:

-   `typeScript`
    Compiles any TypeScript files in your project into JavaScript. This allows you to use TypeScript for Minecraft's GameTests, Scripting API and bridge.'s custom components and commands.

-   `entityIdentifierAlias`
    Registers entity identifiers to be fetched by the `getAlias()` function in compiler plugins.

-   `customEntityComponents`, `customItemComponents`, `customBlockComponents`
    Provides custom component functionality for entities, items and blocks. [Documentation](https://bridge-core.app/extension-docs/custom-components/).

    **Arguments:**

    -   `v1CompatMode: boolean` Enables v1 custom components. Recommended only for compatibility.

-   `customCommands`
    Provides custom command functionality for use in `.mcfunction` files and json files where commands are supported. [Documentation](https://bridge-core.app/extension-docs/custom-commands/)

    **Arguments:**

    -   `v1CompatMode: boolean` Enables v1 custom commands. Recommended only for compatibility.

-   `moLang`
    Provides custom MoLang functionality. This allows you to create `.molang` files and register functions to be used across your project where MoLang is valid.

-   `simpleRewrite`
    Restructures the compiler output and rewrites your project structure into a structure that Minecraft will understand.

    **Arguments:**

    -   `packName: string` The name of the pack. Default: 'Bridge'

    -   `rewriteToComMojang: boolean` Whether the project is being written to the com.mojang folder. Default: true

    -   `buildName: string` The name of the build. Default (dependent on compiler mode): 'dev' | 'dist'

## Creating a Compiler Plugin

### Registering a Compiler Plugin

A compiler plugin should be added by putting it in the `<EXTENSION NAME>/compiler` folder of an extension. The plugin can then be registered via the extension manifest.

In the extension manifest you need a [`"compiler"`](/extension-docs/extension-manifest/#compiler) property.

### Compiler Plugin File Structure

A compiler plugin should have `module.exports` set as a function which returns the compiler hooks which you are using, with logic within them.

Example:

```js
module.exports = () => {
	const blockPath = 'BP/blocks'

	return {
		transform(filePath, fileContent) {
			// This would add "test" to the end of every block file.
			if (filePath.startsWith(blockPath)) return `${fileContent}test`
			else return
		},
	}
}
```

This function receives context parameters to be used in the plugin. These are:

-   `fileSystem: FileSystem`
    Returns the [FileSystem](https://github.com/bridge-core/editor/blob/main/src/components/FileSystem/FileSystem.ts) instance.

-   `outputFileSystem: FileSystem`
    Returns the output [FileSystem](https://github.com/bridge-core/editor/blob/main/src/components/FileSystem/FileSystem.ts) instance.

-   `hasComMojangDirectory: boolean`
    Allows you to check whether the com.mojang folder has been linked.

-   `compileFiles: (files: string[]) => Promise<void>`
    A function allowing you to force compilation on a list of file paths.

-   `getAliases: (filePath: string) => string[]`
    Returns all aliases registered in the `registerAliases()` hook for a given file path.

-   `targetVersion: string`
    Allows you to read the project target version.

-   `options: { mode: 'dev' | 'build', isFileRequest: boolean, restartDevServer: boolean, [key: string]: any}`

    -   `mode: 'dev' | 'build'`
        Allows you to read the current compiler mode.

    -   `isFileRequest: boolean`
        Some of bridge.'s core components manually request a file to be compiled.
        These file requests don't necessarily need to represent an underlying file on your disk.
        (Example: The particle preview requests a compilation of an unsaved particle file)

    -   `restartDevServer: boolean`
        Whether this compilation is the dev server being restarted.

    -   `[key: string]: any`
        Allows you to access any arguments passed to the plugin in the compiler config.

### Compiler Hooks

```ts
	/**
	 * Runs once before a build process starts
	 */
	buildStart(): Promise<void> | void
	/**
	 * Register files that should be loaded too
	 */
	include(): Maybe<string[]>

	/**
	 * Transform file path
	 * - E.g. adjust file path to point to build folder
	 * - Return null to omit file from build output
	 */
	transformPath(filePath: string | null): Maybe<string>

	/**
	 * Read the file at `filePath` and return its content
	 * - Return null/undefined to just copy the file over
	 */
	read(
		filePath: string,
		fileHandle?: { getFile(): Promise<File> | File }
	): Promise<any> | any

	/**
	 * Load the fileContent and bring it into a usable form
	 */
	load(filePath: string, fileContent: any): Promise<any> | any

	/**
	 * Provide alternative lookups for a file
	 * - E.g. custom component names
	 */
	registerAliases(source: string, fileContent: any): Maybe<string[]>

	/**
	 * Register that a file depends on other files
	 */
	require(source: string, fileContent: any): Maybe<string[]>

	/**
	 * Transform a file's content
	 */
	transform(
		filePath: string,
		fileContent: any,
		dependencies?: Record<string, any>
	): Promise<any> | any

	/**
	 * Prepare data before it gets written to disk
	 */
	finalizeBuild(
		filePath: string,
		fileContent: any
	): Maybe<string | Uint8Array | ArrayBuffer | Blob>

	/**
	 * Runs once after a build process ended
	 */
	buildEnd(): Promise<void> | void
```

## Examples

-   [Texture List Generator](https://github.com/bridge-core/plugins/tree/master/plugins/textureList)

-   [JSON Encoder](https://github.com/bridge-core/plugins/tree/master/plugins/jsonEncoder)

-   [Custom Entity Syntax](https://github.com/bridge-core/plugins/tree/master/plugins/CustomEntitySyntax) **This plugin uses [**rollup.js**](https://www.rollupjs.org/) to bundle third party packages into the plugin.**
