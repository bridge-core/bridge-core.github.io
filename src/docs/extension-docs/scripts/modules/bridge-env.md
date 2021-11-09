---
description: ''
sidebar: 'extensions'
---

# @bridge/env

Utility module that provides access to environmental project data.

## Variables

### APP\_VERSION

• `Const` **APP\_VERSION**: `string`

Gets the current version for bridge.

## Functions

### getCurrentBP

▸ **getCurrentBP**(): `string`

Returns the path to the current behavior pack.

#### Returns

`string`

___

### getCurrentProject

▸ **getCurrentProject**(): `string`

Returns the path to the current project.

#### Returns

`string`

___

### getCurrentRP

▸ **getCurrentRP**(): `string`

Returns the path to the current resource pack.

#### Returns

`string`

___

### getProjectAuthor

▸ **getProjectAuthor**(): `Promise`<`string` \| `undefined`\>

Returns the author of the current project.

#### Returns

`Promise`<`string` \| `undefined`\>

___

### getProjectPrefix

▸ **getProjectPrefix**(): `Promise`<`string` \| `undefined`\>

Returns the prefix/namespace of the current project.

#### Returns

`Promise`<`string` \| `undefined`\>

___

### getProjectTargetVersion

▸ **getProjectTargetVersion**(): `Promise`<`string` \| `undefined`\>

Returns the target minecraft version of the current project.

#### Returns

`Promise`<`string` \| `undefined`\>
