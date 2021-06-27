---
description: ''
sidebar: 'plugins'
---

# @bridge/toolbar

Module that allows plugins to create toolbar tabs.

## Creating a toolbar tab

**Function Signature:** `addCategory(config: ToolbarCategory): void`

### Example

```typescript
const {
	addCategory,
	ToolbarCatgeory,
	actionManager,
} = await require('@bridge/toolbar')

const category = new ToolbarCategory('mdi-file-outline', 'My Category')

category.addItem(
	actionManager.create({
		id: 'myAction',
		icon: 'mdi-folder-outline',
		name: 'My Action',
		description: '...',
		onTrigger: () => {
			// Do something...
		},
	})
)

addCategory(category)
```

## New toolbar category

**Class:** [`ToolbarCategory`](https://github.com/bridge-core/editor/blob/main/src/components/Toolbar/ToolbarCategory.ts)

Used to create new toolbar categories

## Register actions

**Property:** [`actionManager`](https://github.com/bridge-core/editor/blob/main/src/components/Actions/ActionManager.ts)

Allows creating/disposing new app actions
