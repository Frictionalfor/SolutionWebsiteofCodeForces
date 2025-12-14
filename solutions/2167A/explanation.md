# Square? – Explanation

## Problem Statement

You are given an integer **n**.  
Your task is to determine whether **n is a perfect square**.

If **n** can be represented as `x × x` for some integer **x**, print **YES**; otherwise, print **NO**.

---

## Idea Behind the Solution

A number is a **perfect square** if:

* Its square root is an **integer**.

So, by computing the square root of **n** and checking whether squaring it again gives **n**, we can decide the answer.

---

## Approach

1. Read the integer **n**.
2. Compute `x = floor(sqrt(n))`.
3. Check if `x × x == n`.
4. If true, print **YES**; otherwise, print **NO**.

---

## Algorithm

1. Input integer **n**.
2. Compute `x = ⌊√n⌋`.
3. If `x × x == n`, output **YES**.
4. Else output **NO**.

---

## Explanation

Taking the square root reduces the problem to a simple integer check. If squaring the integer part of the square root gives back the original number, then the number is a perfect square.

---

## Complexity Analysis

* **Time Complexity:** `O(1)`
* **Space Complexity:** `O(1)`

---

## Examples

| Input | Output | Reason                    |
|-------|--------|---------------------------|
| 4     | YES    | 2 × 2 = 4                 |
| 9     | YES    | 3 × 3 = 9                 |
| 8     | NO     | No integer square root    |
| 1     | YES    | 1 × 1 = 1                 |

---

## Summary

This problem checks a basic mathematical property. By verifying whether the square root of a number is an integer, we can efficiently determine if the number is a perfect square.
