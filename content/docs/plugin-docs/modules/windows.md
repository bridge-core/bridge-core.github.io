---
description: ''
sidebar: 'plugins'
---

# @bridge/windows

Module that provides acess to bridge's window system.

## Information windows

**Function Signature:** `createInformationWindow(displayName: string, displayContent: string): IBridgeWindow`

## Input windows

**Function Signature:** `createInputWindow(displayName: string, inputLabel: string, defaultValue: string, expandText: string, onConfirm: (input: string) => void): IBridgeWindow`

## Dropdown windows

**Function Signature:** `createDropdownWindow(displayName: string, placeholderText: string, options: Array<string>, defaultSelected: string, onConfirm: (input: string) => void): IBridgeWindow`

## Confirmation windows

**Function Signature:** `createConfirmWindow(displayContent: string, confirmText: string, cancelText: string, onConfirm: () => void, onCancel: () => void): IBridgeWindow`

## Generic windows

**Class:** [`BaseWindow`](https://github.com/bridge-core/editor/blob/main/src/components/Windows/BaseWindow.ts)

Abstract class used to create your own windows

### IBridgeWindow

```typescript
interface IBridgeWindow extends IDisposable {
	// Returns the window state:
	// Maps to the state given by the user as a parameter
	// + additional `isVisible` and `shouldRender` attributes
	getState: () => Record<string, any>
	// Closes the window
	close: () => void
	// Opens the window
	open: () => void
}
```

You can use the `currentWindow` prop on the component you pass to the `createWindow` function to access the `IBridgeWindow` instance directly on your component. You also need to implement the `isVisible` and `shouldRender` attributes properly so the window reacts to the `open()` and `close()` function calls and the window becomes as efficient as possible.
