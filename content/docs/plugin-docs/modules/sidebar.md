---
description: ''
sidebar: 'plugins'
---

# @bridge/sidebar

Module that allows plugins to create sidebar tabs.

## Creating a sidebar

**Function Signature:** `create(config: ISidebarConfig): ISidebarElement`

Creates a new sidebar and adds it to the current workspace.

### ISidebarConfig

```typescript
interface ISidebarConfig {
	// Id of the sidebar (omit to automatically generate it)
	id?: string
	// Name of the sidebar
	displayName: string
	// UI component that should be rendered for the sidebar
	component: Component
	// Icon to display within the sidebar navigation
	icon: string
}
```

#### Example

```typescript
const { create } = await require('@bridge/sidebar')

create({
	id: 'myExtension',
	displayName: 'Click Me',
	icon: 'mdi-apple',
	onClick: () => {
		// Do something...
	},
})
```
