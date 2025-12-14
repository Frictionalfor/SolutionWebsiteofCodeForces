# Elephant – Explanation

## Problem Statement

An elephant wants to reach his friend's house which is **x units** away from his current position.  
In one step, the elephant can move **1, 2, 3, 4, or 5 units** forward.

Your task is to determine the **minimum number of steps** required for the elephant to reach exactly position **x**.

---

## Idea Behind the Solution

To minimize the number of steps:

* The elephant should always take the **largest possible step**.
* The maximum step size is **5**.

So, the problem reduces to:
* Dividing **x** by **5**.
* If there is a remainder, one extra step is needed.

---

## Approach

1. Read the integer **x**.
2. Calculate how many full **5-unit steps** can be taken.
3. If **x** is not divisible by 5, add one more step.
4. Print the total number of steps.

---

## Algorithm

1. Input integer **x**.
2. Compute `steps = x / 5`.
3. If `x % 5 != 0`, increment `steps` by 1.
4. Output `steps`.

---

## Explanation

Taking the largest step repeatedly ensures the minimum number of moves. Any remaining distance less than 5 can be covered in one final step.

---

## Complexity Analysis

* **Time Complexity:** `O(1)`
* **Space Complexity:** `O(1)`

---

## Examples

| Input | Output | Reason                           |
|-------|--------|----------------------------------|
| 5     | 1      | One 5-unit step                  |
| 12    | 3      | 5 + 5 + 2                        |
| 1     | 1      | Single small step                |
| 9     | 2      | 5 + 4                            |

---

## Summary

This problem is solved using a greedy approach. Dividing the distance by 5 and handling the remainder gives the minimum number of steps efficiently.
