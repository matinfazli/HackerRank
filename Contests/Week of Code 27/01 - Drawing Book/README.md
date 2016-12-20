## Drawing Book

* __HackerRank Link:__ https://www.hackerrank.com/contests/w27/challenges/drawing-book
* __Difficulty:__ Easy
* __Solution(s) in:__ JavaScript

=====================

### Problem Statement

Brie’s Drawing teacher asks her class to open their n-page book to page number _p_. Brie can either start turning pages from the front of the book (i.e., page number 1) or from the back of the book (i.e., page number _n_), and she always turns pages one-by-one (as opposed to skipping through multiple pages at once). When she opens the book, page 1 is always on the right side. 

Each page in the book has two sides, front and back, except for the last page which may only have a front side depending on the total number of pages of the book (see the Explanation sections below for additional diagrams).

Given _n_ and _p_, find and print the minimum number of pages Brie must turn in order to arrive at page _p_.

### Input Format

The first line contains an integer, _n_, denoting the number of pages in the book. 
The second line contains an integer, _p_, denoting the page that Brie's teacher wants her to turn to.

### Constraints

- 1 < _n_ < 10e5
- 1 < _p_ < _n_

### Output Format

Print an integer denoting the minimum number of pages Brie must turn to get to page _p_.

### Sample Input

```
6
2
```

### Sample Output

```
1
```