##Apple and Orange

* __HackerRank Link:__ https://www.hackerrank.com/challenges/apple-and-orange
* __Difficulty:__ Easy
* __Solution(s) in:__ JavaScript

=====================

###Problem Statement###

Sam's house has an apple tree and an orange tree that yield an abundance of fruit. In the diagram below, the red region denotes his house, where _s_ is the start point and _t_ is the end point. The apple tree is to the left of his house, and the orange tree is to its right. You can assume the trees are located on a single point, where the apple tree is at point _a_ and the orange tree is at point _b_.

When a fruit falls from its tree, it lands _d_ units of distance from its tree of origin along the x-axis. A negative value of _d_ means the fruit fell _d_ units to the tree's left, and a positive value of _d_ means it falls _d_ units to the tree's right.

Given the value of _d_ for _m_ apples and _n_ oranges, can you determine how many apples and oranges will fall on Sam's house (i.e., in the inclusive range [s, t])? Print the number of apples that fall on Sam's house as your first line of output, then print the number of oranges that fall on Sam's house as your second line of output.

###Input Format###

The first line contains two space-separated integers denoting the respective values of _s_ and _t_. 
The second line contains two space-separated integers denoting the respective values of _a_ and _b_. 
The third line contains two space-separated integers denoting the respective values of _m_ and _n_. 
The fourth line contains _m_ space-separated integers denoting the respective distances that each apple falls from point _a_. 
The fifth line contains _n_ space-separated integers denoting the respective distances that each orange falls from point _b_.

###Constraints###

* 1 < _s_, _t_, _a_, _b_, _m_, _n_ < 10e5
* -10e5 < _d_ < 10e5
* _a_ < _s_ < _t_ < _b_

###Output Format###

Print two lines of output:

1. On the first line, print the number of apples that fall on Sam's house.
2. On the second line, print the number of oranges that fall on Sam's house.

###Sample Input###

```
7 11
5 15
3 2
-2 2 1
5 -6
```

###Sample Output###

```
1
1
```
