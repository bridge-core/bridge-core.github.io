---
description: ''
sidebar: 'plugins'
---

# @bridge/path

Module that allows plugins to interact with the user's file system.

## Functions

**Function Signature:** `dirname(p: string): string`

Return the directory name of a path.

**Function Signature:** `join(...paths: string[]): string`

Join all arguments together and normalize the resulting path. Arguments must be strings.

**Function Signature:** `extname(p: string): string`

Return the extension of the path, from the last '.' to end of string in the last portion of the path. If there is no '.' in the last portion of the path or the first character of it is '.', then it returns an empty string.

**Function Signature:** `basename(p: string, ext?: string | undefined): string`

Return the last portion of a path.

**Function Signature:** `relative(from: string, to: string): string`

Solve the relative path from {from} to {to}. At times we have two absolute paths, and we need to derive the relative path from one to the other.
