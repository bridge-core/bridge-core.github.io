---
description: ''
sidebar: 'extensions'
---

# @bridge/sidebar

Module that allows extensions to create sidebar tabs.

## Functions

### create

▸ **create**(`config`): [`SidebarElement`](../interfaces/sidebarelement.md)

Creates a new sidebar and adds it to the current workspace.

**`example`**
```js
const { create } = await require('@bridge/sidebar')
const { MyComponent } = await require('@bridge/ui')

create({
	   id: 'myExtension',
	   displayName: 'Click Me',
	   icon: 'mdi-apple',
	   component: MyComponent
})
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`ISidebarConfig`](../interfaces/isidebarconfig.md) |

#### Returns

[`SidebarElement`](../interfaces/sidebarelement.md)
