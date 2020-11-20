---
description: ''
sidebar: 'plugins'
---

# @bridge/notification

Module that allows plugins to create notifications.

## Creating a generic notification

**Function Signature:** `create(config: INotificationConfig): INotification`

```typescript
interface INotificationConfig {
	icon?: string
	message?: string
	color?: string
	textColor?: string
	disposeOnMiddleClick?: boolean
	onClick?: () => void
	onMiddleClick?: () => void
}
```

## Creating an error notification

**Function Signature:** `createError(error: Error)`

### Example

```typescript
const { createError } = await require('@bridge/notification')

createError(new Error(`Oops, something went wrong :(`))

try {
	const t = 0
	t = 2 //Throws error
} catch (error) {
	createError(error)
}
```
