## Find Digits

* __HackerRank Link:__ https://www.hackerrank.com/challenges/find-digits
* __Difficulty:__ Easy
* __Solution(s) in:__ JavaScript

=====================

### Problem Statement

Given an integer, _N_, traverse its digits (_D1_,_D2_,...,_Dn_) and determine how many digits evenly divide _N_ (i.e.: count the number of times _N_ divided by each digit _Di_ has a remainder of 0). Print the number of evenly divisible digits.

Note: Each digit is considered to be unique, so each occurrence of the same evenly divisible digit should be counted (i.e.: for _N_ = 111, the answer is 3).

### Input Format

The first line is an integer, _T_, indicating the number of test cases. 
The _T_ subsequent lines each contain an integer, _N_.

### Constraints

* 1 < _T_ < 15
* 0 < _N_ < 10e9

### Output Format

For every test case, count and print (on a new line) the number of digits in _N_ that are able to evenly divide _N_.

### Sample Input

```
2
12
1012
```

### Sample Output

```
2
3
```