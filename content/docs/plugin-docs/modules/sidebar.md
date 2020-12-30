---
description: ''
sidebar: 'plugins'
---

# @bridge/sidebar

Module that allows plugins to create sidebar tabs.

## Creating a sidebar

**Function Signature:** `create(config: ISidebarConfig): ISidebarInstance`

Creates a new sidebar and adds it to the current workspace.

### ISidebarConfig

```typescript
interface ISidebarConfig {
	// Id of the sidebar (omit to automatically generate it)
	id?: string
	// Name of the sidebar
	displayName: string
	// UI component that should be rendered for the sidebar
	component: string
	// Icon to display within the sidebar navigation
	icon: string
}
```

### ISidebarInstance

```typescript
export interface ISidebarInstance extends ISidebarConfig, IDisposable {
	// Id of the sidebar
	readonly uuid: string
	// Whether the sidebar is selected
	readonly isSelected: boolean
	// Icon opacity
	readonly opacity: number

	// Select & show this sidebar
	select: () => ISidebarInstance
	// Toggle sidebar visibility
	toggle: () => void
}
```

## Getting the currently selected sidebar

**Function Signature:** `getSelected(): ISidebarInstance`

Returns the currently selected sidebar instance.

## Selecting a sidebar

**Function Signature:** `select(id: string): void`

Select the sidebar with the provided id.

### Alternative

Given that you have access to the `ISidebarInstance` that you want to select, you can also call `select()` on it.

#### Example

```typescript
const { create } = await require('@bridge/sidebar')

const sidebar = create(...)

sidebar.select()
```

## Listening to changes

**Function Signature:** `onChange(cb: (prev: ISidebarInstance, curr: ISidebarInstance) => void)`

Registers a handler that fires whenever the currently selected sidebar changes.

## Removing a sidebar

In order to remove a sidebar, you need to have a reference to the `ISidebarInstance`. Calling `dispose()` on it will remove the sidebar from the app.

### Example

```typescript
const { create } = await require('@bridge/sidebar')

const sidebar = create(...)

// Later...
sidebar.dispose()
```
