## Viral Advertising

* __HackerRank Link:__ https://www.hackerrank.com/challenges/strange-advertising
* __Difficulty:__ Easy
* __Solution(s) in:__ JavaScript

=====================

### Problem Statement

HackerLand Enterprise is adopting a new viral advertising strategy. When they launch a new product, they advertise it to exactly 5 people on social media.

On the first day, half of those 5 people (i.e., _floor(5/2)_ = 2) like the advertisement and each person shares it with of their friends; the remaining people (i.e., 5 - _floor(5/2)_ = 3) delete the advertisement because it doesn't interest them. So, at the beginning of the second day, _floor(5/2)_ x 3 = 2 x 3 = 6 people receive the advertisement.

On the second day, half of the 6 people who received the advertisement share it with 3 new friends. So, at the beginning of the third day, _floor(6/2)_ x 3 = 3 x 2 x 3 = 9 people receive the advertisement.

Given an integer, _n_, find and print the total number of people who liked HackerLand Enterprise's advertisement during the first _n_ days. It is guaranteed that no two people have any friends in common and, after a person shares the advertisement with a friend, the friend always sees it the next day.

### Input Format

A single integer, _n_, denoting a number of days.

### Constraints

* 1 < _n_ < 50

### Output Format

Print the number of people who liked the advertisement during the first _n_ days.

### Sample Input

```
3
```

### Sample Output

```
9
```