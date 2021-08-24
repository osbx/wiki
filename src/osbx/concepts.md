# osbx concepts

Here is the documentation about the core concepts and technical specifications
of osbx. I highly recommend following the [.osb file
format](https://wiki.osbx.org/storyboard/) guide to understand this page with
more ease, the osb guide is focusing on the .osb file format to help you
understand how does osu storyboards works. Consider this as a "global" tutorial
page.

Once you're comfortable with the .osb file format, you can get started on your
osbx journey.

## Introduction to osbx (A bit of history)

So, you just installed osbx on your computer and now you are ready to create
the next revolutionary storyboard osu! has ever seen? Before that, I'd like to
explain you the core idea behind osbx and its history. I've been personally
using [storybrew](https://github.com/Damnae/storybrew) since the beginning of
my storyboarding career, it's a powerful tool to create storyboards and
probably better than osbx at its current state. I loved using it for making my
projects, but for me it's time to move forward and create my own tool to
generate storyboards.

There is 2 main reasons why I decided to create my own tool:
- On April 2021 I've entirely switched my computer Operating systems from
  Windows to Linux, and unfortunately, storybrew cannot running on Linux, even
  with Wine.
- Despite all of the great projects made with storybrew, I always felt like it
  was missing a huge thing: the forced structure of it made the creation of
  bigger projects very difficult to maintain, and the collaboration with other
  people can become quickly very messy and not comfortable to work with. As an
  example, Alexithymia, the project I made with -Tochi was a real challenge to
  maintain and not break because all the code involved and not properly
  structured.

With these 2 ideas in mind, my objective was fixed. My requirements are a tool
that can run on every platforms and that is focusing his conception on
collaboration and scalability. Which unlocked a third point that I have
discussed with Asperatus (Zerss) for a while: creating a package manager to
share scripts for osbx, that could work like npm, allowing people to publish
their modules with others, and also download modules made by the community. I
believe in this idea because it brings up great links between the community.

Enough of chit chat, let's now jump into the core of osbx.

## Global structure

Here is the main pattern behind osbx's generation system. The generator is what
you use in the storyboard.ts file, it simply takes a group of components, and
render them in the .osb file. A component is just something that store all the
sprites data that comes from the plugins.

<center>
<img src="https://cdn.discordapp.com/attachments/414542714365935626/879818150508634152/unknown.png" />
</center>

> Why this specific structure?

This structure as been made with the idea of collaboration in mind and a way to
have sort of "extensibility" for storyboard projects, for instance, you can
program a background effect in a plugin, and then use in in any component you
want in the future, and a component can be simply a section of the map. So if
you create a Background effect, you can add it to the Introduction, but also in
the Main lead of the song without any problems.

And for the collaborative side, you can for example, code your plugin on your
side, then merge it with your mate that developed another plugin into your
common components. Since the storyboard is splitted into different parts, there
can't be conflicts while merging your project with your collaborator's.

## Components

WIP

## Plugins

WIP
