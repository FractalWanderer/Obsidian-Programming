## Hypothesis
---
I'm doing a refactor of the inventory system in my game, and more specifically, I am refactoring the slot management for this particular example.

Here is part of the code that I am pulling out and refactoring:

```csharp
private void ReinitializeSlots(int slotCount)
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