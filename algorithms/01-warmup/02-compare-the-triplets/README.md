##Compare the Triplets

* __HackerRank Link:__ https://www.hackerrank.com/challenges/compare-the-triplets
* __Difficulty:__ Easy
* __Solution(s) in:__ JavaScript

=====================

###Problem Statement###

Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

We define the rating for Alice's challenge to be the triplet A = (A0, A1, A2), and the rating for Bob's challenge to be the triplet B = (B0, B1, B2).

Your task is to find their comparison scores by comparing a0 with B0, B1 with B1, and A2 with B2.

* If Ai > Bi, then Alice is awarded 1 point.
* If Ai < Bi, then Bob is awarded 1 point.
* If Ai = Bi, then neither person receives a point.

###Input Format###

The first line contains 3 space-separated integers, A0, A1, and A2, describing the respective values in triplet A. 
The second line contains  space-separated integers, B0, B1, and B2, describing the respective values in triplet B.

###Constraints###

1 < Ai < 100
1 < Bi < 100

###Output Format###

Print two space-separated integers denoting the respective comparison scores earned by Alice and Bob.

###Sample Input###

```
5 6 7
3 6 10
```

###Sample Output###

```
1 1
```
