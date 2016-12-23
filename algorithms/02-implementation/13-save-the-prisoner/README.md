## Save the Prisoner!

* __HackerRank Link:__ https://www.hackerrank.com/challenges/save-the-prisoner
* __Difficulty:__ Easy
* __Solution(s) in:__ JavaScript

=====================

### Problem Statement

A jail has _N_ prisoners, and each prisoner has a unique id number, _S_, ranging from 1 to _N_. There are _M_ sweets that must be distributed to the prisoners.

The jailer decides the fairest way to do this is by sitting the prisoners down in a circle (ordered by ascending _S_), and then, starting with some random _S_, distribute one candy at a time to each sequentially numbered prisoner until all _M_ candies are distributed. For example, if the jailer picks prisoner _S_ = 20, then his distribution order would be (2, 3, 4, 5,..., _n_ - 1, 1, 2, 3, 4,...) until all _M_ sweets are distributed.

But wait—there's a catch—the very last sweet is poisoned! Can you find and print the ID number of the last prisoner to receive a sweet so he can be warned?

### Input Format

The first line contains an integer, _T_, denoting the number of test cases. 
The _T_ subsequent lines each contain 3 space-separated integers: 
_N_ (the number of prisoners), _M_ (the number of sweets), and _S_ (the prisoner ID), respectively.

### Constraints

* 1 < _T_ < 50
* 1 < _N_ < 10e9
* 1 < _M_ < 10e9
* 1 < _S_ < 10e9

### Output Format

For each test case, print the ID number of the prisoner who receives the poisoned sweet on a new line.

### Sample Input

```
1 
5 2 1
```

### Sample Output

```
2
```