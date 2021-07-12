---
description: ''
sidebar: 'extensions'
---

# ITabActionConfig

## Properties

### icon

• **icon**: `string`

---

### isDisabled

• `Optional` **isDisabled**: (`tab`: `any`) => `boolean`

#### Type declaration

▸ (`tab`): `boolean`

##### Parameters

| Name  | Type  |
| :---- | :---- |
| `tab` | `any` |

##### Returns

`boolean`

---

### name

• **name**: `string`

## Methods

### isFor

▸ **isFor**(`tab`): `boolean` \| `Promise`<`boolean`\>

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `tab` | `any` |

#### Returns

`boolean` \| `Promise`<`boolean`\>

---

### trigger

▸ **trigger**(`tab`): `void` \| `Promise`<`void`\>

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `tab` | `any` |

#### Returns

`void` \| `Promise`<`void`\>
