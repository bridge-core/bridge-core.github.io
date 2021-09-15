---
description: ''
sidebar: 'extensions'
---

# Custom Commands

## General

bridge. allows you to define new commands, to make writing long and complex functions easier. They can be used in `.mcfunction` files and json files where commands are supported. In order to get started, navigate to the "Custom Commands" tab in the preset window and fill in the options, so whether you want to write the command in TypeScript or JavaScript and the file name. If you are creating the command outside of bridge., or in an extension, you need to create a js or ts file in the `BP/commands` or `<EXTENSION NAME>/commands` folder.

## Execution Scope

### `defineCommand`

Custom commands have access to the `defineCommand` function, which looks like this:

`defineCommand({ name: (name: string) => void, schema: (schema: any) => void, template: (templateFunction: (commandArgs: string[]) => string[] | string) => void }): void`

Arguments:

-   `name(name: string): void`
    The name of the custom command that will show up in auto-completions.

-   `schema(schema: any): void`
    The schema of the command. This is used to create auto-completions for custom command arguments and should be written in the shape of [bridge.'s command schema](https://github.com/bridge-core/editor-packages/blob/main/packages/minecraftBedrock/language/mcfunction/schema/main.json) from the `arguments` property, to define the arguments of the command. You can also access bridge.'s built-in auto-completions with the `additionalData > schemaReference` property. They can be found [here](https://github.com/bridge-core/editor-packages/tree/main/packages/minecraftBedrock/schema) and should be referenced from the `data` folder root, for example `additionalData: { schemaReference: '/data/packages/minecraftBedrock/schema/general/slotType.json' }` would access slot type auto-completions.

    Example:

    ```js
    schema({
    	arguments: [
    		{ type: 'string', additionalData: { values: ['1', '2', '3'] } },
    		{ type: 'string', additionalData: { values: ['4', '5', '6'] } },
    	],
    })
    ```

-   `template(templateFunction: (componentArgs: string[]) => string[] | string): void`
    The `templateFunction` recieves a string of values representing the arguments that the user has input after the command. It should return a command or list of commands that represent the commands to be put in place of the custom command in compilation.

## Extension Manifest

When you are creating a custom command in an extension you need to specify where it should be installed in the extension manifest using the [`contributeFiles`](/extension-docs/extension-manifest/#contributeFiles) field.

## Example

```js
export default defineCommand(({ name, template, schema }) => {
	name('helloWorld')
	schema({
		arguments: [
			{ type: 'string', additionalData: { values: ['1', '2', '3'] } },
		],
	})

	template((names) => {
		return ['say Hello World!', ...names.map((name) => `say Hello ${name}`)]
	})
})
```
