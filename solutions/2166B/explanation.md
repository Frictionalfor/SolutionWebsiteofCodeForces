# 2166B – Tab Closing – Explanation

## Problem Statement

You are given an integer **n** representing the number of browser tabs and an integer **k** representing the number of tabs you want to close.

Each tab closing operation closes **exactly one tab**.

Your task is to determine whether it is possible to close **exactly k tabs** starting from **n tabs**.

---

## Idea Behind the Solution

To close tabs:

* You cannot close more tabs than currently open.
* Each operation reduces the tab count by **1**.

So, it is possible **if and only if**:
* **k ≤ n**

---

## Approach

1. Read integers **n** and **k**.
2. Check if **k is less than or equal to n**.
3. If yes, print **YES**.
4. Otherwise, print **NO**.

---

## Algorithm

1. Input integers **n** and **k**.
2. If `k ≤ n`, output **YES**.
3. Else output **NO**.

---

## Explanation

Since each operation closes one tab, you cannot close more tabs than the number currently open. A simple comparison between **k** and **n** is enough to decide the answer.

---

## Complexity Analysis

* **Time Complexity:** `O(1)`
* **Space Complexity:** `O(1)`

---

## Examples

| Input | Output | Reason                          |
|-------|--------|---------------------------------|
| 5 3   | YES    | 3 tabs can be closed from 5     |
| 4 4   | YES    | All tabs can be closed          |
| 2 5   | NO     | Cannot close more than 2 tabs   |

---

## Summary

This problem is a basic condition check. If the number of tabs to be closed does not exceed the number of open tabs, the task is possible.
