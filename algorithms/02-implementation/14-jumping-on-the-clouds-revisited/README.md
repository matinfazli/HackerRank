## Jumping on the Clouds: Revisited

* __HackerRank Link:__ https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited
* __Difficulty:__ Easy
* __Solution(s) in:__ JavaScript

=====================

### Problem Statement

Aerith is playing a cloud game! In this game, there are _n_ clouds numbered sequentially from 0 to _n_ - 1. Each cloud is either an ordinary cloud or a thundercloud.

Aerith starts out on cloud 0 with energy level _E_ = 100. She can use 1 unit of energy to make a jump of size _k_ to cloud _(i + k)_ % _n_, and she jumps until she gets back to cloud 0. If Aerith lands on a thundercloud, her energy (_E_) decreases by 2 additional units. The game ends when Aerith lands back on cloud 0.

Given the values of _n_, _k_, and the configuration of the clouds, can you determine the final value of _E_ after the game ends?

### Input Format

The first line contains two space-separated integers, _n_ (the number of clouds) and _k_ (the jump distance), respectively. 
The second line contains _n_ space-separated integers describing the respective values of clouds _C0_, _C1_,..., _Cn-1_. Each cloud is described as follows:

- If _Ci_ = 0, then cloud  is an ordinary cloud.
- If _Ci_ = 1, then cloud  is a thundercloud.

### Constraints

* 2 < _n_ < 25
* 1 < _k_ < _n_
* _n_ % _k_ = 0
* _Ci_ E {0,1}

### Output Format

Print the final value of _E_ on a new line.

### Sample Input

```
8 2
0 0 1 0 0 1 1 0
```

### Sample Output

```
92
```