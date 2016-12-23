##Circular Array Rotation

* __HackerRank Link:__ https://www.hackerrank.com/challenges/circular-array-rotation
* __Difficulty:__ Easy
* __Solution(s) in:__ JavaScript

=====================

###Problem Statement###

John Watson performs an operation called a right circular rotation on an array of integers, [_A0_, _A1_,...,_An-1_]. After performing one right circular rotation operation, the array is transformed from [_A0_, _A1_,...,_An-1_] to [_An-1_, _A0_,...,_An-2_].

Watson performs this operation _k_ times. To test Sherlock's ability to identify the current element at a particular position in the rotated array, Watson asks _q_ queries, where each query consists of a single integer, _m_, for which you must print the element at index _m_ in the rotated array (i.e., the value of _Am_).

###Input Format###

The first line contains 3 space-separated integers, _n_, _k_, and _q_, respectively. 
The second line contains _n_ space-separated integers, where each integer _i_ describes array element _Ai_ (where 0 < _i_ < _n_). 
Each of the  subsequent lines contains a single integer denoting _m_.

###Constraints###

* 1 < _n_ < 10_e_5
* 1 < _Ai_ < 10_e_5
* 1 < _k_ < 10_e_5
* 1 < _q_ < 500
* 0 < _m_ < _N_ - 1

###Output Format###

For each query, print the value of the element at index _m_ of the rotated array on a new line.

###Sample Input###

```
3 2 3
1 2 3
0
1
2
```

###Sample Output###

```
2
3
1
```