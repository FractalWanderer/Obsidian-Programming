---
last-modified: 2023-09-04
tags:
  - unfinished
  - csharp
cssclasses:
  - wider-code-lg
---
![[Semaphore]]
## Usage
---
#### Semaphore Slim

###### Definition

```csharp
public SemaphoreSlim(int initialCount, int maxCount)
{
	if (initialCount < 0 || initialCount > maxCount)
	{
		throw new ArgumentOutOfRangeException(nameof(initialCount), initialCount,SR.SemaphoreSlim_ctor_InitialCountWrong);
	}

	// validate input
	if (maxCount <= 0)
	{
		throw new ArgumentOutOfRangeException(nameof(maxCount), maxCount, SR.SemaphoreSlim_ctor_MaxCountWrong);
	}

	m_maxCount = maxCount;
	m_currentCount = initialCount;
	m_lockObjAndDisposed = new StrongBox<bool>();
}
```

###### Usage

```csharp
namespace SemaphoreExample;

public class ExampleSemaphoreUsage
{
    private readonly Dictionary<int, string> _sharedResource = new Dictionary<int, string>();

    private readonly SemaphoreSlim _semaphoreSlim = new SemaphoreSlim(1, 1);

    public async Task AddToDictionaryAsync(int key, string value)
    {
        try
        {
            await _semaphoreSlim.WaitAsync();
            
            _sharedResource.Add(key, value);
        }
        finally
        {
            _semaphoreSlim.Release();
        }
    }
}
```