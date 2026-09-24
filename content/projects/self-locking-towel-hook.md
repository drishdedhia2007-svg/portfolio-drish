---
title: "Self-locking Towel Hook"
slug: "self-locking-towel-hook"
status: "ready-to-print"
category: ["CAD", "Print Preparation"]
skills: ["Fusion 360", "Bambu Studio", "CAD", "Print Preparation"]
startDate: "20 Sep 2026"
shortDescription: "A print-in-place towel hook concept that uses a captive ball, gravity, and friction to grip fabric."
coverImage: "/images/projects/self-locking-hook/studio-visualization.png"
coverAlt: "U-shaped towel hook with a captive ball inside and fluted sides"
coverCaption: "Studio visualization based on my CAD model; the original slicer view appears below"
---

## Why I Wanted to Make It

I wanted a way to hang a towel on a smooth tiled wall without drilling into it. A standard hook felt a little too ordinary, and suction felt like the obvious answer. Then I saw a self-locking hook while scrolling through reels. For once, scrolling gave me an engineering problem I actually wanted to try.

The idea is simple and clever: push a ball up inside a groove to make room for the towel, then let the towel's weight pull the ball down so gravity and friction grip the fabric. It looked like a good chance to stretch beyond the shapes I had modeled so far.

## Starting Wrong, Then Reading the Drawing

I opened Fusion 360 and began without a reference. That did not last long. I was guessing at dimensions and at how the ball and body would fit together, so I stopped and found a step-by-step tutorial with a technical drawing. I watched it, kept a screenshot of the drawing next to Fusion, and rebuilt the model myself rather than blindly following each click.

That was a small moment I enjoyed: drawings that used to look intimidating now felt readable. The mechanism is not my original invention, and the tutorial helped me learn its geometry. The CAD work and the later texture experiments were my own practice in turning that reference into a model.

## The Captive Ball and the Extra Grooves

I modeled the ball as a separate component inside the hook so that the intended print could contain it from the start. That taught me to think about components within an assembly, and about how a print-in-place part has to be planned before it reaches the slicer.

The basic hook looked too plain to me, so I tried adding a fluted texture around the outside. That “little extra” took longer than the main body. I tested several ways to make the grooves, slowed my computer down more than once, and eventually used AI guidance to work through the CAD operations. The result taught me more about when to use revolve, extrude, sweep, and different pattern tools, including patterns along a path.

![Original Bambu Studio view of the hook and captive ball](/images/projects/self-locking-hook/slicer-preview.png)

## Where the Design Stands

I later brought the model into Bambu Studio and explored orientation, tree supports, and wall settings for the curved surfaces. The model is prepared for a first print, but I have not tested one yet. The ball could fuse to the body if its clearance is wrong, and I have not settled how the hook itself will attach securely to tile without damage. Those are real gaps between the idea and a working bathroom object.

The whole modeling session ran from about midnight to 2 a.m., after a stressful day of studying. The grooves were more trouble than I expected, but the process left me in a better mood. CAD is fun precisely because the extra detail you decide to try can become the part that teaches you the most.
