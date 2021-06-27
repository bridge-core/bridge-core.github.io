---
description: ''
sidebar: 'plugins'
---

# @bridge/env

Utility module that provides access to environmental project data.

## Getting the current behavior pack

**Function Signature:** `getCurrentBP(): string`

Returns the path to the current behavior pack

## Getting the current resource pack

**Function Signature:** `getCurrentRP(): string`

Returns the path to the current resource pack

## Getting the current project

**Function Signature:** `getCurrentProject(): string`

Returns the path to the current project

## Getting the project prefix

**Function Signature:** `getProjectPrefix(): Promise<string | undefined>`

Returns the prefix/namespace of the current project

## Getting the project target version

**Function Signature:** `getProjectTargetVersion(): Promise<string | undefined>`

Returns the author of the current project

## Getting the project author

**Function Signature:** `getProjectAuthor(): Promise<string | undefined>`

Returns the target minecraft version of the current project

## Get bridge's app version

**Property:** `APP_VERSION: string`

Gets the current version for bridge.
