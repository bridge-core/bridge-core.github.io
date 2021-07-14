---
description: ''
sidebar: 'extensions'
---

# @bridge/windows

Module that provides access to bridge's window system.

## Variables

### BaseWindow

• `Const` **BaseWindow**: `any`

**`link`** https://github.com/bridge-core/editor/blob/main/src/components/Windows/BaseWindow.ts

## Functions

### createConfirmWindow

▸ **createConfirmWindow**(`displayContent`, `confirmText`, `cancelText`, `onConfirm`, `onCancel`): `void`

Creates a confirm window and displays it.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `displayContent` | `string` | Text content of the window. |
| `confirmText` | `string` | Text to show on the confirm button. |
| `cancelText` | `string` | Text to show on the cancel button. |
| `onConfirm` | () => `void` | Callback to run when the confirm button is pressed. |
| `onCancel` | () => `void` | Callback to run when the cancel button is pressed. |

#### Returns

`void`

___

### createDropdownWindow

▸ **createDropdownWindow**(`displayName`, `placeholder`, `options`, `defaultSelected`, `onConfirm`): `void`

Creates a new dropdown window and displays it.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `displayName` | `string` | Title of the window. |
| `placeholder` | `string` | Placeholder text of the dropdown input. |
| `options` | `string`[] | List of options to be available in the dropdown. |
| `defaultSelected` | `string` | The value from 'options' that should be selected by default. |
| `onConfirm` | (`input`: `string`) => `void` | Callback to run when the confirm button is pressed. |

#### Returns

`void`

___

### createInformationWindow

▸ **createInformationWindow**(`displayName`, `displayContent`): `void`

Creates a new information window and displays it.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `displayName` | `string` | Title of the window. |
| `displayContent` | `string` | Text content of the window. |

#### Returns

`void`

___

### createInputWindow

▸ **createInputWindow**(`displayName`, `inputLabel`, `defaultValue`, `onConfirm`, `expandText?`): `void`

Create a new input window and displays it.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `displayName` | `string` | Title of the window. |
| `inputLabel` | `string` | Label to show on the input. |
| `defaultValue` | `string` | Default value of the input. |
| `onConfirm` | (`input`: `string`) => `void` | Callback to run when the confirm button is pressed. |
| `expandText?` | `string` | Text to append to the input. |

#### Returns

`void`

___

### createWindow

▸ **createWindow**(`vueComponent`, `state`): `any`

**`deprecated`** Calling "createWindow" is deprecated. Please replace direct function calls by defining a class based window instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vueComponent` | `any` |
| `state` | `Record`<`string`, `unknown`\> |

#### Returns

`any`
