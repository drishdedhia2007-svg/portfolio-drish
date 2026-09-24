---
title: "Door Stopper"
slug: "door-stopper"
status: "completed"
category: ["CAD", "3D Printing"]
skills: ["Fusion 360", "CAD", "Mechanical Design"]
shortDescription: "A ridged doorstopper designed in Fusion 360 to hold a door against wind."
coverImage: "/images/projects/door-stopper/render3.png"
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

## Challenges

Adding the ridges meant repeating the same extrude feature many times
across the surface, which quickly became tedious to do manually, one
copy-paste at a time.

## Solution

I looked into whether Fusion 360 had a better way to repeat a feature,
and found its pattern tool, which lets you repeat a feature across a
face automatically. I used that to generate all the ridges in one
step instead of manually extruding each one, then added fillets where
needed to clean up the design.

## Result

A finished, ready-to-print doorstopper with a ridged surface for grip,
built with real-world dimensions in mind. The whole process, including
learning the new software along the way, took about 45 minutes.

![Full CAD view of the doorstopper](/images/projects/door-stopper/RWTH%20v2.png)

![Side view of the ridge pattern](/images/projects/door-stopper/RWTH%20v2.1.png)

## What I Learned

Beyond the specific pattern-tool trick, this was a good lesson in
looking for the right tool instead of brute-forcing a repetitive task
manually. Working in Fusion 360 also gave me a useful point of
comparison against Siemens NX, which is helping me understand which
parts of CAD workflows are tool-specific versus universal.
