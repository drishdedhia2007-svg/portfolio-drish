---
title: "Door Stopper"
slug: "door-stopper"
status: "ready-to-print"
category: ["CAD", "Print Preparation"]
skills: ["Fusion 360", "CAD", "Mechanical Design"]
shortDescription: "A ridged doorstopper designed in Fusion 360 to hold a door against wind."
coverImage: "/images/projects/door-stopper/render3.png"
coverAlt: "Gray wedge doorstopper with parallel ridges along the top"
coverCaption: "Original project render"
---

## Why I Built This

My door kept swinging shut because of wind, so I wanted a simple
physical fix: a doorstopper with ridges on its surface for extra
friction, enough to actually hold the door in place.

## My Approach

I already had a design in mind, so I built it in Autodesk Fusion 360
instead of Siemens NX, specifically to pick up a second CAD tool.
The two are fairly similar, but I noticed real differences in the
interface and in how certain functions work. Since this was something
I actually intended to use, not just a practice model, I made sure to
work with real, practical dimensions and placement rather than
arbitrary numbers.

## Where I Got Stuck

My first instinct was to copy and paste an extrude for every ridge.
It worked in principle, but it was slow, repetitive, and an obvious
sign that I was using the software the hard way.

## What Changed

I looked into whether Fusion 360 had a better way to repeat a feature,
and found its pattern tool. I used it to repeat the ridge feature
instead of manually extruding each one, then added fillets where they
made sense for the shape and finish.

## Result

A ready-to-print CAD model with ridges intended to add grip, built with
real-world dimensions in mind. The whole session, including learning
the new software along the way, took about 45 minutes. I have not
printed it yet, so I still need to check whether the ridges, material,
and chosen size actually hold my door under the same wind that started
the project.

![Full CAD view of the doorstopper](/images/projects/door-stopper/RWTH%20v2.png)

![Side view of the ridge pattern](/images/projects/door-stopper/RWTH%20v2.1.png)

## What I Learned

The pattern tool was the immediate fix, but the bigger lesson was to
notice when a tedious step meant I should rethink my method. Fusion 360
also gave me a useful comparison with Siemens NX: the tools can express
similar ideas, but the workflow and interface still affect how I solve
a problem. The next lesson will come from testing the physical part.
