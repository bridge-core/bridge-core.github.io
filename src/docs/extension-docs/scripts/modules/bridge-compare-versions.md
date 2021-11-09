---
description: ''
sidebar: 'extensions'
---

# @bridge/compare-versions

## Functions

### compare

▸ **compare**(`firstVersion`, `secondVersion`, `operator`): `boolean`

Compare [semver](https://semver.org/) version strings using the specified operator.

**`example`**
```js
compareVersions.compare('10.1.8', '10.0.4', '>'); // return true
compareVersions.compare('10.0.1', '10.0.1', '='); // return true
compareVersions.compare('10.1.1', '10.2.2', '<'); // return true
compareVersions.compare('10.1.1', '10.2.2', '<='); // return true
compareVersions.compare('10.1.1', '10.2.2', '>='); // return false
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `firstVersion` | `string` | First version to compare |
| `secondVersion` | `string` | Second version to compare |
| `operator` | ``">"`` \| ``">="`` \| ``"="`` \| ``"<"`` \| ``"<="`` | Allowed arithmetic operator to use |

#### Returns

`boolean`

`true` if the comparison between the firstVersion and the secondVersion satisfies the operator, `false` otherwise.
