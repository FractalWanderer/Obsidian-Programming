---
tags:
  - csharp
last-modified: 9/4/2023
---
## What is a unit test?

A unit test is a block of code that is designed to enforce and test the behavior of other code you have written. Generally speaking with respect to C# this involves testing a single method, but this definition can vary depending on the source.

## Why should you use unit tests?

#### Safety Net

Unit tests act as a safety net for any changes you make on the application. You can go forward with changes in the code, without having to worry about whether or not you accidentally broke something, because if you did break something, you will know what broke and where thanks to the unit tests that have been written. Worth noting here, however, that unit tests are not full proof, and can often let bugs slip by. There is no way of ensuring with absolute certainty that you have written your code in a full proof way.

#### Remembering Issues

Another massive benefit of unit tests, is that they act as memory of *why* you did something. If you have been doing a lot in the application, and you come across an edge case somewhere strange, writing a unit test that confirms the edge case is handled means you no longer need to hold in your mind what exactly that edge case was. If you ever forget why exactly you are handling that specific block of code in a certain way, you are able to go back and see: 

>"*Ah ha! Oh yeah! I totally forgot about that one weird edge case that broke things. Good thing I had a unit test for it!*"

#### Providing Examples

One more benefit is that they can act as an example to other programmers using the application of how the specific code is intended to be used. If someone is ever unsure if they are using a particular class from a class library in the correct way, they can go to the unit test and see how that specific class is being used. This is more applicable in something like a class library more so than a front end app.

#### Testing Code

Good unit tests are isolated from one another, and you can run the tests in the debugger if you want. This lets you comb over code that you might not otherwise be able to run. Say, for example, you have a project that is still in the early stages and breaks right after it starts to run. Any code that you might want to test after the break cannot be tested. This can be frustrating when adding new features to a developing application. Having a unit test that covers that block of code will let you mull over in greater detail how your code is functioning, without ever have to run through the full application life cycle.

# References

[Best practices for writing unit tests - .NET](https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-best-practices)

[Use code coverage for unit testing - .NET](https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-code-coverage?tabs=windows)