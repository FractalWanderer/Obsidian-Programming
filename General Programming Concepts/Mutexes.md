---
last-modified: 2023-09-27
tags:
  - general-concept
  - unfinished
---
## What is a mutex?
---
The word mutex stands for mutually exclusive. What this means is that a mutex is a way of limiting access to a thread. Using a mutex on a resource means that only a single thread can have access to a specific resource at a given time, an ownership of that resource can be passed around from thread to thread. Only a single thread at a time will ever actually be allowed to control the resource at any given time.

This can help substantially with multithreading for resources that are not thread safe. By locking a resource, and only allowing one thread at a time access, you can get around some of the pitfalls that comes with non-thread safe resources. (Such as resources stored on the managed heap, for example.)

Having mutexes implemented in the code allows for the synchronization of threads. If one thread has ownership, and another thread attempts to access a resource, it will wait until the resource is available before attempting to do anything of it.

## Why might you need a mutex?
---
So imagine you have a resource that is stored on the heap. This could be a class, or some other managed resource, that has a single instance of the resource stored, and references to that resource are distributed throughout your application. On single threaded applications, access to this resource only ever edit the original item in a synchronous manner, because there is only one thread being used. If you, however, have many threads attempting to edit the original object all at once, the resource will be getting overridden and changed from many places all at once. Remember, with the managed heap, there is only ever one object stored in memory, and any copying of this object is actually just a reference to the original. So you end up with a situation in which you have many threads all modifying the original object at the same time. This can create very strange results. This is known as a race condition.

![[Race Conditions#What is a race condition?]]

## When to use a mutex over more scoped programming concepts?

Generally, you'd want to rely on mutexes if the resource you are accessing is accessed by more than one process that is running on your computer. If the resource you are working with is limited in scope to only the specific application you are working within, there may be other alternative language specific strategies you can employ.

> [!example]
>In C# it is common to either use a lock, or a semaphore for mediating thread resource access interactions.
>
>![[Semaphores in .NET]]