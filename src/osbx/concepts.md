# OSBX Concepts

Here is the documentation about the core concepts and technical specifications of OSBX. I highly recommend following the [OSB File extension](https://github.com/S-Traut/osbx/wiki/OSB) guide to understand this page with more ease, the OSB guide is focusing on the .osb file structure to help you understand how does osu storyboards works. Consider this as a "global" tutorial page.

## Introduction to OSBX (A bit of history)

So you've installed OSBX on your computer and now you are ready to create the future great storyboard of osu! But before that, i'd like to explain you the core idea behind OSBX and its history. I've been using (storybrew)[https://github.com/Damnae/storybrew] since the beginning of my storyboarding career, it's a powerful tool to create storyboards and probably way better than osbx. I loved using it for making my projects but for me it's time to move forward and create my own tool to make storyboards.

There is 2 main reasons why I decided to create my own tool:
- On April 2021 I've entirely switched my computer Operating systems from Windows to Linux, and unfortunately, storybrew wasn't running on Linux, even with some wine configurations.
- Even with all the projects made with storybrew, I always felt like it was missing a huge thing.. The forced structure of it made the creation of bigger projects very difficult to maintain, and the collaboration with other people can become quickly very messy and not comfortable to work with. As an example, Alexithymia, the project made with tochi was a real challenge to maintain and not break because all the code involved and not properly structured.

With these 2 ideas in mind, my objective was fixed. My requirements are a tool that can run on every platforms and that is focusing his conception on collaboration. Which unlocked a third point, that I've discussed with Asperatus(Zerss) for a while. Creating a sort of "package" thing to share scripts for osbx, that could work like npm, allowing people to publish their modules with others, and also download modules made by the community. I believe in this idea because it brings up great links between a community.

Enough of "blablabla" let's now jump into the core of osbx.

## Global structure

![](https://i.imgur.com/wqpc58E.png)

Here is the main pattern behind osbx generation system. The generator is what you use in the storyboard.ts file, it simply takes a group of components, and render them in the .osb file. A component is just something that store all the sprites data that comes from the plugins.

> Why this specific structure?

This structure as been made with the collaboration in mind and a way to have sort of "extensibility" for storyboard projects, as an example, you can code a background effect in a plugin, and then use in in any component you want in the future, and a component can be simply a section of the map. So if you create a Background effect, you can add it to the Introduction, but also in the Main lead of the song without any problems.
And for the collaborative side, you can for example, code your plugin on your side, then merge it with your mate that developed another plugin into your common components.

## Components

## Plugins