---
description: 'Are you looking for help to get started with bridge.? This guide aims to introduce you to the editor and make you familiar with how to use it.'
sidebar: 'editor'
author: 'joelant05'
---

# Getting Started

## Creating a project

To get started making addons with bridge. you need to create a project.

With bridge., creating a new project is easy.
You need to click the create project button to open the project creation window.

![No projects - Create project](./getting-started-1.png)

Here you can give your project a name, description and choose whether you want to register client data in the pack manifest - _this only needs to be toggled on if you're using Minecraft's scripting api in your addon._

![Create project window](./getting-started-2.png)

Once you've done that, you can click **Create!** and bridge. will set up the project files including the manifest.

You should also set the namespace for your project for better auto-completions and syntax highlighting. The option to change this is found by clicking the 'More' icon _(the three dots)_ in the top left and clicking **Project Namespace**. A window will then appear allowing you to change the project namespace.

## Creating a resource pack

Creating a resource pack in bridge. is just as easy.
On the sidebar, you will see 6 buttons - the first one shows your behavior pack and the second shows your resource pack.

To add a resource pack to your project, you need to select the resource pack on the sidebar and you will see two buttons, **Create** and **Link**

![Create resource pack](./getting-started-3.png)

**Link** will allow you to link an existing resource pack in the `development_resource_packs` folder to your project. The resource pack will then be made a dependency of your selected behavior pack.

**Create** will open a resource pack creation window where you can input a name and description for your resource pack.

![Create resource pack window](./getting-started-4.png)

Once you have done that click create and your resource pack will be created and linked to your behvaior pack.

## Creating files

bridge. supports creating **all** files that Minecraft supports.
You can create a file in your Behavior Pack and Resource pack by clicking the new file button, or double clicking the welcome screen.

![Create file button](./getting-started-5.png)

Doing this will open the new file window. Here you will see a sidebar in the window which lets you select from all of the possible files you can create.

_Remember you can scroll down the sidebar to see more file types you can create!_

![Create File Window](./getting-started-6.png)

Once you have selected a file, you will see that you need to input a file name.
**Make sure you keep all file names and identifiers in `snake_case`, with no capital letters and underscores replacing spaces!**

For most file types, you will also see a dropdown to select a template to work from. It is recommended that you select a template because it will make creating your file easier.
Once you have done that, click **Create!** and your file will be created, placed in the correct folder and opened.

## Editing files

### JSON

When you open a JSON file with bridge., you will see the file displayed as an expandable tree, where you can drag nodes to reorder them and left clicking a node will select it. While a node is selected, you can use the 3 input boxes at the bottom.

![JSON Editor](./getting-started-7.png)

The input on the left will let you add a JSON object to the selected node.
The input in the middle will let you add a value to the selected node.
The input on the right will let you edit the currently selected node.

When you right click on a node it will open the hover card, where you can cut, copy, paste, delete and open the documentaion for the curently selected node.

![Hover Card](./getting-started-8.png)

_There is currently a work in progress, updated JSON renderer which will feature a new, fresh way to edit JSON files!_

### Other file types

bridge. also supports opening and editing other file types, including:

### .mcfunction

![Mcfunction](./getting-started-9.png)

### .js

![Javascript](./getting-started-10.png)

### .lang

LANG files are what give your entities, items, etc. proper names.

![Language](./getting-started-17.png)

## Unique editing features

bridge. includes tools that will make your developing experience quicker and easier!

### Presets

Presets are a feature that lets you create a whole entity, block, item and much more, by entering an identifier and clicking **Create!** bridge. will then add all the files you need for whatever you select and it will use the identifier you entered inside the created files.

![Tools > Preset](./getting-started-11.png)

![Preset Window](./getting-started-12.png)

### Snippets

Snippets can be used by pressing `ctrl + q` while you have a JSON file open. Snippets allow you to quickly insert JSON into a file. bridge. has snippets for entity behavior files, but more can be added with plugin or you can create your own by going to the toolbar and clicking **File > Preferences > Settings** Then you can select the Snippets tab in the window's sidebar and click the plus icon under Custom Snippets.

![Settings > Snippets](./getting-started-13.png)

![Snippet Window](./getting-started-14.png)

### Custom syntax

bridge. has custom syntax in JSON files that allow you to make complex features quickly.
An example of custom syntax is the `bridge:item_equipped_sensor` component which can be found in item behavior files. This component allows you to easily execute commands when you hold the item, trigger events when you equip/unequip the item and have components active on the player while holding/not holding the item.

![bridge:item_equipped_sensor](./getting-started-15.png)

## Customizing bridge.

bridge. features a plugin api which allows you to customize UI add new snippets, presets, themes and much more!

You can either [create your own plugins](/plugin-docs/) or download plugins made by others from the extension store.
This can be found by clicking the extensions tab on the sidebar and the pressing **View Extensions**. From here you can download from a collection of plugins to modify your experience with bridge.

![Open extension store](./getting-started-16.png)

bridge. also has a powerful feature for experienced users that allows you to write Javascript to create your own [Custom Components](/plugin-docs/custom-components/), which can be used in entity behavior files to quickly re-use behaviors and [Custom Commands](/plugin-docs/custom-commands/), which can be used inside .mcfunction files to make writing long and complex functions easier.

## Need Help?

-   Join the [Official bridge. Discord server](https://discord.gg/jj2PmqU)!
-   Check out the [Unofficial Minecraft Bedrock documentation](https://bedrock.dev)
-   Read the [Minecraft Bedrock Beginners Guide](https://guide.bedrock.dev)
-   Learn more about creating addons in the [Unofficial Bedrock Wiki](https://wiki.bedrock.dev)

More useful links can be found [here](https://wiki.bedrock.dev/knowledge/useful-links.html).
