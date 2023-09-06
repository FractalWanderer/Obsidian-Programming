---
tags:
  - no-end-in-sight
last-modified: 9/4/2023
---
## When do secure storage strategies matter?

Secure storage strategies matter when you are working with data that, when compromised, could cause harm to the individuals or organization for which the data is valuable. There are different levels to the amount of potential harm, and thus it is preferable to employ a risk to benefit ratio when working with sensitive data. How sensitive is a particular set of data, and what is the consequence of a compromise of said data?

## Different Kinds of Sensitive Data
---
#### Username and Password

###### Why care about username and password storage?
This might seem obvious. Of course you should care! You don't want the accounts of your system to be compromised and have to have every user re-do their username and password! That'd be a pain!

This is not the only reason to care though. Yes, it would be a massive inconvenience on your side of production if username and passwords were compromised, but the problem is actually larger than that.

It can be easy to assume that because the data locked behind your login system isn't overly important (like say, a bank is) that you don't have to worry quite as much about it, and you can just deal with the pain of fixing things after the breach happens. This is not a good way of thinking about things.

The main reason you should worry heavily about usernames and passwords is this: People are fallible and use the same usernames and passwords in multiple places.

Having an exposure of usernames, passwords and emails is a much bigger deal than you might first realize. Often, those same usernames, passwords, and emails are used in many different places per user. This could mean an exposure of a single set of user data could be directly used to break into that same user's other accounts, including accounts as sensitive as a personal bank account. Having a exposure of those credentials is outside of the scope of your personal application. The exposure of those details is often times an exposure of every account that person might hold.

## Definitions
---
#### Salt

A salt is a calculated value that is appended (or prepended) that is different for every value ran through the hash function. This value is calculated based on some value passed in to a hash function.
###### Example
	Say we are taking a an id with a value of 1 for an employee. We take the id, in this case 1, run it through a hash function, and then take some other value, such as, say, their first name and run that through a salt function. Then we add this salt value to the hash that was generated with the id. This gives us not only a hash calculated with the id, but also with another value that attackers do not know about.
#### Pepper

A pepper is a value appended (or prepended) to a hash that is consistent for all values that are run through a hash function. This value always remains the same for every single object run through the particular hash, and should be as difficult to guess as possible.