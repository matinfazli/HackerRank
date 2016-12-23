##Between Two Sets

* __HackerRank Link:__ https://www.hackerrank.com/challenges/between-two-sets
* __Difficulty:__ Easy
* __Solution(s) in:__ JavaScript

=====================

###Problem Statement###

Consider two sets of positive integers, _A_ = {a0, a1,..., an, an-1} and . We say that a positive integer, _x_, is between sets _A_ and _B_ if the following conditions are satisfied:

1. All elements in _A_ are factors of _x_.
2. _x_ is a factor of all elements in _B_.

Given _A_ and _B_, find and print the number of integers (i.e., possible x's) that are between the two sets.

###Input Format###

The first line contains two space-separated integers describing the respective values of _n_ (the number of elements in set _A_) and _m_ (the number of elements in set _B_). 
The second line contains _n_ distinct space-separated integers describing a0, a1,..., an-1. 
The third line contains _m_ distinct space-separated integers describing b0, b1,..., bm-1.

###Constraints###

* 1 < _n_, _m_ < 10
* 1 < ai < 100
* 1 < bi < 100

###Output Format###

Print the number of integers that are considered to be between _A_ and _B_.

###Sample Input###

```
2 3
2 4
16 32 96
```

###Sample Output###

```
3
```
