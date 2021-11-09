---
description: ''
sidebar: 'extensions'
---

# @bridge/tab-actions

## Functions

### addTabActions

▸ **addTabActions**(`tab`): `Promise`<`void`\>

Add the default tab actions for the specific file tab.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tab` | `any` |

#### Returns

`Promise`<`void`\>

___

### register

▸ **register**(`definition`): `Promise`<[`IDisposable`](../interfaces/idisposable.md)\>

Register a new tab action.

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`ITabActionConfig`](../interfaces/itabactionconfig.md) |

#### Returns

`Promise`<[`IDisposable`](../interfaces/idisposable.md)\>

Disposable

___

### registerPreview

▸ **registerPreview**(`definition`): `Promise`<[`IDisposable`](../interfaces/idisposable.md)\>

Register a new tab preview

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`ITabPreviewConfig`](../interfaces/itabpreviewconfig.md) |

#### Returns

`Promise`<[`IDisposable`](../interfaces/idisposable.md)\>

Disposable
