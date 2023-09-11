## Hypothesis
---
Avoiding the use of private methods in favor of public methods gives the caller more context about how a particular block of code is being used. Rather than calling a private method, favor making that method public and letting the caller decide it's usage.

I'm doing a refactor of the inventory system in my game, and more specifically, I am refactoring the slot management for this particular example.

Here is part of the code that I am pulling out and refactoring:

```csharp
public void ReinitializeSlots(int slotCount)
{
	containerSlots = new Slot[slotCount];
	DeleteAllCurrentSlots();
	
	for(int i = 0; i < slotCount; i++)
	{
		var newSlot = Instantiate(slotGameObject, transform, false);

		containerSlots[i] = newSlot.GetComponentInChildren<Slot>();
	}
}

private void DeleteAllCurrentSlots()
{
	foreach (Transform child in transform)
	{
		Destroy(child.gameObject);
	}
}
```

Now for how I plan to refactor this, I see two possible options that I am deliberating about:

1. Keep the DeleteAllCurrentSlots private, considering the only method that uses it is ReinitializeSlots.
```csharp
public void ReinitializeSlots(int slotCount, GameObject slotGameObject, Transform parent)
{
	Slots = new Slot[slotCount];
	DeleteAllCurrentSlots();
	
	for(int i = 0; i < slotCount; i++)
	{
		var newSlot = Object.Instantiate(slotGameObject, parent, false);

		Slots[i] = newSlot.GetComponentInChildren<Slot>();
	}
}

private void DeleteAllCurrentSlots()
{
	foreach (var slot in Slots)
	{
		Object.Destroy(slot);
	}
}
```

2. Change the functionality to let the caller decide the order in which both methods are called.
   
```csharp
public void InitializeSlots(int slotCount, GameObject slotGameObject, Transform parent)
{
	Slots = new Slot[slotCount];

	for (int i = 0; i < slotCount; i++)
	{
		var newSlot = Object.Instantiate(slotGameObject, parent, false);

		Slots[i] = newSlot.GetComponentInChildren<Slot>(); 
		
	}
}

public void DeleteAllCurrentSlots()
{
	foreach (var slot in Slots)
	{
		Object.Destroy(slot);
	}
}
```

My theory is that allowing the caller to decide the usage of these methods, and making them both public is the better option. The reason I think this will likely be better, is due to the fact that where the call is happening, you have more context immediately available to you about the sum total of what is happening.