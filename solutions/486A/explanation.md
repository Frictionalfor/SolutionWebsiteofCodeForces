# Calculating Function – Explanation

## Problem Statement

You are given an integer **n**.  
Define a function **f(n)** as follows:

* Add all **odd numbers** from `1` to `n`
* Subtract all **even numbers** from `1` to `n`

Your task is to compute the value of **f(n)**.

---

## Idea Behind the Solution

Instead of iterating through all numbers:

* Odd numbers contribute **+1**
* Even numbers contribute **−1**

So the result depends on whether **n is even or odd**:

* If **n is even**, positives and negatives cancel out → result is `n / 2`
* If **n is odd**, there is one extra positive → result is `-(n + 1) / 2`

---

## Approach

1. Read the integer **n**.
2. Check whether **n is even or odd**.
3. Apply the corresponding formula.
4. Print the result.

---

## Algorithm

1. Input integer **n**.
2. If `n % 2 == 0`, output `n / 2`.
3. Else output `-(n + 1) / 2`.

---

## Explanation

The problem simplifies when we observe the alternating pattern of addition and subtraction. Pairing odd and even numbers allows us to derive a direct formula, avoiding loops and making the solution efficient.

---

## Complexity Analysis

* **Time Complexity:** `O(1)`
* **Space Complexity:** `O(1)`

---

## Examples

| Input | Output | Reason                              |
|-------|--------|-------------------------------------|
| 1     | -1     | Only one odd number                 |
| 2     | 1      | (1 − 2) = -1 → simplified formula   |
| 3     | -2     | Extra odd number adds imbalance     |
| 4     | 2      | Perfect even cancellation           |

---

## Summary

By recognizing the pattern in odd and even numbers, the problem can be solved using a constant-time mathematical formula instead of iteration.
