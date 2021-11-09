---
description: ''
sidebar: 'extensions'
---

# ITabActionConfig

## Properties

### icon

• **icon**: `string`

___

### isDisabled

• `Optional` **isDisabled**: (`tab`: `any`) => `boolean`

#### Type declaration

▸ (`tab`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `tab` | `any` |

##### Returns

`boolean`

___

### name

• **name**: `string`

## Methods

### isFor

▸ **isFor**(`tab`): `boolean` \| `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tab` | `any` |

#### Returns

`boolean` \| `Promise`<`boolean`\>

___

### trigger

▸ **trigger**(`tab`): `void` \| `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tab` | `any` |

#### Returns

`void` \| `Promise`<`void`\>
