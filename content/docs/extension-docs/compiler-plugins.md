---
description: ''
sidebar: 'extensions'
---

# Compiler Plugins

bridge.'s compiler architecture allows anyone to create powerful plugins that can modify the compiler output in almost any way.

## Compiler Config

The compiler config tells the compiler which plugins to use in compilation. Currently only one compiler config is supported. It should go in the `<PROJECT NAME>/.bridge/compiler` directory and be called `default.json`.

By default the config should look like this:

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
    An array of values that specify the id's of the compiler plugins to use. The values can either be a string, to simply add the plugin to the compiler, or it can be an array with the first value as the compiler plugin's id and arguments for that compiler plugin in an object as the second argument. For example, see the `"simpleRewrite"` plugin above contains an argument `"packName"` which is passed to and used in the plugin.

## Built-In Compiler Plugins

By default bridge contains 6 different compiler plugins built-in:

-   `typeScript`
    Compiles any TypeScript files in your project into JavaScript. This allows you to use TypeScript for Minecraft's GameTests, Scripting API and bridge's custom components and commands.

-   `entityIdentifierAlias`
    Registers entity identifiers to be fetched by the `getAlias()` function in compiler plugins.

-   `customEntityComponents`, `customItemComponents`, `customBlockComponents`
    Provides custom component functionality for entities, items and blocks. [Documentaion](https://bridge-core.app/extension-docs/custom-components/).

    **Arguments:**

    -   `v1CompatMode: boolean` Enables v1 custom components. Recommended only for compatibility.

-   `customCommands`
    Provides custom command functionality for use in function files and json files where commands are supported. [Documentation](https://bridge-core.app/extension-docs/custom-commands/)

    **Arguments:**

    -   `v1CompatMode: boolean` Enables v1 custom commands. Recommended only for compatibility.

-   `moLang`
    Provides custom MoLang functionality. This allows you to create .molang files and register functions to be used across your project where MoLang is permitted.

-   `simpleRewrite`
    Restructures the compiler output and puts your project in a structure that Minecraft will understand.

    **Arguments:**

    -   `packName: string` The name of the pack. Default: 'Bridge'

    -   `rewriteToComMojang: boolean` Whether the project is being written to the com.mojang folder. Default: true

    -   `buildName: string` The name of the build. Default (dependent on compiler mode): 'dev' | 'dist'

## Creating a Compiler Plugin

### Registering a Compiler Plugin

A compiler plugin should be added by putting it in the `<EXTENSION NAME>/compiler` folder of an extension. The plugin can then be registered via the extension manifest.

In the extension mnaifest you need a `"compiler"` property which should contain the path to the plugin and the id to give it, which can be then references in a compiler config.

```json
{
	"compiler": {
		"plugins": {
			"<compilerPluginId>": "compiler/<pluginName>"
		}
	}
}
```

### Compiler Plugin File Structure

A compiler plugin should have `module.exports` set as a function which returns the compiler hooks which you are using, with logic within them.

Example:

```js
module.exports = () => {
	const blockPath = 'BP/blocks'

	return {
		transform(filePath, fileContent) {
			// This would add " test" to the end of every block file.
			if (filePath.startsWith(blockPath)) return `${fileContent} test`
			else return
		},
	}
}
```

This function recieves context parameters to be used in the plugin. These are:

-   `fileSystem: FileSystem`
    Returns the [FileSystem](https://github.com/bridge-core/editor/blob/main/src/components/FileSystem/FileSystem.ts) instance.

-   `outputFileSystem: FileSystem`
    Returns the output [FileSystem](https://github.com/bridge-core/editor/blob/main/src/components/FileSystem/FileSystem.ts) instance.

-   `hasComMojangDirectory: boolean`
    Allows you to check whether the com.mojang folder has been linked.

-   `compileFiles: (files: string[]) => Promise<void>`
    A function allowing you to force compilation on a list of file paths.

-   `getAliases: (filePath: string) => string[]`
    Returns all aliases registered in the `registerAliases()` hook.

-   `targetVersion: string`
    Gives access to reading the project target version.

-   `options: { mode: 'dev' | 'build', isFileRequest: boolean, restartDevServer: boolean, [key: string]: any}`

    -   `mode: 'dev' | 'build'`
        Allows you to read the current compiler mode.

    -   `isFileRequest: boolean`
        Whether this compilation is a single file update.

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