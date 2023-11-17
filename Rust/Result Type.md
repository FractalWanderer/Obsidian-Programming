---
last-modified: 2023-10-10
tags:
  - rust
---
## Definition
---
The `Result` type is an enum in Rust's standard library used for robust error handling. It represents the outcome of a computation that can either succeed or fail.

> [!example] 
>``` rust
> enum Result<T,E> {
> 	Ok(T),
> 	Err(E),
> }
>```

## Overview
---
#todo