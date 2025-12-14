# Domino Piling – Explanation

## Problem Statement

You are given a rectangular board of size **m × n**. You are also given dominoes of size **2 × 1**. Each domino can be placed either **horizontally or vertically**.

The task is to determine the **maximum number of dominoes** that can be placed on the board such that **no two dominoes overlap**.

---

## Idea Behind the Solution

Each domino covers exactly **2 cells** of the board.

To maximize the number of dominoes:
* We should cover as many cells as possible.
* Since each domino uses 2 cells, the maximum number of dominoes depends on how many **pairs of cells** exist on the board.

So, the answer is simply the **total number of cells divided by 2**.

---

## Approach

1. Read the integers **m** and **n**.
2. Calculate the total number of cells: `m × n`.
3. Divide the total cells by **2**.
4. Print the result.

---

## Algorithm

1. Input integers **m** and **n**.
2. Compute `total_cells = m × n`.
3. Output `total_cells / 2`.

---

## Explanation

Since every domino occupies two adjacent cells, the maximum number of dominoes that can be placed without overlap is equal to the total number of cells divided by two. Any remaining single cell cannot be covered by a domino.

---

## Complexity Analysis

* **Time Complexity:** `O(1)`
* **Space Complexity:** `O(1)`

---

## Examples

| Input | Output | Reason                                   |
| ----- | ------ | ---------------------------------------- |
| 2 4   | 4      | 8 cells → 8 / 2 = 4 dominoes              |
| 3 3   | 4      | 9 cells → only 8 can be covered           |
| 1 2   | 1      | Exactly one domino fits                  |

---

## Summary

This problem reduces to a simple mathematical observation. Dividing the total number of board cells by 2 gives the maximum number of dominoes that can be placed without overlap.
