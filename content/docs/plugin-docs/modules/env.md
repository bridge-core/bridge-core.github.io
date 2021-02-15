---
description: ''
sidebar: 'plugins'
---

# @bridge/env

Utility module that provides access to environmental project data.

## Getting the current behavior pack

**Function Signature:** `getCurrentBP(): string`

Returns the absolute path to the current behavior pack

## Getting the current resource pack

**Function Signature:** `getCurrentRP(): string`

Returns the absolute path to the current resource pack

## Getting the project prefix

**Function Signature:** `getProjectPrefix(): string`

Returns the prefix/namespace of the current project

## Getting the project target version

**Function Signature:** `getProjectTargetVersion(): string`

Returns the target minecraft version of the current project

## Getting additional context

**Function Signature:** `getContext(): string`

Returns data that depends on the context you call the method in

### Custom component

Using this `getContext()` hook inside of a custom component's `onApply(...)` method returns the following data:

```typescript
interface IComponentContext {
	location: string
	entityIdentifier: string
	formatVersion?: string
}
```
