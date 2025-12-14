# 2171B – Yuu Koito and Minimum Absolute Sum – Explanation

## Problem Statement

You are given a partially filled array of **nonnegative integers** of length **n**, where some elements are `-1` (blank).  
You want to fill the blank elements with nonnegative integers so that the **absolute value of the sum of differences between consecutive elements** is minimized.

Formally:

* Let `b[i] = a[i+1] - a[i]` for all `1 ≤ i ≤ n-1`.
* Find values for blanks in `a` to **minimize |b[1] + b[2] + ... + b[n-1]|**.
* Among multiple solutions, choose the **lexicographically smallest array**.

---

## Idea Behind the Solution

Observations:

1. The sum of differences `b[1] + b[2] + ... + b[n-1]` simplifies to `a[n] - a[1]`.
2. To minimize the absolute sum:
   * Fill all blanks with **a[1]** (or **0** if a[1] is blank) to reduce change.
3. To get the **lexicographically smallest array**:
   * Fill blanks with the **smallest possible value** consistent with minimizing the sum.

---

## Approach

1. For each test case, read **n** and array **a**.
2. Identify the **minimum and maximum known values** in the array.
3. Replace all `-1` values with:
   * `0` if the first element is `-1`.
   * Or the value of the nearest known element to minimize absolute difference.
4. Compute the minimal absolute sum as `a[n] - a[1]` after filling.
5. Output the minimal sum and the filled array.

---

## Algorithm

1. Input integer **n** and array `a[1…n]`.
2. Identify positions of blanks (`-1`).
3. For each blank, fill with **0** or the nearest known value.
4. Compute `sum = a[n] - a[1]`.
5. Output `|sum|`.
6. Output the filled array.

---

## Explanation

Because the sum of differences collapses to the difference between the last and first elements, we can ignore intermediate values except for lexicographical ordering. Filling blanks with **0** or nearest known numbers achieves both **minimum absolute sum** and **lexicographical minimality**.

---

## Complexity Analysis

* **Time Complexity:** `O(n)` per test case
* **Space Complexity:** `O(n)` — storing the array

---

## Examples

| Input                     | Output                | Reason                                                   |
|---------------------------|----------------------|---------------------------------------------------------|
| 4<br>2 -1 7 1             | 1<br>2 0 7 1         | Fill `-1` with 0; sum of differences = |1-2| = 1       |
| 4<br>-1 2 4 -1             | 0<br>0 2 4 0         | Fill blanks with 0; sum = 0                             |
| 8<br>2 -1 1 5 11 12 1 -1  | 0<br>2 0 1 5 11 12 1 2 | Fill with 0 and 2 to minimize difference             |

---

## Summary

Minimizing the absolute sum of differences reduces to minimizing the difference between the first and last elements. Filling blanks with the **smallest valid values** achieves the minimum sum and ensures the lexicographically smallest array.
