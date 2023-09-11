---
tags:
  - csharp
last-modified: 2023-09-01
cssclasses: []
---
Understanding async await and asynchronous behavior in C# is extremely important if you ever plan to make your application robust and efficient. Learning asynchronous behavior at a fundamental level can be unbelievably powerful.
## When do you want to use async await?

As a general rule of thumb, I tend to air on the side of making most functions at least support asynchronous behavior in one way or another through the use of **tasks**. If you have a method for which you would expect it to run in a synchronous manner, you can mark the method as **async**, but change the **return type** of the method from **Task** to **ValueTask** instead, or its respective ValueTask T variation.

Or alternatively, you can just avoid using the async keyword altogether, and just support using task/valuetask as the return type. This allows for the method to be awaited in other context. Take special care for error handling if you use the latter strategy, as unexpected behavior can result if you are not careful.

![[Drawing 2023-09-07 14.58.06.excalidraw]]

## When do exceptions propagate in async methods?

If an exception occurs during the execution of an async method, the exception is stored within the task and only propagates once that async method is awaited. This difference can be seen if, say, the async method is called (not yet awaited) does some work in-between, and then is await after the in-between work is done. The exception would not throw until the await happens.
```csharp
public void DoSomeOtherWork() 
{
	Thread.Sleep(1000);
} 

public async Task DoSomeWorkAsync()
{ 
	return await Task.Delay(1000);
} 

public void CallMethods()
{ 
	var task = DoSomeWorkAsync();
	DoSomeOtherWork();
	await task; // Here is where the exception would throw 
				// if one were to throw during the 
				// execution of the operation. 
}
```

## Does using async await create new threads?

Yes and no. It depends on the context you are talking about, as well as how the runtime is optimizing thread output. If you are using async await with CPU bound operations using tasks, the CLR might move the work to another thread, but this does not necessarily mean that a new thread will be created. Often times, there are already plenty of thread pool threads available to use. In the case of I/O bound operations, there is not ever any new threads created.

## Is an async method stored on the stack or the heap?

The method itself is stored on the stack, but during the process of an await, the code after the await is packed into a task to later be run after the awaitable is completed. In the process of the packing of that additional code that has yet to run, it is elevated temporarily to the managed heap. So the answer really is both.
The method itself is stored on the stack, but some of the code contained within the method gets elevated to the managed heap. This is why you can not have, say, a Span defined in an async method. This is because the Span would end up on the heap during the packing of the callback code that has yet to run. Since spans are not allowed on the heap, they cannot be defined in async methods. The way that this code is packed is that when an awaitable within the method gets awaited, an unfinish task is immediately returned. As the task is returned, the rest of the code contained within the method is packed into the .ConinueWith() method of that task. After the awaited awaitable completes, it picks back up right where it left off with a new task called a nested task.

#unverified 
For objects that are not defined to have references (local pass by value variables) they are elevated to the heap, while objects that have relevant references, such as a local method, have the references elevated to the heap, while the original object location stays put. This is why you are allowed to define a Span that is inside of a local method, even if the base method it is contained within is asynchronous.

#todo Show example of Span usage in an async method through the use of a local function.

## So if no new threads are created, then how does async await make the application more robust?

The solution of async await is made to optimize the current thread context. When you await an object, what you are saying is this:

Hello thread! You can go off and process some more stuff while we are waiting for a response from this other component!

The current thread is relying on data that it does not have yet, and another component within the computer is the one doing the processing. This is in the case of an I/O-bound operation. The processing being done on the object is being done outside of the current thread. What this means is that while the current thread isn't actually doing any processing itself (i.e. is waiting on a network call, graphics call, or something similar) it can do some processing of other details during the waiting for a response of whatever object is doing the actual processing. In the case of CPU-bound operations, the work is deferred to the thread-pool for background processing using tasks, and the main thread is free up for other operations in the mean time. The thread-pool already has many threads available to use for the application, and no new ones are created.

#important
[^2]:  Worth noting here: This is with regard to I/O bound operations; not CPU bound operations. CPU bound operations are often run on background threads, whereas I/O bound operations are not.
## How does the main thread know when an operation is complete and it can continue to process in the current context?

It knows about the completion context of an I/O operation because of what is known as an Interrupt Service Routine (ISR). This is the case for I/O-bound work.

For CPU-bound work, the async state machine relies on the completion state of the task that is being awaited.

## What does calling await actually do?

Whenever you call await on a resource, you are freeing the thread of the current context so that while it is waiting on a response from an operation, it is free to do other work. The point at which an object is awaited, if and only if that task is incomplete, will return a task from the async method. In the case that an awaitable is already complete, it just continues running code synchronously.

## Situational Scenarios

#### No Awaitable Logic

There are plenty of scenarios in which you have a method that has a good amount of complex logic within it, but it doesn't really make sense to make the method explicitly async in the typical way.

Often times in this case, it can go one of a few ways:

1. You don't need the method to be asynchronous, so it should just remain synchronous. This option is perfectly fine in many scenarios, and there isn't anything wrong with having a method synchronous, especially if it does not have very much CPU bound work to do.
    
2. You have a lot of CPU bound work that would make sense to be done on a background thread and let the main thread go off and do other operations in the mean time. In this case, what you will want is to wrap the CPU bound operation in a Task object, and await the Task object. This will free up the main thread if the CLR finds that it is optimal, and the logic is likely to move to a background thread (although this is not always the case.) Either way, letting the runtime decide if it makes sense to move the work to another thread is optimal.
    
3. An interface or override is requiring a Task to be used. See below for this scenario.

##### What about interfaces or overrides that require a task to be returned?
If you have an interface, or override that requires a task for the return type, but your method is completely synchronous, returning Task.FromResult~TResult~(TResult) will allow you to use the method as if it is synchronous, despite the task return type. As far as I'm aware, the FromResult method should return a task with the property IsCompleted already set to true, as it should wait for the result of the operation before it returns.

Another way to support asynchronous code without making a method explicitly async at all, is to just create a non-async method that returns a task. The method, even though it is not marked as async, can still be awaited. This is because tasks are always allowed to be awaited inside the context of an asynchronous method, even if the method returning the task is not asynchronous.

#important As is outlined in the Async gotcha reference, this can cause unexpected behavior with exceptions. Given this, what should you do? [Handle exceptions](https://stackoverflow.com/questions/29923215/should-i-worry-about-this-async-method-lacks-await-operators-and-will-run-syn/29923484#29923484)

![[Yeild and Await Flow of Control.canvas|Yeild and Await Flow of Control]]
# References

[Why ConfigureAwait(false) is not the default option?](https://stackoverflow.com/questions/26681332/why-configureawaitfalse-is-not-the-default-option)

[C#: Why you should use ConfigureAwait(false) in your library code.](https://medium.com/bynder-tech/c-why-you-should-use-configureawait-false-in-your-library-code-d7837dce3d7f)

[Using ConfigureAwait to improve your application](https://johnthiriet.com/configure-await/#:~:text=As%20a%20general%20rule%2C%20every,thread%20for%20a%20little%20longer.)

[Does Task.Run(Action) Start a new Thread id there are no more threads in the ThreadPool?](https://stackoverflow.com/questions/53150222/does-task-runaction-start-a-new-thread-id-there-are-no-more-threads-in-the-thr)

[Why would one use Task over ValueTask in C#?](https://stackoverflow.com/questions/43000520/why-would-one-use-taskt-over-valuetaskt-in-c)

[ValueTask Struct (System.Threading.Tasks)](https://docs.microsoft.com/en-us/dotnet/api/system.threading.tasks.valuetask-1?view=net-6.0)

[Task-based Asynchronous Pattern (TAP): Introduction and overview](https://learn.microsoft.com/en-us/dotnet/standard/asynchronous-programming-patterns/task-based-asynchronous-pattern-tap)

[Does the use of async/await create a new thread?](https://stackoverflow.com/questions/27265818/does-the-use-of-async-await-create-a-new-thread)

#great-reference [Async gotcha: returning Task.FromResult or Task.CompletedTask](https://dev.to/asik/dont-return-taskfromresult-or-taskcompletedtask-4gcp)

[Should I worry about "This async method lacks 'await' operators and will run synchronously" warning](https://stackoverflow.com/questions/29923215/should-i-worry-about-this-async-method-lacks-await-operators-and-will-run-syn/29923484#29923484)

[Async/Await - Best Practices in Asynchronous Programming](https://learn.microsoft.com/en-us/archive/msdn-magazine/2013/march/async-await-best-practices-in-asynchronous-programming)

[How and when to use 'async' and 'await'](https://stackoverflow.com/questions/14455293/how-and-when-to-use-async-and-await)

[Task.FromResult() vs. Task.Run()](https://stackoverflow.com/questions/34005397/task-fromresult-vs-task-run)

[The ValueTask and the async state machine](https://stackoverflow.com/questions/57440047/the-valuetasktresult-and-the-async-state-machine)

#great-reference [There Is No Thread](https://blog.stephencleary.com/2013/11/there-is-no-thread.html)

[What happens to the thread when reaching 'await' on 'async' method?](https://stackoverflow.com/questions/12227906/what-happens-to-the-thread-when-reaching-await-on-async-method)

[C# async await explained - NDepend](https://blog.ndepend.com/c-async-await-explained/)


# Read Later

[Dissecting the async methods in C#](https://devblogs.microsoft.com/premier-developer/dissecting-the-async-methods-in-c/)

[Async and Await](https://blog.stephencleary.com/2012/02/async-and-await.html)

[Jon Skeet's coding blog](http://codeblog.jonskeet.uk/)

[Parallel Programming with .NET](https://devblogs.microsoft.com/pfxteam/?WT.mc_id=DT-MVP-5000058)

[ConfigureAwait FAQ](https://devblogs.microsoft.com/dotnet/configureawait-faq/)

[Don't Block on Async Code](https://blog.stephencleary.com/2012/07/dont-block-on-async-code.html)