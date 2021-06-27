---
description: ''
sidebar: 'plugins'
---

# @bridge/ui

Module that provides programmatic access to [Vue](https://vuejs.org/) components defined inside of the plugin's `ui/` folder.

## Accessing Vue components

```typescript
//Accesses the component inside of the ui/Main.vue file
const { Main } = await require('@bridge/ui')
```

```typescript
//Accesses the component inside of the ui/Nested/Main.vue file
const {
	Nested: { Main: Main2 },
} = await require('@bridge/ui')
```

## UI.BuiltIn

bridge. ships with a couple of built-in components for you to use:

### BuiltIn.BaseWindow

A helper for quickly creating windows.

#### Props

```javascript
{
	isFullscreen: Boolean,
	isVisible: Boolean,
	shouldRender: Boolean,
	isPersistent: Boolean,
	actions: Array,
	sidebarWidth: {
		type: String,
		default: '25%',
	},
	blurBackground: {
		type: Boolean,
		default: true,
	},
	hideToolbar: Boolean,
	windowTitle: String,
	hasCloseButton: {
		type: Boolean,
		default: true,
	},
	hasMaximizeButton: {
		type: Boolean,
		default: false,
	},
	width: {
		type: Number,
		default: 1600,
	},
	maxWidth: {
		type: Number,
		default: 1600,
	},
	height: {
		type: Number,
		default: 800,
	},
	maxHeight: {
		type: Number,
		default: 800,
	},
	heightUnset: Boolean,
	/*
	/  These percentage values overwrite the height, width, maxHeight and maxWidth props
	/  and allow you to create windows that fit inside the users display size by providing the
	/  percentage you want the window to cover
	*/
	percentageHeight: Number,
	percentageWidth: Number,
	maxPercentageHeight: Number,
	maxPercentageWidth: Number,
}
```

#### Events

```
@closeWindow
@toggleFullscreen
```

#### Example Usage

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
		<template #toolbar>
			[TOOLBAR CONTENT]
		</template>
		<template #default>
			[MAIN CONTENT]
		</template>
		<template #actions>
			[ACTION CONTENT]
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

### BuiltIn.SidebarWindow

A helper for quickly creating sidebar windows

#### Props

```javascript
{
	sidebarItems: Array,
	value: {
		type: String,
		default: undefined,
	},
	isFullscreen: Boolean,
	isVisible: Boolean,
	shouldRender: Boolean,
	isPersistent: Boolean,
	actions: Array,
	sidebarWidth: {
		type: String,
		default: '25%',
	},
	blurBackground: {
		type: Boolean,
		default: true,
	},
	hideToolbar: Boolean,
	windowTitle: String,
	hasCloseButton: {
		type: Boolean,
		default: true,
	},
	hasMaximizeButton: {
		type: Boolean,
		default: false,
	},
	width: {
		type: Number,
		default: 1600,
	},
	maxWidth: {
		type: Number,
		default: 1600,
	},
	height: {
		type: Number,
		default: 800,
	},
	maxHeight: {
		type: Number,
		default: 800,
	},
	heightUnset: Boolean,
	/*
	/  These percentage values overwrite the height, width, maxHeight and maxWidth props
	/  and allow you to create windows that fit inside the users display size by providing the
	/  percentage you want the window to cover
	*/
	percentageHeight: Number,
	percentageWidth: Number,
	maxPercentageHeight: Number,
	maxPercentageWidth: Number,
}
```

#### Events

```
@closeWindow
@toggleFullscreen
```

#### Example Usage

```html
<template>
	<SidebarWindow
		v-if="shouldRender"
		:windowTitle="windowTitle"
		:isVisible="isVisible"
		:hasMaximizeButton="false"
		:isFullscreen="false"
		:width="440"
		:height="120"
		@closeWindow="onClose"
	>
		<template #toolbar>
			[TOOLBAR CONTENT]
		</template>
		<template #sidebar>
			[SIDEBAR CONTENT]
		</template>
		<template #default>
			[MAIN CONTENT]
		</template>
		<template #actions>
			[ACTION CONTENT]
		</template>
	</SidebarWindow>
</template>

<script>
	const { BuiltIn } = await require('@bridge/ui')

	export default {
		name: 'Information',
		components: {
			SidebarWindow: BuiltIn.SidebarWindow,
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
