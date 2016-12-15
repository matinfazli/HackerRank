##Bon Appetit

* __HackerRank Link:__ https://www.hackerrank.com/challenges/bon-appetit
* __Difficulty:__ Easy
* __Solution(s) in:__ JavaScript

=====================

###Problem Statement###

Anna and Brian order _n_ items at a restaurant, but Anna declines to eat any of the _Kth_ item (where 0 < _K_ < _n_) due to an allergy. When the check comes, they decide to split the cost of all the items they shared; however, Brian may have forgotten that they didn't split the _Kth_ item and accidentally charged Anna for it.

You are given _n_, _k_, the cost of each of the _n_ items, and the total amount of money that Brian charged Anna for her portion of the bill. If the bill is fairly split, print __Bon Appetit__; otherwise, print the amount of money that Brian must refund to Anna.

###Input Format###

The first line contains two space-separated integers denoting the respective values of _n_ (the number of items ordered) and _k_ (the 0-based index of the item that Anna did not eat). 
The second line contains _n_ space-separated integers where each integer _i_ denotes the cost, _c[i]_, of item _i_ (where 0 < _i_ < _n_). 
The third line contains an integer, _b charged_, denoting the amount of money that Brian charged Anna for her share of the bill.

###Constraints###

* 2 < _n_ < 10e5
* 0 < _k_ < _n_
* 1 < _c[i]_ < 10e4
* 0 < _b_ < C _c[i]_

###Output Format###

If Brian did not overcharge Anna, print __Bon Appetit__ on a new line; otherwise, print the difference (i.e., _b charged_ - _b actual_) that Brian must refund to Anna (it is guaranteed that this will always be an integer).

###Sample Input###

```
4 1
3 10 2 9
12
```

###Sample Output###

```
5
```
