---
description: ''
sidebar: 'plugins'
---

# @bridge/fetch-definition

Grants access to the lightning cache database.

## Fetching lightning cache data

**Function Signature:**
`fetchDefinition(fileType: string, fetchDefs: string[], fetchSearch: string, fetchAll = false): Promise<string[]>`

Search through the definitions `fetchDefs` in `fileType` files for `fetchSearch`. Available definitions can be found by browsing the lightning cache files [here](plugin-docs/json/lightning-cache/). Valid built-in file types are listed [here](/plugin-docs/other/default-file-types/).

### Example:

```json
[{ "key": "ids", "path": "animations" }]
```

(From the animation.json file)

Here you could search for animation identifiers by using the `fetchDefs` argument `["ids"]`:

```javascript
const { fetchDefinition } = await require('@bridge/fetch-definition')

const walkAnimations = await fetchDefinition(
	'animation',
	['ids'],
	'animation.walk',
	false
)

// With fetchAll=false you still get a string[] even though it only has one entry
// => Consistency
const walkAnimation = walkAnimations[0]
```
