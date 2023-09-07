---
tags:
  - csharp
last-modified: 9/4/2023
---
## Why care about how the stack and heap work?
---
Having a solid understanding of the foundations of the language and storage of variables can make you a power-house of a programmer. Understanding when you are programming exactly what is happening under the hood, allows you to understand the benefits and drawbacks of the code you are writing.

You can understand why one way of doing things is more/less efficient than another way, and if you run into performance problems, you can evaluate why the code is slow!

Without an understanding of what it is that is happening, if you run into a performance bottleneck, what is it that you are supposed to do? If you don't have a toolkit of understanding, all you have to do is randomly change things and hope improvements get made. This is not useful, and is quite counterproductive.

Many people might say: "It doesn't matter! Just let the compiler decide things for you, and don't worry about what it is doing behind the scenes!"

I disagree with this sentiment. I think that having at least a base level understanding of how things are managed behind the scenes gives you a deeper understanding of how to program in a way that is efficient when required.

I want to make a note here however. Pre-mature optimization is not good. If you aren't running into performance problems, don't worry too much about it. In the case that you do end up with performance problems though, how would you ever know how to optimize if you have no clue how things are being stored in memory and where efficiencies can be made? Why use a class vs a struct? If you don't know how either is stored in memory, then it might not be at all obvious why you should choose one over the other.

Sure, you could just follow general good practices that others have told you about, and that might work decently enough, but what happens when you run into an exception to one of the rules? If you don't understand why the good practices exist, then you have no way of knowing when to break the practice. So is understanding the base level details important? My argument is, absolutely.

## How are strings handled with regard to the stack and heap?
---
Strings are immutable in C#, and so any modification done to a string, actually creates a brand new instance of the string on the heap. After creating the new instance of the string, the new reference to the created string is given to you. The other original string is still stuck around in memory until it is handled by the garbage collector.

So in other words, strings are always stored on the heap, even though it might seem as though they are pass by value, and it would be easy to assume they are on the stack.

#todo Another interesting note about strings and memory management is this: If two strings are declared with the exact same values, string interning makes them both point to the same reference in memory, even if they are declared at different places.
![[string-interning correction.png]]
## What is the High-Frequency heap?
---
The high-frequency heap is a storage location for objects that need to be accessed globally, and last through the entire lifetime of the application.

The high-frequency heap is a storage location where static members are stored, as well as type information. Objects stored on the high-frequency heap are around for the entire lifetime of the application, and there is only ever one instance of each object type stored on this heap. There is always global access to this heap. There is one instance of the high-frequency heap per application domain.

## Where are pointers (references) stored?
---
Just like pass by value types, the storage location of pointers is dependent on the context of where their declaration takes place. If the context is within a method, for example, they are stored on the stack. If, however, they were stored within a property on a class, they would end up on the managed heap.

It's worth noting, using pointers in C# is not allowed by default, and you have to use the unsafe keyword if you want to use them manually, but the language itself uses them for you, so I thought it was still worth mentioning how they are stored.

## How are static properties/fields stored on non-static objects with respect to the stack and heap?
---
As objects are instantiated, there is a dedicated space of memory chunked out for all of the components of that object that are relevant to the instantiated object.

## What is the small-object heap?
---
The small-object heap is the section of the garbage-collection heap that we all know and love, and it is the heap that is generally referred to when the stack and the heap are talked about.
This is the heap that new object instance get pushed to whenever you instantiate an object (so long as they are relatively small). Bigger objects go to the large-object heap. All objects within this heap get garbage collected when there are no more reference referring to them on the stack or the heap.

## What is boxing and unboxing?
---
Boxing occurs when a value type is moved from the stack to the heap, and unboxing is the inverse. There is a performance cost to boxing and unboxing that is non-trivial, and will start to have an impact if enough operations are performed in a small amount of time.

#### Example
![[boxing-unboxing example.png]]

## In what situations does boxing and unboxing occur?
---
Boxing and unboxing occurs in more situations than might be immediately obvious.

Some of the most common boxing cases include:

1. Passing a value type to a method that accepts an object parameter.
    
2. Using reflection to invoke a method.
    
3. Using string concatenation.
    
4. Using older non-generic collections (these have been mostly made irrelevant by generics)

## What is the large-object heap?
---
The large-object heap is the section of the garbage-collection heap for objects that are bigger than 85k bytes. The only exception to this rule is in the case of a double array with more than 1000 elements, which will get allocated to the large-object heap irrespective of if it is smaller that 85k bytes.

# References

[High Frequency Heap](https://stackoverflow.com/questions/4405627/high-frequency-heap)

[Memory in .NET - what goes where](https://jonskeet.uk/csharp/memory.html)

[Static Classes and Static Class Members - C# Programming Guide](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/static-classes-and-static-class-members)

[C# Static Class, Methods, Constructors, Fields](https://www.tutorialsteacher.com/csharp/csharp-static#:~:text=Static%20members%20are%20stored%20in,the%20instances%20of%20the%20class.)

[Boxing and unboxing: when does it come up?](https://stackoverflow.com/questions/1949122/boxing-and-unboxing-when-does-it-come-up#:~:text=Boxing%2Funboxing%20occurs%20when%20a,will%20be%20passed%20value%20types.)

[Garbage collection of static members](https://stackoverflow.com/questions/851370/garbage-collection-of-static-members)

[.NET Framework Internals: How the CLR Creates Runtime Objects](https://web.archive.org/web/20140724084944/http://msdn.microsoft.com/en-us/magazine/cc163791.aspx)

[C# Heap(ing) Vs Stack(ing) In .NET - Part One](https://www.c-sharpcorner.com/article/C-Sharp-heaping-vs-stacking-in-net-part-i/)

[How exactly do static fields work internally?](https://stackoverflow.com/questions/14781993/how-exactly-do-static-fields-work-internally)

[.NET Internals - CodeJourney.net](https://www.codejourney.net/net-internals/)

[A look at the internals of 'boxing' in the CLR](https://mattwarren.org/2017/08/02/A-look-at-the-internals-of-boxing-in-the-CLR/)

[Large Object Heap Uncovered (an old MSDN article)](https://devblogs.microsoft.com/dotnet/large-object-heap-uncovered-from-an-old-msdn-article/)

[Understanding the Stack and Heap in C# | endjin](https://endjin.com/blog/2022/07/understanding-the-stack-and-heap-in-csharp-dotnet)

[Is there pointer in C# like C++? Is it safe?](https://stackoverflow.com/questions/2333574/is-there-pointer-in-c-sharp-like-c-is-it-safe)