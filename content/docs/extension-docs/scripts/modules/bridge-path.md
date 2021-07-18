---
description: ''
sidebar: 'extensions'
---

# @bridge/path

## Functions

### basename

▸ **basename**(`p`, `ext?`): `string`

Return the last portion of a path.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | `string` | The path to evaluate. |
| `ext?` | `string` | Optionally, an extension to remove from the result. |

#### Returns

`string`

___

### dirname

▸ **dirname**(`p`): `string`

Return the directory name of a path.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | `string` | The path to evaluate. |

#### Returns

`string`

___

### extname

▸ **extname**(`p`): `string`

Return the extension of the path, from the last '.' to end of string in the last portion of the path. If there is no '.' in the last portion of the path or the first character of it is '.', then it returns an empty string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | `string` | The path to evaluate |

#### Returns

`string`

___

### join

▸ **join**(...`paths`): `string`

Join all arguments together and normalize the resulting path.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...paths` | `string`[] | Paths to join. |

#### Returns

`string`

___

### relative

▸ **relative**(`from`, `to`): `string`

Solve the relative path from {from} to {to}. At times we have two absolute paths, and we need to derive the relative path from one to the other.

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |

#### Returns

`string`
