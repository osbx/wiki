# Storyboarding in general

## Advanced storyboard techniques
---

In this chapter I'll go a bit deeper into the osb file structure by presenting
you the "hidden" advanced techniques of storyboarding which can be really
helpful improving your projects and make them more enjoyable to watch.

I'm gonna first explain your the concepts of **Easings**, **Animations**,
**Additive** and **Loops** which are four pillars of the advanced storyboarding
world.

### Easings
---

Before jumping into that subject, I highly recommend you watching this video
explaining the concept of easing.

<iframe width="100%" height="425"
src="https://www.youtube.com/embed/AlXEzbhfZJM" title="YouTube video player"
frameborder="0" allow="accelerometer; autoplay; clipboard-write;
encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Pretty cool right? So what we are learning in that video is that linear
movements doesn't feel natural and does not offer a proper emphasis to our
animations, luckily, osu! implements all of the common easings to
storyboarding! This means you can apply the general easings to a specific
parameter: this is what the first value of a sprite parameter does. Don't
remember which one?

```
M,0,0,1000,320,240,300,240
  Ʌ
  ╰─ This one!
```

So if we change that `0` value, to the value of the easing needed, this gonna
change the animation Tween method from linear to whatever easing you want. Here
the list of all the easings osu uses with their ID:

```
0 - Linear: no easing
1 - Easing Out: the changes happen fast at first, but then slow down toward the end
2 - Easing In: the changes happen slowly at first, but then speed up toward the end
3 - Quad In
4 - Quad Out
5 - Quad In/Out
6 - Cubic In
7 - Cubic Out
8 - Cubic In/Out
9 - Quart In
10 - Quart Out
11 - Quart In/Out
12 - Quint In
13 - Quint Out
14 - Quint In/Out
15 - Sine In
16 - Sine Out
17 - Sine In/Out
18 - Expo In
19 - Expo Out
20 - Expo In/Out
21 - Circ In
22 - Circ Out
23 - Circ In/Out
24 - Elastic In
25 - Elastic Out
26 - ElasticHalf Out
27 - ElasticQuarter Out
28 - Elastic In/Out
29 - Back In
30 - Back Out
31 - Back In/Out
32 - Bounce In
33 - Bounce Out
34 - Bounce In/Out
```
*Source: osu!wiki*

I recommend you trying out every value to see how it affects a sprite animation
process, if you also want to visualize every easings more easily before using
them, you can refer to that great website [easings.net](https://easings.net)
which list every easings an how they affect the intepolation of an object.

Using easings will make your storyboard looks smoother and more appealing, but
be careful, easings are also needed to be used properly. What I mean is that a
bad combination of easings can decrease the visual quality of a map, so be
careful to choose wisely your easings! Here's few good examples I made myself:

<center>
<img src="https://cdn.discordapp.com/attachments/657117578464067619/657118638553169921/XcYJKl2.gif"/>
<img src="https://media.giphy.com/media/jL7gdTzqhCha29joJv/giphy.gif"/>
<img src="https://cdn.discordapp.com/attachments/657117578464067619/657118639983558656/yAinGS0-2.gif"/>
<img src="https://cdn.discordapp.com/attachments/657117578464067619/657118634472374297/dB4ahM6.gif"/>
</center>

In these examples, I've used different easings, and even used multiples for some
of these. So what are you waiting for to implement these really cool things into
your next storyboard? :)

### Animations
---

Let's get back into sprite management process, I've probably told you in my
last chapter, that there are two types of objects storyboards can handle. The
first one is the basic sprite object which is just a static image rendered. The
second one is the **Animation** object. It's a series of sprites combined
together to make a single animation sprite that shows every sprites with some
delay between them. It kinda works like a gif.

This is not really complicated to setup, but osu! doesn't really explain it
properly so here's my take on it. Grab one of your favourite gif, load it to
that website: [ezgifs.com/split](https://ezgif.com/split). Once there, you can
split up your gif into multiple images, I recommend you using a short gif for
that tutorial, it's gonna be easier to manage (10-15 sprites is fine). Once
you've downloaded all of the images, put them in a new folder of your beatmap.
Something like **sb/animation** is good. Finally rename every sprite with a
common name that end with a number at the end, your folder might look like
that:

```
sb/animation/my_sprite0.jpg
sb/animation/my_sprite1.jpg
sb/animation/my_sprite2.jpg
sb/animation/my_sprite3.jpg
...
sb/animation/my_sprite15.jpg
```

If you then, open up your editor and try to add a new sprite from the library,
you should see your animation running directly into the library, click on it to
import it, add 2 movements keyframes to make it appear long enough, and there
you go, your gif is now running on osu! cool right? If you want to tweak the
speed playing time of your animation, you have to change the .osb file line of
the animation to fit your needs

```ts
[ Animation | Foreground | Centre | "sb\animation\s.jpg" | 320 | 240 |        8         |            78            | LoopForever ]
[    Type   |    Layer   | Origin |         Path         |  x  |  y  | number_of_images | delay_between_images[ms] |  loop_type  ]
```

Of course, animations objects inherits from a Sprite, so you can use the same
parameters for an Animation that you would use for a sprite, think of it, it's
just a Sprite, that is animated. Nothing else.

### Additive rendering
---

An advanced concept which can be kind of daunting to understand is the layer
blending. osu! works with 2 layer blending techniques methods, the basic
rendering process, simply take the nearest sprite and render it pixels, and
nothing else, so if you place a sprite in front of another it's gonna simply
show it on top of it without changing anything to these 2 sprites. But what the
**additive blend mode** does is that it kind of make an "addition" each white
values pixel color.

Here is an application of that concept in a storyboard:

<center>
<img src="https://media1.giphy.com/media/C9QuyaLQxMd52aLIM1/giphy.gif" />
</center>

You can notice that the light looks very bright and sort of "blend" the images
together to give a sort of halo effect. The additive blending mode can be
really useful to achieve a proper blend of your sprites. It can be also used to
remove the black pixels of a jpg image. Because in additive black pixels are
transparent. If you are more interested in that technique, I recommend you
reading this [wikipedia article](https://en.wikipedia.org/wiki/Additive_color)
about how the additive color work.

### Loops
---

Last but not least, and probably the more complex is the OsbLoop. A way to make
some parameters repeat over a time duration, this is a difficult concept to
understand because it can be missleading.

> Do not think that an OsbLoop allows you to generate lot of sprites and
> complex things because it is not really what you think.

is what I would said to anyone being introduced to osb loops, because what it
just does is repeating a specific pool of parameters for a **given** sprite.
Take for example a quick blink effect for an image, you want it to make it
quickly apear and disapear each 100 milliseconds. Here a visualization of the
effect:

```
Fade from 1 to 0 at 0ms to 100ms
Fade from 1 to 0 at 100ms to 200ms
Fade from 1 to 0 at 200ms to 300ms
Fade from 1 to 0 at 300ms to 400ms
...
```

In an osb file this would look like that:

```ts
Sprite,Background,Centre,"sprite.jpg",320,240
_F,0,0,100,1,0
_F,0,100,200,1,0
_F,0,200,300,1,0
_F,0,300,400,1,0
... etc
```

This might be perfectly fine, it's just a bunch of copy/paste and there you go.
But it's not, for multiple reasons, first, imagine that you want to do 100
blinks. Are you really gonna copy paste 100 lines of code to achieve what you
want?

This is where OsbLoop take place, it allow you in few lines of code to repeat
actions for a sprite. Think of the process like that:

```
Create my sprite,
 Create a loop and repeat it 100 times
  In that loop Fade from 0 to 100 ms
```

So we're gonna condense 100 lines into only 2, which is pretty insane right?
Let's test this out, here's the implementation on a storyboard of what we said
earlier:

```ts
[Events]
//Background and Video events
//Storyboard Layer 0 (Background)
//Storyboard Layer 1 (Fail)
//Storyboard Layer 2 (Pass)
//Storyboard Layer 3 (Foreground)
Sprite,Foreground,Centre,"bg.jpg",320,240
 L,0,100
  F,0,0,100,1,0
//Storyboard Layer 4 (Overlay)
//Storyboard Sound Samples
```

We create a simple sprite object, then give it the L parameter which is a Loop,
the first value of it is the "Start Time" and the second one is the number of
time it gonna repeat. So our loop is starting at 0ms of the beatmap and loop
100 times

The second line is just a `Fade` parameter, but here it becomes kinda
complicated. The start and end value are 0 and 100, why? That is because **any
parameters** in a loop, their start time depends on the **loop's start time**
so if our Loop start at 112214ms, any 0 value of a parameter inside it gonna be
112214 exactly. And the second thing to understand is that a `Loop` will make
another iteration at the time of every parameters inside it is **Done**

So if our Loop start at 112214ms, and the fade inside it end at 1000ms, it will
means that the Fade will happen from 112214 to 113214, and THEN repeat from
113214 to 114214 etc etc... until the loop count is reached. I can understand
that this topic can be mindblowing at a first time, but don't worry just do
some tests and you'll easily understand those.

---

This closes our complete overview of the storyboarding concepts, I hope I've
been clear enough to make your understand all the possibilities of
storyboarding, if you have any questions about it, do not hesitate to ask me on
discord, or just write a post in the Storyboarding subforum of osu!. I'm
always happy to help new people getting used to storyboarding!

In the next chapter I'm gonna talk about optimizations techniques, which are
also an important topic in storyboarding.
