---
title: Create a custom CSS drum animation
published_at: 2022-11-14
description: How to create a custom CSS drum animation, like the one on the homepage of this site with only HTML & CSS
---

# Create a custom CSS drum animation

![CSS Drum animation example](/blogPosts/images/drum-animation-example.png)

## Overview

In this tutorial, we'll create a custom CSS drum animation, like the one on the homepage of this site, using HTML & CSS I would recommend using [CodePen](https://codepen.io) to follow along with this tutorial.

## Prerequisites

- Basic HTML knowledge
- Basic CSS knowledge
- Willingness to learn
- A computer with internet access

## Step 1: Create the HTML

You're going to need to create assets for the drum animation. I do graphic design and just spent a couple hours in [Inkscape](https://inkscape.org) creating the assets as SVGs. You can use whatever tools you want to create the assets, but I would recommend using SVGs as they are lightweight and play well with CSS.
You can also use more HTML & CSS to create them.

Anyway, you will need to create an html structure like the following:

```html
<div class="container">
 <div class="sticks">
  <div class="left-stick">
   <!-- the inline styles here are becuase I -->
   <!-- used the same asset for both sticks, so -->
   <!-- one of them would have been backwards -->
   <img
    class="asset"
    src="https://gutenfries.deno.dev/images/snare-animation-resources/stick.svg"
    style="transform: scaleX(-1)"
    alt="left hand stick"
   />
  </div>

  <div class="right-stick">
   <img
    class="asset"
    src="https://gutenfries.deno.dev/images/snare-animation-resources/stick.svg"
    alt="left hand stick"
   />
  </div>
 </div>
 <div class="snare-drum">
  <img
   class="asset"
   src="https://gutenfries.deno.dev/images/snare-animation-resources/snare-drum.svg"
   alt="snare drum"
  />
 </div>
</div>
```

You should have something that looks like this:

![CSS Drum animation step](/blogPosts/images/drum-animation-example-0.png)

## Step 2: Create the CSS

Now that we have the HTML to work with, let's talk about what we want to make this look like.

Our goal is to make a CSS animation to make the drum apear to play itself.

Let's create a CSS file along with our HTML and put some basic styles in it.

```css
body {
 background-color: #1f2937;
}

img {
 position: relative;
}

.container {
 padding-top: 5rem;
 width: 100%;
 height: 100%;
}

.sticks {
 display: flex;
 justify-content: center;
 align-items: center;
 z-index: 10;
}

.snare-drum {
 margin-top: 1rem;
 z-index: 20;
 justify-content: center;
 display: flex;
}

.asset {
 user-select: none;
}
```

At this point you should have something that looks similar to this:

![CSS Drum animation step](/blogPosts/images/drum-animation-example-1.png)

## Step 3: Create the animation

Now let's talk a little about how we want to animate this.

On a more basic level, we want to animate the sticks to rotate and 'hit' the drum a certain intervals.

to accomplish this, let's create some basic `@keyframes` animations.

```css
/* ... */

.left-stick {
 animation: LeftHand 5s ease-in infinite;
}

.right-stick {
 animation: RightHand 5s ease-in infinite;
}

@keyframes LeftHand {
 0% {
  transform: rotate(var(--rest-r));
 }
 50% {
  transform: rotate(30deg);
 }
 100% {
  transform: rotate(var(--rest-l));
 }
}

@keyframes RightHand {
 0% {
  transform: rotate(var(--rest-r));
 }
 50% {
  transform: rotate(-30deg);
 }
 100% {
  transform: rotate(var(--rest-l));
 }
}
```

Now we have the sticks rotating, but they are just sort of floating through the drum.
In order to make them appear to hit the drum, we can use some trial & error to find good
degree values for the to rotate.

```css
/* ... */
@keyframes LeftHand {
 /* ... */
 50% {
  transform: rotate(15deg);
 }
 /* ... */
}

@keyframes RightHand {
 /* ... */
 50% {
  transform: rotate(-15deg);
 }
 /* ... */
}
```

Now we have something that looks like this:

![CSS Drum animation step](/blogPosts/images/drum-animation-example-2.png)

## Step 4: Stick heights

To create some visual interest, let's establish some 'stick heights' for the for the sticks to go up and down from.

| height           | deg (RH) | deg (LH) |
| ---------------- | -------- | -------- |
| parallel to drum | 0deg     | 0deg     |
| resting          | -5deg    | 5deg     |
| tap              | -15deg   | 15deg    |
| mid              | -30deg   | 30deg    |
| full             | -85deg   | 85deg    |

since we will be using these values often, let's create some variables for them.

```css
:root {
 --rest: 5deg;
 --tap: 15deg;
 --mid: 30deg;
 --full: 85deg;
}
```

However, we need the values to be different for the left and right sticks, so let's create some more variables.

```css
:root {
 --rest-r: -5deg;
 --rest-l: 5deg;
 --tap-r: -15deg;
 --tap-l: 15deg;
 --full-r: 85deg;
 --full-l: -85deg;
 --mid-r: 30deg;
 --mid-l: -30deg;
}
```

Now we can replace the values in our `@keyframes` with the variables.

```css
/* ... */
@keyframes LeftHand {
 0% {
  transform: rotate(var(--rest-l));
 }
 50% {
  transform: rotate(var(--tap-l));
 }
 100% {
  transform: rotate(var(--rest-l));
 }
}

@keyframes RightHand {
 0% {
  transform: rotate(var(--rest-r));
 }
 /* ... */
}
/* ... */
```

Now we have replicable values that we can use to create a more interesting animation.

## Step 5: Music & Math

Let's talk a little about how we are going to go about taking the basic up down motion
and turning that into 'music' animation.

First let's establish what we are going to be playing.

In this example, let's use the opening line of the piece _Drum Corps On The March_ by Jay Wanamaker.

![Drum Corps On The March](/blogPosts/images/drum-corps-on-the-march.png)

The 4/4 makes our life a lot easier in this case, since 4 is a clean number to work with.

In one CSS `@keyframes` animation, we can have 100 frames, from 0% to 100%, that we can use to animate the sticks.

One frame counts for a single motion, so a minimum of two frames are required to make a single 'hit' of the drum.

The smallest note value in our piece is a 32nd note (16th note diddle), so we can say that **two frames is equal to one 32nd note**.

Let's put this in a box.

| Two `@keyframes` = One 32nd Note |
| -------------------------------- |

Using math, we can figure out how many `@keyframes` each other note value is worth.

| Note Value | # of `@keyframes` |
| ---------- | ----------------- |
| 64th       | 1                 |
| 32nd       | 2                 |
| 16th       | 4                 |
| 8th        | 8                 |
| quarter    | 16                |
| half       | 32                |
| whole      | 64                |

Now we can begin to write `@keyframes` with music value.

```css
@keyframes RightHand {
 0% {
  transform: rotate(var(--rest-r));
 }
 /* R 16th diddle */
 1% {
  transform: rotate(var(--tap-r));
 }
 2% {
  transform: rotate(var(--rest-r));
 }
 3% {
  transform: rotate(var(--tap-r));
 }
 4% {
  transform: rotate(var(--rest-r));
 }
 /* end R 16th diddle */
 100% {
  transform: rotate(var(--rest-r));
 }
}
```

You will notice that this code works, but everything is super fast, so let's figure out how to make it play at 120bpm (the tempo of our piece).

120bpm means that there are 120 beats (quarter notes in 4/4) in one minute.

we can re-write this as 120 beats in 60 seconds.

```math
120/60
```

We know we have 100 animation frames, each worth one 64th note (or 1/16th of a quarter note), and now we can create an equasion.

```math
120/6 = (100 /16)/x
```

We can solve this equasion and find that in order for 100 frames to play at the same speed as 120bpm, our animation needs to take 3.125 seconds. Let's set this.

```css
/* ... */
.left-stick {
 animation: LeftHand 3.125s ease-in infinite;
}

.right-stick {
 animation: RightHand 3.125s ease-in infinite;
}
/* ... */
```

Now we can continue animating with all of this information.

there is a live demo with source code available at [https://codepen.io/gutenfries/pen/gOKRNPx](https://codepen.io/gutenfries/pen/gOKRNPx)

### Thanks for reading!
