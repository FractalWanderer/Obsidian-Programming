---
tags:
  - csharp
  - finished
  - best-practice
last-modified: 2023-09-04
---
#### Why should you avoid the usage of the out keyword?

**State Complexity**: The primary reason for why you should avoid the keyword is simple. It forces you to hold more information about the application state within your head at once. I ran into this full force during game development, and getting rid of the 'out' keyword instantly helped to simplify my code. This simplification ended up being easier in virtually every way, and I saw no downsides to the simplification. Not only this, but I can hardly think of a more ideal situation in which to employ the usage of the 'out' keyword, and yet, even in the perfect scenario it was terrible in the implementation.

[^1]: It is worth noting here, I'm mostly talking about the common practice that is implemented by using both an 'out' keyword paired with a return type of 'bool' to show the success state of the method. I haven't experimented much outside of this usage. 
#### Example

###### Original

Here is a very oversimplified version of what I did in my actual code during the development of an inventory system. As you can see, there is clearly a requirement of managing two separate states at once. One being the 'success' or 'failure' with a bool, and the other being the 'overflow' of the slot.

```csharp
public bool InsertSlotItem(SlotItem itemToInsert, out SlotItem? overflow)
{
	// if no overflow
	overflow = null;
	return false;

	// if overflow
	// remaining is not defined here, but just pretend it is.
	overflow = remaining;
	return true;
}
```

[^2]: The "overflow" here is the remaining amount after attempting an insert. For example, you have an item called "wood" that is already in the slot with a value of 75. Assuming the max stack is 100 and you try to add 50 to said stack, the overflow would be 25.

By using the 'out' keyword we're juggling the two states at once, making the usage difficult and confusing. On the caller side of things we see:

```csharp
bool result = InsertSlotItem(mySlotItem, out SlotItem? overflow);
```

This requires you to maintain in your head both the 'result' and the 'overflow' at the same time. Obviously when looking at this at a glance, it seems reasonable and simple. I can assure you, however, that when used in *actual* production code, with any amount of complexity this becomes a nightmare to manage. I was constantly having to go back to the original method just to try and reason about what was happening. I had to make sure I didn't make a simple slip up and confuse what the state of 'result' should be for a given use case, as well as double checking the scenarios of overflow being 'null' or 'not null' at the same time.

###### Solution: Keep it simple, stupid!

So then you might ask, what should you do instead? In this case the answer is quite straightforward. Just return a nullable that contains the overflow instead!

```csharp
public SlotItem? InsertSlotItem(SlotItem itemToInsert)
{
	// if no overflow
	return null;

	// if overflow
	return overflow;
}
```

Now the complexity is instantly reduced to only a single state, and the management of said state is far easier to reason about. You are returned a single object, the state of which is obvious. No more need to worry about the 'success' or 'failure' bool. Now you only need to use the object returned.

##### Downside
The one piece of information you lose, is that it is not obvious what exactly is being returned from the method. I think that this is a perfectly reasonable trade off, and when *actually* implementing this in my code, I found no issue with the latter usage, and _tons_ of issues with the former. That said, employing proper naming conventions and documentation can resolve this issue pretty easily.

#### Closing Statement

You would obviously need to try this out for yourself, and every use case is different, but I have found absolutely no up-side to using the 'out' keyword, and recommend that you avoid it. The solution of just returning a nullable is simple and easy to reason about. It simplifies the code, reduces the amount of state management, keeps you from having to hold too much in your head, and is no more complex to implement. 

That's about it. Have fun and program more, or whatever.