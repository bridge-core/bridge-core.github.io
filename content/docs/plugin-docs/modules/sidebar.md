---
description: ''
sidebar: 'plugins'
---

# @bridge/sidebar

Module that allows plugins to create sidebar tabs.

## `create(config: ISidebarConfig): ISidebarInstance`

Creates a new sidebar and adds it to the current workspace.

### ISidebarConfig

```typescript
interface ISidebarConfig {
	id?: string // Id of the sidebar (omit to automatically generate it)
	displayName: string // Name of the sidebar
	component: string // UI component that should be rendered for the sidebar
	icon: string // Icon to display within the sidebar navigation
}
```

### ISidebarInstance

```typescript
export interface ISidebarInstance extends ISidebarConfig {
	readonly uuid: string // Id of the sidebar
	readonly isSelected: boolean // Whether the sidebar is selected
	readonly opacity: number // Icon opacity

	select: () => ISidebarInstance // Select & show this sidebar
	toggle: () => void // Toggle sidebar visibility
	dispose: () => void // Remove the sidebar
}
```

## `getSelected(): ISidebarInstance`

Returns the currently selected sidebar instance.

## `select(id: string): void`

Select the sidebar with the provided id.

## `onChange(cb: (prev: ISidebarInstance, curr: ISidebarInstance) => void)`

Listen to changes to the currently selected sidebar.
