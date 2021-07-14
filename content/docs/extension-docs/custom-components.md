---
description: ''
sidebar: 'extensions'
---

# Custom Components

## General

bridge. allows you to define new entity, block and item components. In order to get started, navigate to the "Custom Components" tab in the preset window and fill in the options, so whether you want to write the component in TypeScript or JavaScript and the file name, as well as whether you want to create an item, entity or block component. If you are creating the component outside of bridge., or in an extension, you need to create a js or ts file in the `BP/components/<COMPONENT TYPE>` or `<EXTENSION NAME>/components/<COMPONENT TYPE>` folder.

## Execution Scope

### `defineComponent`

Custom components have access to the `defineComponent` function, which looks like this:

`defineComponent({ name: (name: string) => void, schema: (schema: any) => void, template: (templateFunction: (componentArgs: T, opts: TemplateContext) => void) => void }): void`

Arguments:

-   `name(name: string): void`
    The name of the custom component that will show up in auto-completions.

-   `schema(schema: any): void`
    The schema of the component. This is used to create auto-completions for custom component arguments and should be written in [standard JSON schema](https://json-schema.org). You can also access bridge.'s built-in auto-completions with the `$ref` property. They can be found [here](https://github.com/bridge-core/editor/blob/main/data/packages/minecraftBedrock/schema) and should be referenced from the `data` folder root, for example `$ref: '/data/packages/minecraftBedrock/schema/general/slotType.json'` would access slot type auto-completions.

-   `template(templateFunction: (componentArgs: any, opts: TemplateContext) => void): void`
    The the `templateFunction` recieves `componentArgs` which is the component arguments defined by the user, and the `opts` provides functions to allow you to merge data with the file that the component is created on and allows you to create animations and animation controllers.

### `TemplateContext`

#### Common

-   `mode: 'build' | 'dev'`
    Gives you access to read the current compiler mode.

-   `create(template: any, location: string): void`
    Allows you to create data inside of the entity/block/item that the component is in. `template` should be a JavaScript object of the data to merge with the file at the given `location`. `location` should be a path seperated by `'/'` to where you want the `template` to be created. For example: `minecraft:entity/description`

-   `location: string`
    Gives you access to the location of the component in the entity/block/item file.

-   `identifier: string`
    Gives you access to the identifier of the entity/block/item that the component is in.

#### Entity

```ts
interface TemplateContext {
	mode: 'build' | 'dev'
	create: (template: any, location: string) => void
	animation: (animation: any, condition?: string | false) => void
	animationController: (
		animationController: any,
		condition?: string | false
	) => void
	location: string
	identifier: string
}
```

-   `animation(animation: any, condition?: string | false): void`
    Allows you to create a BP animation that is automatically linked to the entity. `animation` should be a JavaScript object containing the animation data that should be added to the animation name. `condition` is an optional parameter that allows you to set a molang condition for the animation to be run.

-   `animationController(animationController: any, condition?: string | false): void`
    Allows you to create a BP animation controller that is automatically linked to the entity. `animationController` should be a JavaScript object containing the animation controller data that should be added to the animation controller name. `condition` is an optional parameter that allows you to set a molang condition for the animation controller to be run.

#### Item

```ts
interface TemplateContext {
	mode: 'build' | 'dev'
	create: (template: any, location: string) => void
	location: string
	identifier: string
	player: {
		create: (template: any, location: string) => void
		animation: (animation: any, condition?: string | false) => void
		animationController: (
			animationController: any,
			condition?: string | false
		) => void
	}
}
```

The `player` object gives access to these functions:

-   `animation(animation: any, condition?: string | false): void`
    Allows you to create a BP animation that is automatically linked to the player. `animation` should be a JavaScript object containing the animation data that should be added to the animation name. `condition` is an optional parameter that allows you to set a molang condition for the animation to be run.

-   `animationController(animationController: any, condition?: string | false): void`
    Allows you to create a BP animation controller that is automatically linked to the player. `animationController` should be a JavaScript object containing the animation controller data that should be added to the animation controller name. `condition` is an optional parameter that allows you to set a molang condition for the animation controller to be run.

-   `create(template: any, location: string): void`
    Allows you to create data inside of the player. `template` should be a JavaScript object of the data to merge into the player behavior file at the given `location`. `location` should be a path seperated by `'/'` to where you want the `template` to be created. For example: `minecraft:entity/description`

#### Block

```ts
interface TemplateContext {
	mode: 'build' | 'dev'
	create: (template: any, location: string) => void
	location: string
	identifier: string
}
```

## Extension Manifest

When you are creating a custom component in an extension you need to specify where it should be installed in the extension manifest.

Structure:

```json
{
	"install": {
		"<srcFolder>": "<destinationFolder>"
	}
}
```

Example:

```json
{
	"install": {
		"components/item": "BP/components/item/bridge/"
	}
}
```

## Example

Examples can be found here:

-   [ItemEquippedSensor](https://github.com/bridge-core/plugins/tree/master/plugins/ItemEquippedSensorV2)
-   [SimpleBlockRotation](https://github.com/bridge-core/plugins/tree/master/plugins/BlockRotationV2)
