---
description: ''
sidebar: 'extensions'
---

# @bridge/ui

Module that provides programmatic access to [Vue](https://vuejs.org/) components defined inside of the plugin's `ui/` folder.

## Variables

### BuiltIn

• `Const` **BuiltIn**: [`BuiltIn`](../interfaces/builtin.md)

___

### UI

• `Const` **UI**: `any`

**`example`**
```js
//Accesses the component inside of the ui/Main.vue file
const { Main } = await require('@bridge/ui')

//Accesses the component inside of the ui/Nested/Main.vue file
const {
    Nested: { Main: Main2 },
} = await require('@bridge/ui')
```
