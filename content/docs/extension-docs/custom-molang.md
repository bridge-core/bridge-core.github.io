---
description: ''
sidebar: 'extensions'
---

# Custom MoLang

Custom MoLang allows you to write MoLang functions that can be used across an entire project wherever MoLang is valid.

## Creating

To get started, open the preset window and select the `Molang` tab, enter the file name and click "Create". Outside of bridge., you can create a `.molang` file in the `BP/molang` directory.

Inside of this file, you can define functions like this:

```
function('sq', 'base', {
    return math.pow(arg.base, 3);
});
```

This first argument of `function()` should be the function name and any other arguments are function arguments which can be accessing within the function with `arg.<argName>`.

## Using

Using custom MoLang functions is as simple as writing `f.funcName('arg1', 'arg2')` where MoLang is valid. This example would then replace the function with `arg1` and `arg2` input into the `funcName` function.
