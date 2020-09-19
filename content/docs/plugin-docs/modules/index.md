---
description: ''
sidebar: 'plugins'
prev: '/plugin-docs/json/themes/'
---

# Plugin Modules

## Usage Examples:

```javascript
const Sidebar = await require('@bridge/sidebar')

Sidebar.create({
	id: 'example',
	displayName: 'Example',
	icon: 'mdi-console',
	component: UI.Example,
})
```

```javascript
const { createInformationWindow } = await require('@bridge/windows')

createInformationWindow('Window Title', 'This is the window content!')
```
