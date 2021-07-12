---
description: ''
sidebar: 'extensions'
---

# @bridge/env

Utility module that provides access to environmental project data.

## Variables

### APP_VERSION

• `Const` **APP_VERSION**: `string`

Gets the current version for bridge.

## Functions

### getCurrentBP

▸ **getCurrentBP**(): `string`

Returns the path to the current behavior pack.

#### Returns

`string`

---

### getCurrentProject

▸ **getCurrentProject**(): `string`

Returns the path to the current project.

#### Returns

`string`

---

### getCurrentRP

▸ **getCurrentRP**(): `string`

Returns the path to the current resource pack.

#### Returns

`string`

---

### getProjectAuthor

▸ **getProjectAuthor**(): `Promise`<`string` \| `undefined`\>

Returns the author of the current project.

#### Returns

`Promise`<`string` \| `undefined`\>

---

### getProjectPrefix

▸ **getProjectPrefix**(): `Promise`<`string` \| `undefined`\>

Returns the prefix/namespace of the current project.

#### Returns

`Promise`<`string` \| `undefined`\>

---

### getProjectTargetVersion

▸ **getProjectTargetVersion**(): `Promise`<`string` \| `undefined`\>

Returns the target minecraft version of the current project.

#### Returns

`Promise`<`string` \| `undefined`\>
