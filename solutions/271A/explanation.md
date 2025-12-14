# Beautiful Year – Explanation

## Problem Statement

You are given an integer **y** representing a year.  
Your task is to find the **next year after y** in which **all digits are distinct**.

---

## Idea Behind the Solution

A year is considered **beautiful** if:
* All four digits are **different**.

Starting from the next year:
* Increment the year by 1.
* Check whether all digits are unique.
* Stop when a beautiful year is found.

---

## Approach

1. Read the integer **y**.
2. Start checking from **y + 1**.
3. For each year:
   * Extract its digits.
   * Check if all digits are distinct.
4. Print the first year that satisfies the condition.

---

## Algorithm

1. Input integer **y**.
2. Set `current = y + 1`.
3. While true:
   * Convert `current` to digits.
   * If all digits are unique, output `current` and stop.
   * Else increment `current`.

---

## Explanation

Since the number of possible years is small, a brute-force approach works well. By checking each subsequent year and verifying digit uniqueness, we can quickly find the next beautiful year.

---

## Complexity Analysis

* **Time Complexity:** `O(1)` — at most a few thousand checks.
* **Space Complexity:** `O(1)` — only digit storage.

---

## Examples

| Input | Output | Reason                          |
|-------|--------|---------------------------------|
| 1987  | 2013   | All digits are distinct         |
| 2013  | 2014   | Next year with unique digits    |
| 2023  | 2031   | 2031 has all unique digits      |

---

## Summary

This problem is solved by iterating through years and checking digit uniqueness. A simple loop and digit comparison are sufficient to reach the correct answer.
