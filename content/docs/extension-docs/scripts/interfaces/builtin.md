---
description: ''
sidebar: 'extensions'
---

# BuiltIn

## Properties

### BaseWindow

• **BaseWindow**: `any`

A helper for quickly creating windows.

**`example`**
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
		v-on:closeWindow="onClose"
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

___

### SidebarWindow

• **SidebarWindow**: `any`

A helper for quickly creating sidebar windows.

**`example`**
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
		v-on:closeWindow="onClose"
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
