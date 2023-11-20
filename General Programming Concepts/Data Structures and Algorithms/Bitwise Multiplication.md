---
last-modified: 2023-11-20
---
>[!abstract] Edge Cases
>1. Divisor == 0 would cause a divide by 0 error. Solution: return 0.
>2. Dividend == min and divisor == -1 causes an overflow, because the inverse of min cannot be represented. Solution: return int max value.
>3. Dividend absolute value == Divisor absolute value is always either 1 or negative 1. Solution: return 1 or negative 1.
>4. Highest found power == 0