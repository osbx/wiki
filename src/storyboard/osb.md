# STORYBOARDING IN GENERAL

<iframe width="100%" height="425" src="https://www.youtube.com/embed/EJl4u-08VoI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## OSU DESIGN TAB & OSB FILE STRUCTURE
---

If you've used the beatmap editor, you've probably noticed that osu! uses a tool which is commonly called the "design tab" that can be used to create storyboards directly in your editor. This is the most known technique and probably, the easiest to create osu storyboards.. This is why I think, this is the most powerful tool to learn storyboard basics and fundamentals before jumping into more complicated frameworks such as osbx or storybrew.

Some people might think using the design tab is a bad solution to get into the vaste world of storyboarding, but i'm not totally agreed with that opinion since for "non-programmers" directly jumping into a complexe programming environment using libraries and advanced coding technique, can be a really difficult challenge. That is now said, let's get into that important chapter together!

### INTRODUCTION
---

Before getting started into the main subject of this chapter, let's dig a bit into the "back-end" structure of a storyboard. By that I mean, what exactly, is a storyboard;

A storyboard, is simply a bunch of **images** (commonly called **Sprite**) that have **parameters**, and a parameter is a given value of a **Type** at a specific **Time**. So for example we have the most basic parameter "Fade" that have a value going from 0 to 1, for example:

``at 1000ms of the osu beatmap: give the value 0.6 to my sprite.``

But then.. how does the animation work? Pretty simple, in storyboarding you never like, asign a values using more than 2 keyframes. Which means an animation is from a point A to a point B, there is not calcultation or whatever thing between 3 points like a bezier would be doing for an osu curved slider. It's only from **A to B**. The process that is calcultating a value between 2 points is called a **Tween**, this is a very common way to create animation in general, in after effect, or many game User interfaces. So how does the tweening process work?

```
[Value 1]                   [Value 2]
[Time  1] ---- [TWEEN] ---- [Time  2]
[       ]                   [       ]
```

A tween then is just something that is behing calculated automatically **between** 2 values.

We can asign few different types of parameters to a sprite, every of them are literally easy to understand, except for the "Vecotr Scale" which is basically a scale on different axis.

![Sprite parameters](https://i.imgur.com/x97TCFe.png)

In osu a parameter is called "Transformation", but we just use the word parameters in the community because it sounds more convinient programmatically.

It's also important to note, that a tween only happen between 2 values of the same type, for example you can't tween from a Type A that is not the same than a Type B. If the first value type is a Fade, the second one has to be a Fade.

Every sprite of a storyboard is as a layer group asigned to it. Each layer group is rendered differently while playing the map. There is 2 main layer group that are rendered the same way, it's the background, and the foreground. Those 2 are the "Default" layer groups that simply render a sprite without anything else involved. The Fail and Pass group, are used to show something depending on the player performance, if he fails a section, the fail layer gonna show, otherwise, the pass will be shown. The last layer group is the Overlay, this one is kinda specific, it does work like the Foreground except, every object will be displayed on top of the osu map objects.

The order of the sprites in the layer groups is very important because this is what decide if a sprite is on top of another. The lower a sprite is in the hierarchy, the nearest it's gonna be from the user.

![Layer groups](https://i.imgur.com/szIYKMd.png)

### DESIGN TAB
---
If you ever used a tool like adobe premiere / after effect or even flash, you might find some similarities with osu built in storyboard editor. This tool will help you a lot understanding the core principes of osu! storyboarding. It uses what is called a "**timeline**" that is offering you a clear and easy to use way to assign actions to Sprites.

![Example of the design tab timeline](https://i.imgur.com/6BWgf8Y.png)

To add a new sprite into your storyboard, click on the "Sprite library" button, it'll show up a menu which contains every image file existing in your beatmap folder. You can then, pick up any sprite you want from that menu to add it into your storyboard!

![Sprite library menu](https://i.imgur.com/AxV1GLu.png)

Once added, the sprite will only be shown at the exact time you were at when you've opened the Sprite library menu. If you scroll with your mouse, you'll notice that the sprite not longer appear, it's because when you add a sprite in your storyboard, it simply create a Move parameter at the time you were at. If you save your beatmap, you'll see a .osb file appearing in the beatmap folder, this is where every data of the storyboard is stored, it works similary to a .osu file.

In that file you can see that some line are already present. The most important ones are the Sprite one and the one that is starting with a "M". You can now realize that effectively, osu have created a new Sprite, and give it the "M" parameter which is a move, that is place on the time "140580" (in my case).

That is helping us realize that the .osb file is simply.. a description script of our storyboard, everything that is in the .osb is the storyboard of our **mapset**.

```
Sprite,Foreground,Centre,"bg.png",320,240
 M,0,140580,,320,240
```

Now, if we want to animate that new Sprite freshly added, let's go back to the osu editor and see how does that work. First of all, select the sprite in the Layer group menu (when a sprite is selected you see its text in bold), then, select the "Move" transformation from the left side menu of the editor. Finally scroll a bit further from the first position of the sprite, and then, click on the "+" button located under the timeline. You'll notice a green segment being generated, this segment is what we've called "tween" just right before.

![](https://i.imgur.com/VqUXtMB.png)

> But we've placed another Move parameter, why does my Sprite doesn't do anything???

You're right! We've placed another movement keyframe, but it's not moving, because by just clicking on the "+" button, it simply add a keyframe with the same value of the previous one. Which means if our first keyframe position was (320x,240y), the new keyframe added will be exactly that same value. But don't worry, we can now change that value to make our Sprite move like we want! To do so, use the right arrow (aside of the + and - buttons) until you're placed on the last keyframe, then just click, and drag the image at the position you want. If you now scoll a bit, your Sprite should move from the first keyframe to the second one, yay!

You can of course, choose to remove the tween between two keyframes, that can be sometime usefull if you don't want osu to calculate an animation from a time A to B and simply want it to apply a parameter to your sprite at a specific time, and snap to its value without tweening from the previous value.

I invite you now, to test out each different parameters that can be used in the design tab, to understand how all of these a working. Also, be careful of always moving your Sprite with a drag while your editor state is **paused**, otherwise, the editor will place a LOT of keyframes and it can be a pain to ctrl-z them sometimes.

All of that being said, you should have an overview on how does the design tab work for the very basics. I'll talk about easings and origins in details in the next chapter, but now, let's look a bit how does the osb language work.

### OSB LANGUAGE
---

The .osb file is what the .osu file is for beatmaps, but for storyboards. It contains all the data of the **mapset** storyboard. You've been propably wondering why I'm talking about the mapset. It's because there is multiple ways to generate data for an osu storyboard. The first one, that is the most common is generating the mapset storyboard data which is ONLY stored in the .osb file of the beatmap folder. The other possibility is using the .osu file to add your storyboard data into it, this is what we call "difficulty" storyboard.

Most of the time, we're using the difficulty storyboard data to generate diff. specific storyboards (when you have sprites on osu hitobject for example). I don't recommend you using the diff. specific for now, because it may cause you some troubles and bad optimization issues (duplicated storyboard data), but it's an important concept to understand.

Let's make a quick analysis of a fresh created .osb file:

```ts
[Events]
//Background and Video events
//Storyboard Layer 0 (Background)
//Storyboard Layer 1 (Fail)
//Storyboard Layer 2 (Pass)
//Storyboard Layer 3 (Foreground)
//Storyboard Layer 4 (Overlay)
//Storyboard Sound Samples
```

Nothing crazy is happening there, an osb file simply have to define an [Events] and then you'll have few comments used for layer groups, those are automatically generated by osu. You'll notice that there is 2 more layers that we didn't discuss about early on: 

**Background & Video events**: A group that is used to handle base background information & video if there is one. Most of the time this is setup in the .osu difficulty file.

**Sound samples**: This group is used for storyboard hitound samples, because you can use hitsound in your storyboards, but I personnally don't recommend this very often for some reasons..

Enough of analysis, let's now create something! Creating a sprite and make it move only using the .osb file is a good start point to understand properly how does that work. First of all, let's open up our recent osb file from the last beatmap, it should look like that:

```ts
[Events]
//Background and Video events
//Storyboard Layer 0 (Background)
//Storyboard Layer 1 (Fail)
//Storyboard Layer 2 (Pass)
//Storyboard Layer 3 (Foreground)
Sprite,Foreground,Centre,"bg.png",320,240
 M,0,140580,,320,240
//Storyboard Layer 4 (Overlay)
//Storyboard Sound Samples
```

We can remove the M line to only have ``Sprite,Foreground,Centre,"bg.png",320,240`` under the Foreground layer group, and let's analysis that specific line. Here is how osu read that:

```ts
[Sprite | Foreground | Centre | "bg.png" |    320     |     240   ]
[ Type  | LayerGroup | Origin |   Path   | Position_X | Position_Y]
```

It's pretty easy right? Nothing really different from the design tab thing. But what osb file utily really is, is that you can specify very precise values and it avoid a lot of headaches while you are using a lot of Sprites in your storyboard. It's in my opinion easier to make something clean using the .osb file rather than using the design tab.

Ok let's try to add something to that sprite now!

```ts
Sprite,Foreground,Centre,"bg.png",320,240
_F,0,0,10000,0,1
```
*the underscore is a space character, it's just an easier way for you to read the code*

This line we've added is a Fade parameter, that you're now probably familiar with after using the design tab a bit. What we learn is that every parameters from the design tab options is usable in the .osb file naturally. What that line does then? It's simply add a Fade to our sprite that start at 0ms with a value of 0 and end at 10000ms with a value of 1. Here's how osu read that line:

```ts
[    F     |    0   |     0     |  10000  |      0     |     1   ]
[Parameter | Easing | StartTime | EndTime | StartValue | EndValue]
```

Still following? Yes I understand it might be kinda weird to understand at a first time, but don't worry, you will quickly get used to this way of creating storyboards! You can find a list of every parameters and values in the [official osu!wiki](https://osu.ppy.sh/wiki/en/Storyboard_Scripting/Commands#basic-commands) (I recommend you reading that wiki aside of this one to understand concepts).

Now, you can try to create some cool little animations using the .osb language and the osu!wiki. Before moving to the next chapter, I'll like to give you some little exercices to get used to the basics of storyboarding, you can use .osb and design tab, use what fit the most with your needs and preferences!

### EXERCICES
---

1. Generate 3 Sprites, One should move, the second one should fade out, and the last one scale down to 0, the 3 sprites have to do their actions from 0ms to 10000ms.

2. Generate a sprite, make it slowly move from bottom to top, and add a fade out to it.

3. Generate another background behind your map, make it scale properly to fit the playfield, and move slowly from the start of the map to the end. The background should also fade in at the beginning, and fade out at the end.