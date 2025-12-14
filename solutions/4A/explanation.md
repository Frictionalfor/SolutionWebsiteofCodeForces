# Watermelon Problem – Explanation

## Problem Statement

You are given an integer **w**, which represents the weight of a watermelon. The task is to determine whether the watermelon can be divided into **two parts** such that **both parts have even weights**.

---

## Idea Behind the Solution

To split the watermelon into two even parts:

* The total weight must be **even**, because even + even = even.
* If the weight is **odd**, it cannot be divided into two even numbers.
* If the weight is **2**, the only possible split is **1 + 1**, which are odd.

Therefore, the watermelon can be divided only when the weight is **even and greater than 2**.

---

## Approach

1. Read the value of **w**.
2. Check if:

   * **w is even**, and
   * **w is greater than 2**.
3. If both conditions are satisfied, print **"YES"**.
4. Otherwise, print **"NO"**.

---

## Algorithm

1. Input integer **w**.
2. If **w % 2 == 0** and **w > 2**, output **YES**.
3. Else, output **NO**.

---

## Explanation

Even numbers greater than 2 can always be split into two even numbers. Since the problem only asks whether such a split is possible, a simple condition check is sufficient.

---

## Complexity Analysis

* **Time Complexity:** `O(1)` — only one condition check.
* **Space Complexity:** `O(1)` — no extra memory used.

---

## Examples

| Input | Output | Reason                    |
| ----- | ------ | ------------------------- |
| 8     | YES    | Can be split into 4 and 4 |
| 3     | NO     | Odd weight                |
| 2     | NO     | Splits into 1 and 1       |
| 10    | YES    | Can be split into 4 and 6 |

---

## Summary

This problem is a simple example of using conditional logic and basic mathematical properties. Checking parity and minimum value is enough to reach the correct answer.
