# A + B Again Problem – Explanation

## Problem Statement

You are given an integer **n**. Your task is to determine the **number of digits** in the given number.

---

## Idea Behind the Solution

To find how many digits a number has:

* Single-digit numbers have **1 digit**.
* Two-digit numbers have **2 digits**.
* Three-digit numbers have **3 digits**, and so on.

By checking the range in which the number falls, we can determine the digit count without converting it to a string.

---

## Approach

1. Read the integer **n**.
2. Check the range of **n**:
   * If **n < 10**, it has **1 digit**.
   * If **n < 100**, it has **2 digits**.
   * If **n < 1000**, it has **3 digits**.
3. Print the corresponding digit count.

---

## Algorithm

1. Input integer **n**.
2. If **n < 10**, output **1**.
3. Else if **n < 100**, output **2**.
4. Else output **3**.

---

## Explanation

The number of digits depends on the magnitude of the number. Comparing the value with powers of 10 allows us to determine the digit count using simple conditional checks.

---

## Complexity Analysis

* **Time Complexity:** `O(1)`
* **Space Complexity:** `O(1)`

---

## Examples

| Input | Output | Reason              |
| ----- | ------ | ------------------- |
| 7     | 1      | Single-digit number |
| 42    | 2      | Two-digit number    |
| 999   | 3      | Three-digit number  |

---

## Summary

This problem can be solved using basic comparisons with powers of 10. A constant-time solution is enough to determine the number of digits.
