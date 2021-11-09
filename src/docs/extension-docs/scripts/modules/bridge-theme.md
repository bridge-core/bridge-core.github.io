---
description: ''
sidebar: 'extensions'
---

# @bridge/theme

Module that allows you to access the current theme and react to when it changes.

## Functions

### getColor

▸ **getColor**(`name`): `string`

Get the color code of the given color name, from the current theme.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | [`TColorName`](../README.md#tcolorname) | The name of the color to get. |

#### Returns

`string`

___

### getCurrentMode

▸ **getCurrentMode**(): ``"light"`` \| ``"dark"``

Gets the current theme mode.

#### Returns

``"light"`` \| ``"dark"``

___

### getHighlighterInfo

▸ **getHighlighterInfo**(`name`): { `background?`: `string` ; `color?`: `string` ; `isItalic?`: `boolean` ; `textDecoration?`: `string`  } \| `undefined`

Get the highlighter info of a give color name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

{ `background?`: `string` ; `color?`: `string` ; `isItalic?`: `boolean` ; `textDecoration?`: `string`  } \| `undefined`

___

### onChange

▸ **onChange**(`func`): [`IDisposable`](../interfaces/idisposable.md)

Create a callback to be called when the given theme mode changes theme.

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | (`mode`: ``"dark"`` \| ``"light"``) => `void` |

#### Returns

[`IDisposable`](../interfaces/idisposable.md)
