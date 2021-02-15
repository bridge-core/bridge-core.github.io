---
description: ''
sidebar: 'plugins'
---

# @bridge/compare-versions

Module that allows plugins to easily compare versions.

## NPM Module

This module exposes the `compare` function from npm's `compare-versions` module. You can read its documentation [here](https://www.npmjs.com/package/compare-versions#human-readable-compare).

### Usage

```typescript
const { compare } = await require('@bridge/compare-versions')

const isPrevVersion = compare('v1.7.15', 'v1.7.14', '<')
```
