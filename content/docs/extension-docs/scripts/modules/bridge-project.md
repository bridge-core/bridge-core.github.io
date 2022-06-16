---
description: ''
sidebar: 'extensions'
---

# @bridge/project

Module that allows access to specific functions releated to the current project.

## Functions

### compile

▸ **compile**(`configFile`): `Promise`<`void`\>

Force compilation of the project using the specified compiler config.

#### Parameters

| Name         | Type     | Description                                                                                                                |
| :----------- | :------- | :------------------------------------------------------------------------------------------------------------------------- |
| `configFile` | `string` | The name of the compiler config to compiler with. The config should be in the "<projectName>/.bridge/compiler/" directory. |

#### Returns

`Promise`<`void`\>

---

### compileFiles

▸ **compileFiles**(`paths`): `Promise`<`void`\>

Force the compilation of specified files.

#### Parameters

| Name    | Type       | Description                                                      |
| :------ | :--------- | :--------------------------------------------------------------- |
| `paths` | `string`[] | The paths of the files to compile, relative to the project root. |

#### Returns

`Promise`<`void`\>

---

### hasPack

▸ **hasPack**(`packs`): `boolean`

Check whether the current project contains the specified packs.

#### Parameters

| Name    | Type                                      | Description                |
| :------ | :---------------------------------------- | :------------------------- |
| `packs` | [`PackTypeId`](../README.md#packtypeid)[] | The pack ids to check for. |

#### Returns

`boolean`

---

### registerExporter

▸ **registerExporter**(`exporter`): `void`

Register a pack exporter to be used to export the project.

#### Parameters

| Name       | Type                                      | Description                          |
| :--------- | :---------------------------------------- | :----------------------------------- |
| `exporter` | [`IExporter`](../interfaces/iexporter.md) | The exporter definition to register. |

#### Returns

`void`

---

### unlinkFile

▸ **unlinkFile**(`path`): `Promise`<`void`\>

Remove a file from the fileSystem, compiler and packIndexer.

#### Parameters

| Name   | Type     | Description                     |
| :----- | :------- | :------------------------------ |
| `path` | `string` | The path to the file to unlink. |

#### Returns

`Promise`<`void`\>

---

### onProjectChanged

▸ **onProjectChanged**(`cb`): `IDisposable`

Get notified when the current project changes.

#### Parameters

| Name | Type                                | Description                                   |
| :--- | :---------------------------------- | :-------------------------------------------- |
| `cb` | (`projectName`: `string`) => `void` | The function to call when the project changes |

#### Returns

`IDisposable`
