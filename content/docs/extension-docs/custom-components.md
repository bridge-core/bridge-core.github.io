---
description: ''
sidebar: 'extensions'
---

# Custom Components

## General

bridge. allows you to define new entity, block and item components to make writing long and complex and repetitive behaviors quicker. In order to get started, navigate to the "Custom Components" tab in the preset window and fill in the options, so whether you want to write the component in TypeScript or JavaScript and the file name, as well as whether you want to create an item, entity or block component. If you are creating the component outside of bridge., or in an extension, you need to create a js or ts file in the `BP/components/<COMPONENT TYPE>` or `<EXTENSION NAME>/components/<COMPONENT TYPE>` folder.

## Execution Scope

### `defineComponent`

Custom components have access to the `defineComponent` function, which looks like this:

`defineComponent({ name: (name: string) => void, schema: (schema: any) => void, template: (templateFunction: (componentArgs: T, opts: TemplateContext) => void) => void }): void`

Arguments:

-   `name(name: string): void`
    The name of the custom component that will show up in auto-completions.

-   `schema(schema: any): void`
    The schema of the component. This is used to create auto-completions for custom component arguments and should be written in [standard JSON schema](https://json-schema.org). You can also access bridge.'s built-in auto-completions with the `$ref` property. They can be found [here](https://github.com/bridge-core/editor-packages/tree/main/packages/minecraftBedrock/schema) and should be referenced from the `data` folder root, for example `$ref: '/data/packages/minecraftBedrock/schema/general/slotType.json'` would access slot type auto-completions.

-   `template(templateFunction: (componentArgs: any, opts: TemplateContext) => void): void`
    The `templateFunction` receives `componentArgs` which is the component arguments defined by the user, and the `opts` provides functions to allow you to merge data with the file that the component is created on and allows you to create animations and animation controllers.

### `TemplateContext`

#### Common

-   `compilerMode: 'build' | 'dev'`
    Gives you access to read the current compiler mode.

-   `create(template: any, location?: string, operation?: (deepMerge: (oldData: any, newData: any) => any, oldData: any, newData: any) => any): void`
    Allows you to create data inside of the entity/block/item that the component is in. `template` should be a JavaScript object of the data to merge with the file at the given `location`. `location` should be a path separated by `'/'` to where you want the `template` to be created. For example: `minecraft:entity/description`. The default merge behaviour can optionally be overridden with `operation` which should be a function that takes default merge function `deepMerge`, the data at `location` (`oldData`) and the new data being merged in (`newData`). It should return the result of the custom merge. For example: `(deepMerge, oldData, newData) => newData` will overwrite the data at `location`.

-   `location: string`
    Gives you access to the location of the component in the entity/block/item file.

-   `identifier: string`
    Gives you access to the identifier of the entity/block/item that the component is in.

#### Entity

```ts
interface TemplateContext {
	compilerMode: 'build' | 'dev'
	create: (
		template: any,
		location?: string,
		operation?: (
			deepMerge: (oldData: any, newData: any) => any,
			oldData: any,
			newData: any
		) => any
	) => void
	sourceEntity: () => any
	animation: (animation: any, condition?: string | false) => void
	animationController: (
		animationController: any,
		condition?: string | false
	) => void
	location: string
	identifier: string
	projectNamespace: string
	client: {
		create: (clientEntity: any, formatVersion = "1.10.0") => void
	}
	dialogueScene: (sceneDefinition: any, openDialogue = true) => void
	onActivated: (eventResponse: any) => void
	onDeactivated: (eventResponse: any) => void
	lootTable: (lootTable: any) => string
	tradeTable: (tradeTable: any) => string
	spawnRule: (spawnRule: any) => void
}
```

-	`sourceEntity(): any`
	Access the source entity that your component currently gets applied to.

-   `animation(animation: any, condition?: string | false): void`
    Allows you to create a BP animation that is automatically linked to the entity. `animation` should be a JavaScript object containing the animation data that should be added to the animation name. `condition` is an optional parameter that allows you to set a molang condition for the animation to be run.

-   `animationController(animationController: any, condition?: string | false): void`
    Allows you to create a BP animation controller that is automatically linked to the entity. `animationController` should be a JavaScript object containing the animation controller data that should be added to the animation controller name. `condition` is an optional parameter that allows you to set a molang condition for the animation controller to be run.

-	`client.create(clientEntity: any, formatVersion?: string): void`
	Create a new client entity file for entities that use the custom component.

-	`onActivated(eventResponse: any): void`
	Trigger an event reponse whenever your component gets applied to this entity

-	`onDeactivated(eventResponse: any): void`
	Trigger an event reponse whenever your component gets removed from this entity

-	`dialogueScene(sceneDefinition: any, openDialogue?: boolean): void`
	Creates a new dialogue scene to be used within your add-on. This function is only available if your project target version is at least "1.17.40"

-	`lootTable(lootTable: any): string`
     Creates a loot table for the entity and returns a string that points to this loot table

-	`tradeTable(tradeTable: any): string`
     Creates a trade table for the entity and returns a string that points to this trade table

-	`spawnRule(spawnRule: any): void`
     Creates a new spawn rule file for entities that uses the custom component

#### Item

```ts
interface TemplateContext {
	compilerMode: 'build' | 'dev'
	create: (
		template: any,
		location?: string,
		operation?: (
			deepMerge: (oldData: any, newData: any) => any,
			oldData: any,
			newData: any
		) => any
	) => void
	location: string
	identifier: string
	projectNamespace: string
	sourceItem: () => any
	lootTable: (lootTable: any) => string
	recipe: (recipe: any) => void
	player: {
		create: (
			template: any,
			location?: string,
			operation?: (
				deepMerge: (oldData: any, newData: any) => any,
				oldData: any,
				newData: any
			) => any
		) => void
		animation: (animation: any, condition?: string | false) => void
		animationController: (
			animationController: any,
			condition?: string | false
		) => void
	}
}
```

-	`sourceItem(): any`
	Access the source item that your component currently gets applied to.

-	`lootTable(lootTable: any): string`
     Creates a loot table for the item and returns a string that points to this loot table

-	`recipe(recipe: any): void`
     Creates a new recipe for items that uses the custom component

The `player` object gives access to these functions:

-   `animation(animation: any, condition?: string | false): void`
    Allows you to create a BP animation that is automatically linked to the player. `animation` should be a JavaScript object containing the animation data that should be added to the animation name. `condition` is an optional parameter that allows you to set a molang condition for the animation to be run.

-   `animationController(animationController: any, condition?: string | false): void`
    Allows you to create a BP animation controller that is automatically linked to the player. `animationController` should be a JavaScript object containing the animation controller data that should be added to the animation controller name. `condition` is an optional parameter that allows you to set a molang condition for the animation controller to be run.

-   `create(template: any, location?: string): void`
    Allows you to create data inside of the player. `template` should be a JavaScript object of the data to merge into the player behavior file at the given `location`. `location` should be a path separated by `'/'` to where you want the `template` to be created. For example: `minecraft:entity/description`. The default merge behaviour can optionally be overridden with `operation` which should be a function that takes default merge function `deepMerge`, the data at `location` (`oldData`) and the new data being merged in (`newData`). It should return the result of the custom merge. For example: `(deepMerge, oldData, newData) => newData` will overwrite the data at `location`.

#### Block

```ts
interface TemplateContext {
	compilerMode: 'build' | 'dev'
	create: (
		template: any,
		location?: string,
		operation?: (
			deepMerge: (oldData: any, newData: any) => any,
			oldData: any,
			newData: any
		) => any
	) => void
	sourceBlock: () => any
	location: string
	identifier: string
	projectNamespace: string
	onActivated: (eventResponse: any) => void
	onDeactivated: (eventResponse: any) => void
	lootTable: (lootTable: any) => string
	recipe: (recipe: any) => void
}
```

-	`sourceBlock(): any`
	Access the source block that your component currently gets applied to.

-	`onActivated(eventResponse: any): void`
	Trigger an event reponse whenever your component gets applied to this block

-	`onDeactivated(eventResponse: any): void`
	Trigger an event reponse whenever your component gets removed from this block

-	`lootTable(lootTable: any): string`
     Creates a loot table for the block and returns a string that points to this loot table

-	`recipe(recipe: any): void`
     Creates a new recipe for blocks that uses the custom component

### Creating Files

Files can also be automatically created with custom components. Functions that can be called to create files are:

-   `animation(animation: any, condition: string | false): string` which returns the name of the animation

-   `animationController(animationController: any, condition: string | false): string` which returns the name of the animation controller

-	`client.create(clientEntity: any, formatVersion?: string): void`

-	`dialogueScene(sceneDefinition: any, openDialogue?: boolean): void`

## Extension Manifest

When you are creating a custom component in an extension you need to specify where it should be installed in the extension manifest using the [`contributeFiles`](/extension-docs/extension-manifest/#contributeFiles) field.

## Example

Examples can be found here:

-   [ItemEquippedSensor](https://github.com/bridge-core/plugins/tree/master/plugins/ItemEquippedSensorV2)
-   [SimpleBlockRotation](https://github.com/bridge-core/plugins/tree/master/plugins/BlockRotationV2)
