---
description: ''
sidebar: 'plugins'
---

# @bridge/tab-actions

Module that allows you to register new file actions

## Functions

**Function Signature:** `addTabActions(tab: FileTab): Promise<void>`

Add the default tab actions for the specific file tab

**Function Signature:** `register(definition: ITabActionConfig): IDisposable`

Register a new tab action

**Function Signature:** `registerPreview(definition: ITabPreviewConfig): Promise<IDisposable>`

Register a new tab preview

## Interfaces

`ITabActionConfig`

```typescript
interface ITabActionConfig {
	icon: string
	name: string
	trigger(tab: FileTab): Promise<void> | void
	isFor(tab: FileTab): Promise<boolean> | boolean
	isDisabled?: (tab: FileTab) => boolean
}
```

`ITabPreviewConfig`

```typescript
interface ITabPreviewConfig {
	name: string
	fileMatch: string
	createPreview(tabSystem: TabSystem, tab: FileTab): Promise<Tab | undefined>
}
```
