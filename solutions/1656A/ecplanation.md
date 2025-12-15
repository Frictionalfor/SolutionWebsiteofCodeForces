# Good Pairs – Explanation (1656A)

## Problem Statement

You are given an array of **n integers**.  
Your task is to find **two different indices** such that the chosen pair forms a **valid good pair** as required by the problem.

You only need to output **any one valid pair of indices** (1-based).

---

## Idea Behind the Solution

To form a valid pair easily:

* We look for the **smallest element** in the array.
* We also look for the **largest element** in the array.
* Their indices always form a valid answer.

Since the problem allows **any valid pair**, there is no need to check multiple combinations.

---

## Approach

1. Read the value of **n**.
2. Read the array elements.
3. Traverse the array to find:
   * Index of the **minimum element**
   * Index of the **maximum element**
4. Print their indices (1-based).

---

## Algorithm

1. Input integer **n**.
2. Input array **a** of size **n**.
3. Initialize:
   * `minIdx = 0`
   * `maxIdx = 0`
4. Traverse the array:
   * Update `minIdx` if a smaller element is found.
   * Update `maxIdx` if a larger element is found.
5. Output `minIdx + 1` and `maxIdx + 1`.

---

## Explanation

By scanning the array once, we directly locate the smallest and largest values.  
Their positions satisfy the problem requirements, making this approach both **simple and efficient**.

---

## Complexity Analysis

* **Time Complexity:** `O(n)` — single traversal of the array.
* **Space Complexity:** `O(n)` — storing the input array.

---

## Examples

| Input        | Output | Reason                                 |
|-------------|--------|----------------------------------------|
| 1 3 5 2 4   | 1 3    | Smallest and largest elements chosen   |
| 2 2         | 1 2    | Both elements form a valid pair        |

---

## Summary

This problem can be solved by identifying the **minimum and maximum elements** in the array.  
A single pass is enough to find their indices and produce a valid answer.
