---
last-modified: 2023-11-20
---
>[!abstract] Edge Cases
>1. Divisor == 0 would cause a divide by 0 error. Solution: return 0.
>2. Divisor == 1 Solution: return dividend.
>3. Dividend == min and divisor == -1 causes an overflow, because the inverse of min cannot be represented. Solution: return int max value.
>4. Dividend absolute value == Divisor absolute value is always either 1 or negative 1. Solution: return 1 or negative 1.
>5. Highest found power == 0