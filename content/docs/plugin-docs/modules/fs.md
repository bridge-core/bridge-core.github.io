---
description: ''
sidebar: 'plugins'
---

<!--
TODO:
- Descriptions
-->

# @bridge/fs

Module that allows plugins to interact with the user's file system.

## Functions

### Reading

**Function Signature:** `readdir(path: string, config?: { withFileTypes?: false }): Promise<string[]> | Promise<FileSystemHandle[]>`

**Function Signature:** `readFilesFromDir(path: string, dirHandle: FileSystemDirectoryHandle | Promise<FileSystemDirectoryHandle>): Promise<{name: string;path: string;kind: string;}[]>`

**Function Signature:** `readFile(path: string): Promise<File>`

**Function Signature:** `readJSON(path: string): Promise<any>`

### Writing

**Function Signature:** `mkdir(path: string, { recursive }: Partial<IMkdirConfig> = {}): Promise<void>`

**Function Signature:** `writeFile(path: string, data: FileSystemWriteChunkType): Promise<FileSystemFileHandle>`

**Function Signature:** `write(fileHandle: FileSystemFileHandle, data: FileSystemWriteChunkType): Promise<void>`

**Function Signature:** `writeJSON(path: string, data: any, beautify: boolean): Promise<FileSystemFileHandle>`

**Function Signature:** `copyFile(originPath: string, destPath: string): Promise<FileSystemFileHandle>`

**Function Signature:** `copyFileHandle(originHandle: FileSystemFileHandle, destHandle: FileSystemFileHandle): Promise<FileSystemFileHandle>`

**Function Signature:** `copyFolder(originPath: string, destPath: string): Promise<void>`

**Function Signature:** `copyFolderByHandle(originHandle: FileSystemDirectoryHandle, destHandle: FileSystemDirectoryHandle): Promise<void>`

### Deleting

**Function Signature:** `unlink(path: string): Promise<void>`

### Other

**Function Signature:** `setup(baseDirectory: FileSystemDirectoryHandle): void`

**Function Signature:** `getDirectoryHandle(path: string, { create, createOnce }: Partial<IGetHandleConfig> = {}): Promise<FileSystemDirectoryHandle>`

**Function Signature:** `getFileHandle(path: string, create: boolean): Promise<FileSystemFileHandle>`

**Function Signature:** `loadFileHandleAsDataUrl(fileHandle: FileSystemFileHandle): Promise<string>`

**Function Signature:** `fileExists(path: string): Promise<boolean>`

**Function Signature:** `directoryExists(path: string): Promise<boolean>`
