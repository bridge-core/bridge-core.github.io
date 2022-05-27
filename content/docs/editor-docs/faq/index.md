---
description: 'Find answers for frequently asked questions on addons and bridge.'
sidebar: 'editor'
author: '7dev7urandom'
---

# FAQ

There are many questions that are asked frequently within the bridge. Discord, and this document goes through them.

## How do I use custom commands in game?

You can’t; bridge. custom commands are used only inside of the editor (functions, items, animations, animation controllers, entities) as they are compiled into normal
commands.

## After editing an animation in bridge., it stopped working. Why?

This is a known issue that has to do with how bridge. handles arrays and objects. The automatic type detection fails where there is ambiguity between objects and
animations and both options are valid. Solution: Do not edit animations from Blockbench with bridge.; manually fix broken animations with a text editor.

This is not an issue in bridge. v2.

## Something isn’t behaving properly with bridge. What should I do?

Please verify your bridge. version is the latest, and then report it in **#bugs** (within the bridge. Discord, specifying the version, the problem, and what you were
doing when the problem occured). We will get back to you as soon as we can. In case you have a GitHub account, it is preferred that you open an issue here:
https://github.com/bridge-core/bridge./issues/new/choose

## Something is wrong with the bridge. auto completions.

Follow the same steps as reporting improper bridge. behavior.

## How do I uninstall global plugins?

You can open the folder where global plugins are stored by pressing the 'Help' action in the toolbar and pressing the 'Open Global Plugins Folder' option. Then you can delete the folders inside the 'plugins' folder to remove plugins.

## My entity exists in game, but is invisible.

This could be caused by many different things, such as a mistake in your render controller, a problem referecing your geometry or incorrectly defining the texture path. For more in depth help with this, check out [this entity troubleshooting guide](https://wiki.bedrock.dev/knowledge/troubleshooting.html).

## My addon isn’t working. Why?

There are lots of reasons an addon might not work. Before you ask in an addon help channel within the bridge. Discord, please turn on content logs and review any errors.

## How do I turn on content logs?

In the _Minecraft_ settings under the Creator section, there are two settings: ”Enable Content Log GUI” and “Enable Content Log File.” We recommend turning both on while
testing.

![Enable 1.17 Content Logs](./creator.png)

## How do I make a scripting GUI?

There are currently no tutorials for this, but Mojang has released an example pack using a GUI. You can get the pack here: [https://aka.ms/minecraftscripting_turnbased](https://aka.ms/minecraftscripting_turnbased)

## Is there a tutorial for…?

You can check #addon-guides in the bridge. Discord. If there isn’t one there, the documentation ([https://bedrock.dev](https://bedrock.dev)) might help. If you still need help, ask in an
available #addon-help channel.

## Do I need experimental gameplay for…?

As of 1.16.0, the following things require experimental gameplay:

-   Biomes
-   Features
-   Feature rules
-   Scripts

## My entity's texture is black where there should be transparency.

This is caused when you're using a material that doesn't support transparency.
`skeleton` and `entity_alphatest` both support transparency and can be used when you have this issue.

## What is the difference between bridge. and bridge. v2?

bridge. is a native program, while bridge. v2 is an installable web app (PWA) currently available for Chrome (Desktop) and Microsoft Edge. bridge. v2 offers a variety of improvements, including a raw JSON editor, new user interface, skin pack support, a new compiler architecture instead of a cache system, and more. bridge. v2 already has support for a growing number of extensions, furthermore most recently-published extensions are currently only available for bridge. v2.

## Is bridge. available for mobile devices?

Yes, [bridge. v2](https://editor.bridge-core.app) is avaliable for mobile devices. However you will need to download your project in order to save your progress, because bridge. v2 requires an API that mobile browsers don't support.
