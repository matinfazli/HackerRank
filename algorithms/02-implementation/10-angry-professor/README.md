## Angry Professor

* __HackerRank Link:__ https://www.hackerrank.com/challenges/angry-professor
* __Difficulty:__ Easy
* __Solution(s) in:__ JavaScript

=====================

### Problem Statement

A Discrete Mathematics professor has a class of _N_ students. Frustrated with their lack of discipline, he decides to cancel class if fewer than _K_ students are present when class starts.

Given the arrival time of each student, determine if the class is canceled.

### Input Format

The first line of input contains _T_, the number of test cases.

Each test case consists of two lines. The first line has two space-separated integers, _N_ (students in the class) and _K_ (the cancelation threshold). The second line contains _N_ space-separated integers (_a1_, _a2_,..., _aN_) describing the arrival times for each student.

__Note__: Non-positive arrival times (_ai_ < 0) indicate the student arrived early or on time; positive arrival times (_ai_ > 0) indicate the student arrived _ai_ minutes late.

### Constraints

* 1 < _T_ < 10
* 0 < _N_ < 1000
* 0 < _K_ < _N_
* -100 < _ai_ < 100, where _i_ E[_1_,_N_]

### Output Format

For each test case, print the word YES if the class is canceled or NO if it is not.

### Sample Input

```
2
4 3
-1 -3 4 2
4 2
0 -1 2 1
```

### Sample Output

```
YES
NO
```