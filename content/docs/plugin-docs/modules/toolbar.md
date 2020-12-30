---
description: ''
sidebar: 'plugins'
---

# @bridge/toolbar

Module that allows plugins to create toolbar tabs.

## Creating a toolbar tab

**Function Signature:** `create(config: IAppMenu)`

### IAppMenu

```typescript
interface IAppMenu {
	displayName: string
	displayIcon?: string
	onClick?: () => void
	elements?: IAppMenuElement[]
}
```

### IAppMenuElement

```typescript
interface IAppMenuElement {
	isHidden?: boolean
	displayName: string
	displayIcon?: string
	elements?: (() => IAppMenuElement[]) | IAppMenuElement[]
	keyBinding?: IKeyBinding
	onClick?: () => void
}
```

## Removing a toolbar tab

In order to remove a toolbar tab, you need to have a reference to the `IAppMenu`. Calling `dispose()` on it will remove the toolbar tab from the app.

### Example

```typescript
const { createCategory } = await require('@bridge/toolbar')

const toolbar = create(...)

// Later...
toolbar.dispose()
```

## Re-adding a toolbar tab

In order to re-add a toolbar tab, you need to have a reference to the `IAppMenu`. Calling `add()` on it will add the toolbar tab to the app.

### Example

```typescript
const { createCategory } = await require('@bridge/toolbar')

const toolbar = create(...)

toolbar.dispose()

// Later...
toolbar.add()
```
