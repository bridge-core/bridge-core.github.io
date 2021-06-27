---
description: ''
sidebar: 'plugins'
---

# @bridge/tab

Module that allows access to bridge.'s tab system

## Regsiter a tab

**Function Signature:** `register(FileTabClass: typeof FileTab): IDisposable`

Register new FileTabs to be picked up by the isTabFor tab system method

## Open a tab

**Function Signature:** `openTab(FileTabClass: typeof Tab, splitScreen: boolean): Promise<any>`

Useful for ContentTabs: Programmatically add the tab to the tab system

## Create tabs

**Class:** [`FileTab`](https://github.com/bridge-core/editor/blob/main/src/components/TabSystem/FileTab.ts)

**Class:** [`ContentTab`](https://github.com/bridge-core/editor/blob/main/src/components/TabSystem/CommonTab.ts)
