---
description: ''
sidebar: 'plugins'
---

# Common Types

## IDisposable

Objects that implement the `IDisposable` interface can be disposed by calling the `dispose()` function on them.

```typescript
interface IDisposable {
	dispose: () => void
}
```
