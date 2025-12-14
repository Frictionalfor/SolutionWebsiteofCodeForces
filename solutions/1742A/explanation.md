# Sum – Explanation

## Problem Statement

You are given **three integers**: **a**, **b**, and **c**.  
Your task is to determine whether **any one of them is equal to the sum of the other two**.

If such a condition is satisfied, print **YES**; otherwise, print **NO**.

---

## Idea Behind the Solution

For three numbers, only three sum combinations are possible:

* `a = b + c`
* `b = a + c`
* `c = a + b`

If **any one** of these conditions is true, the answer is **YES**.

---

## Approach

1. Read the three integers **a**, **b**, and **c**.
2. Check all three possible sum conditions.
3. If any condition is true, print **YES**.
4. Otherwise, print **NO**.

---

## Algorithm

1. Input integers **a**, **b**, **c**.
2. If `a == b + c` or `b == a + c` or `c == a + b`, output **YES**.
3. Else output **NO**.

---

## Explanation

Since there are only three numbers, checking all possible ways one number could be the sum of the other two is straightforward. A simple comparison is enough to determine the result.

---

## Complexity Analysis

* **Time Complexity:** `O(1)`
* **Space Complexity:** `O(1)`

---

## Examples

| Input       | Output | Reason                    |
|-------------|--------|---------------------------|
| 1 2 3       | YES    | 3 = 1 + 2                 |
| 3 5 1       | NO     | No valid sum combination  |
| 4 2 2       | YES    | 4 = 2 + 2                 |

---

## Summary

This problem is solved by checking all possible sum relationships between the three numbers. Since the input size is fixed, a constant-time solution works perfectly.
