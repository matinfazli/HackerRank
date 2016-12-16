## Beautiful Days at the Movies

* __HackerRank Link:__ https://www.hackerrank.com/challenges/beautiful-days-at-the-movies
* __Difficulty:__ Easy
* __Solution(s) in:__ JavaScript

=====================

### Problem Statement

Lily likes to play games with integers and their reversals. For some integer _x_, we define _reversed(x)_ to be the reversal of all digits in _x_. For example, _reversed(123)_ = 321, _reversed(21)_ = 12, and _reversed(120)_ = 21.

Logan wants to go to the movies with Lily on some day _x_ satisfying _i_ < _x_ < _j_, but he knows she only goes to the movies on days she considers to be beautiful. Lily considers a day to be beautiful if the absolute value of the difference between _x_ and _reversed(x)_ is evenly divisible by _k_.

Given _i_, _j_, and _k_, count and print the number of beautiful days when Logan and Lily can go to the movies.

### Input Format

A single line of three space-separated integers describing the respective values of _i_, _j_, and _k_.

### Constraints

* 1 < _i_ < _j_ < 2 x 10e6
* 1 < _k_ < 2 x 10e9

### Output Format

Print the number of beautiful days in the inclusive range between _i_ and _j_.

### Sample Input

```
20 23 6
```

### Sample Output

```
2
```