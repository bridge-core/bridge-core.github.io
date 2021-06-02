---
description: ''
sidebar: 'plugins'
---

# @bridge/windows

Module that provides acess to bridge's window system.

## Information windows

**Function Signature:** `createInformationWindow(displayName: string, displayContent: string): IBridgeWindow`

## Input windows

**Function Signature:** `createInputWindow(displayName: string, inputLabel: string, defaultValue: string, expandText: string, onConfirm: (input: string) => void): IBridgeWindow`

## Dropdown windows

**Function Signature:** `createDropdownWindow(displayName: string, placeholderText: string, options: Array<string>, defaultSelected: string, onConfirm: (input: string) => void): IBridgeWindow`

## Confirmation windows

**Function Signature:** `createConfirmWindow(displayContent: string, confirmText: string, cancelText: string, onConfirm: () => void, onCancel: () => void): IBridgeWindow`

## Generic windows

**Function Signature:** `createWindow(vueComponent: VueComponent, state: Record<string, any>): IBridgeWindow`

A helper function that is used internally to define all app windows. You can use it to create rich, custom interfaces for your plugin.

### IBridgeWindow

```typescript
interface IBridgeWindow extends IDisposable {
	// Returns the window state:
	// Maps to the state given by the user as a parameter
	// + additional `isVisible` and `shouldRender` attributes
	getState: () => Record<string, any>
	// Closes the window
	close: () => void
	// Opens the window
	open: () => void
}
```

You can use the `currentWindow` prop on the component you pass to the `createWindow` function to access the `IBridgeWindow` instance directly on your component. You also need to implement the `isVisible` and `shouldRender` attributes properly so the window reacts to the `open()` and `close()` function calls and the window becomes as efficient as possible.

#### Example Component:

```html
<template>
	<BaseWindow
		v-if="shouldRender"
		:windowTitle="windowTitle"
		:isVisible="isVisible"
		:hasMaximizeButton="false"
		:isFullscreen="false"
		:width="440"
		:height="120"
		@closeWindow="onClose"
	>
		<template #default>
			Lorem Ipsum...
		</template>
	</BaseWindow>
</template>

<script>
	const { BuiltIn } = await require('@bridge/ui')

	export default {
		name: 'Information',
		components: {
			BaseWindow: BuiltIn.BaseWindow,
		},
		props: ['currentWindow'],
		data() {
			return this.currentWindow.getState()
		},
		methods: {
			onClose() {
				this.currentWindow.close()
			},
		},
	}
</script>
```
