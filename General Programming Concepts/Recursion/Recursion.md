---
last-modified: 2023-11-29
---
# Keep in Mind
---
There are 3 different steps to recursion:
1. pre (before recursion)
2. recurse (during the recursion)
3. post (after recursion)

To make recursion easier, keep in mind: **Put as many conditions as you can into the base case.**

> [!example]
> For example, take the case where we are doing pathfinding in a maze such as:
> 
> #######E##
> #                 #
> ##S#######
>
>We have the following cases to check for:
>1. Its a wall.
>2. Off the map.
>3. Its the end of the maze.
>4. We've already seen the tile, no need to go back to it.

