---
tags:
  - csharp
  - general-concept
  - no-end-in-sight
last-modified: 2023-09-01
---
## What is composition?

Composition in the simplest explanation is the kind of programming that combines multiple pieces of code and function into a single whole component. The typical way of describing composition in terms of relationships is that composition generally follow a has-a pattern.

The functions and objects contained within the language are composites of multiple discreet dependencies that make up a single whole section.

In C#, composition usually looks like a class with a set of fields for what that object has to use for the rest of the code. These dependencies are often set in

## What is inheritance?

Inheritance is a mantra of development that came out of Object Oriented Programming principles. The basic idea of inheritance is the idea of an is-a relationship between objects.

A single object can inherit properties and methods of other objects in order to reuse the code from the inherited class.

## Why does composition vs inheritance matter?

Understanding the why's and how's behind what it is you are doing with design allows you to reflect on where change could happen, and how you could improve future application designs.

It is quite easy to fall into one way of doing things without ever getting out of your comfort zone. This creates a stagnant way of designing applications that can often lead to ham-fisted designs that get all of the negative sides of one kind of design with none of the upsides.

When it comes to Composition vs Inheritance this still applies. School often only shows one side of the equation for software design, and even outside of school with OOP design, inheritance seems like the "correct" way of doing things. On paper, the ideas that surround inheritance make a lot of sense.

What you miss out on with programming in a unidimensional approach without trying other coding mantras, is a lack of reference for the different ways you could robustly design your applications.

## The problem with inheritance.

For me, during school I was always sold the idea of inheritance over everything else. It was sold as the pinnacle of Software Development. It was the solution that was required.

For a long time, I followed this mantra, but as you grow as a developer and start to understand the intricate details of design, inheritance has obvious and clear drawbacks a, in my opinion, vast majority of the time.

The problem with inheritance is the inherent coupling that occurs between the base class, and the derived types. The derived members are forced to use all components within the base class.

When it comes to implementing a system, inheritance works great for one particular scenario: You have all of the requirements up front, and nothing about the application is expected to change.

A great quote that outlines this problem in a fantastic way is one from Code Aesthetics:

> Perfect design is the enemy of change.

The idea of this mantra is the idea that the only way to properly implement inheritance in a way that is as efficient as pure composition, is if you have an application that never needs to change.