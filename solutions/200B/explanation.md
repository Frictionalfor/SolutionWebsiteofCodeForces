# Drinks – Explanation

## Problem Statement

You are given an integer **n** representing the number of drinks.  
Each drink contains a certain **percentage of orange juice**.

Your task is to find the **percentage of orange juice** in the final mixture after mixing all the drinks together.

---

## Idea Behind the Solution

When all drinks are mixed:

* The total orange juice is the **sum of individual percentages**.
* The final percentage is the **average** of these values.

So, the answer is simply the **average of all given percentages**.

---

## Approach

1. Read the integer **n**.
2. Read the **n percentage values**.
3. Calculate their sum.
4. Divide the sum by **n**.
5. Print the result.

---

## Algorithm

1. Input integer **n**.
2. Initialize `sum = 0`.
3. For each drink:
   * Input percentage **p**.
   * Add **p** to `sum`.
4. Output `sum / n`.

---

## Explanation

Since all drinks contribute equally to the mixture, the final percentage of orange juice is the average of the individual percentages. No complex logic is required.

---

## Complexity Analysis

* **Time Complexity:** `O(n)` — each drink is processed once.
* **Space Complexity:** `O(1)` — constant extra space.

---

## Examples

| Input            | Output |
|------------------|--------|
| 3<br>50 50 100   | 66.6667 |
| 4<br>0 25 50 75  | 37.5   |

---

## Summary

This problem is a direct application of averaging values. Summing the percentages and dividing by the number of drinks gives the correct result.
