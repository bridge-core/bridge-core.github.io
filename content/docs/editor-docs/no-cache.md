---
description: 'Find out how to stop bridge. from caching certain file types using the .no-cache file.'
sidebar: 'editor'
author: 'joelant05'
next: '/editor-docs/other/molang/'
---

# No Cache File

bridge's cache system means files edited with an external editor will require you to increment the file version in the comment at the top of the file before your changes show in bridge.

The .no-cache file can be used list file types that shouldn't be cached by bridge. and therefore you won't need to increment the file version when editing with an external editor.

## Creating the file

The file should be in the root of your behavior pack and the file name should be **`.no-cache`**

## Editing the file

To stop a file type from being cached you need to write the file type into the file with each different file type on a new line.

[File type ids](/plugin-docs/other/default-file-types/)

### Example

```
entity
functions
rp_animation_controller
```
