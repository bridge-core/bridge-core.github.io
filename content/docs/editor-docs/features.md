---
description: "An overview of bridge.'s most notable features."
sidebar: 'editor'
author: 'joelant05'
---

# Feature Overview

## Projects

-   Create behavior packs, resource packs, skin packs and world templates quickly. bridge. creates all of the files necessary for these packs to show up in Minecraft.
-   Drag your com.mojang folder over bridge. v2 to enable com.mojang folder syncing so that your "dev" compiler output writes straight into the com.mojang folder for quick updates to your packs. **Keep in mind, any edits should be made in your project folder. Any edits made directly in the com.mojang folder will be overwritten!**
-   Our new project directory structure allows you to have all of your packs neatly together in one project folder for better GitHub integration and to allow for external compilation processes.

## Tree Editor

-   The tree editor is ideal for beginners as you cannot make JSON syntax errors.
-   Rich auto-completions to guide you through every file type.
-   Insert snippets into your file by selecting them from the provided auto-completions where applicable.
-   Colorful syntax highlighting and optional bracket pair colorization.
-   Cut, Copy, Paste, Undo, Redo and all other features you would expect.

## Text Editor

-   Advanced file validation to warn you if you are writing with the incorrect syntax.
-   Find and replace to search the current file.
-   Rich auto-completions to guide you through every file type.
-   Insert snippets into your file by selecting them from the provided auto-completions where applicable.
-   Colorful syntax highlighting and optional bracket pair colorization.
-   Cut, Copy, Paste, Undo, Redo and all other basic editing features you would expect.
-   Go To Definition to quickly jump between connected files.
-   Uses Monaco under the hood to provide the same incredible editing experience as VS Code.

## Auto-completions

-   Develop within the constraints of your project: auto-completions and file validation changes with your format versions and experimental gameplay options set in your project config.
-   Rich, hand-crafted auto-completions with integrated documentation.
-   Support for all file types that Minecraft supports including entity, function and blocks.
-   Dynamic auto-completions for identifiers, events, component groups and more, across all files.

## Global Find and Replace

-   Search for text across all files in your project and replace it.
-   Filter your search results by including/excluding specific file paths or with glob patterns.
-   Search for text across all files with Regular Expressions.

## Extensions

-   The extension store allows anyone to download extensions from a wide variety of developers each adding something different to bridge.
-   Extensions can add new tab types, themes, presets, custom components and more!
-   Develop your own custom addon syntax with compiler plugins to make repetitive task so much easier.
-   Learn more about extensions [here](/extension-docs/).

Some fantasic new extensions available on the extension store include:

-   **TextureList** - Automatically generates the texture_list.json file for production builds.
-   **Compact Prettier** - Changes the default "format on save" formatter to produce a more compact output.
-   **TextureSetJsonGenerator** - Adds a new comprehensive UI to create texture set RTX files.
-   **WorldHub** - Allows you to move worlds from your com.mojang folder to your project folder and back.
-   **ItemEquippedSensor** - Adds a custom item component to make it easy to run events and commands when an item is equipped to a specified item slot.
-   And much, much more!

## Settings

-   Configure which editor type you use.
-   Modify the appearance of bridge. with themes! We include a small variety of dark and light themes by default with many more to download from the extension store.
-   Configure the sidebarb width and the size of the icons to fit your preferences on screen space.
-   bridge. is supported in various languages with complete support in English and Japanese, as well as partial support for other languages, thanks to some of our amazing contributors!

## Pack Explorer

-   See your pack files in a compact, color coded file explorer in the sidebar.
-   Switch between each pack type that your project has in one click.
-   Context menu actions when right-clicking files and folders such as "Create Folder", "Create File" and "Find in Folder".
-   The "More" button at the top of the pack explorer allows you to access various export options for your pack, open the project config and more.

## File Creation

-   Quickly create all files necessary to get a feature working in game.
-   Perfect for quickly setting up a new entity, block or item.
-   Simply input the file name and/or other details that the preset asks for, such as the template to use or a texture and model to use on an entity.
-   Search bar to quickly search for which preset you want to create.

## Compiler

-   Compilation is triggered upon saving a file or forcing a production compilation in the sidebar.
-   The compiler can be extended with compiler plugins to add new addon syntax to your project.

The compiler has two modes: "dev" and "build".

-   The "dev" output is in the "builds/dev" folder of your project or the appropriate development folders in your com.mojang folder if linked. It re-compiles upon saving a file or selecting the "Restart Dev Server" option in the "More" menu on the pack explorer sidebar area.
-   The "build" output is in the "builds/dist" folder and is only triggered when your select the compile option in the sidebar.
-   The output between these types may vary, if a specific compiler plugin produces a different output for each.

## Live Previews

-   Preview files while you edit them with instant reloading to reflect the changes you make in the file.
-   Preview entity, block, particle files and more.
-   Entity previews can help you find the perfect seat positions and collison hit boxes without needing to launch Minecraft.
