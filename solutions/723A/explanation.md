# The New Year: Meeting Friends – Explanation

## Problem Statement

You are given integers **a**, **b**, **c**, and **d** representing:

* **a** – Polycarp's minimum sleep time
* **b** – Polycarp's maximum sleep time
* **c** – Time Polycarp spends on each lecture
* **d** – Maximum extra time he can spend after lectures

The task is to determine the **minimum total time** Polycarp needs to **attend lectures and sleep** without violating his sleep requirement.

---

## Idea Behind the Solution

Polycarp wants to meet two conditions:

1. Sleep **at least a hours**, but not more than **b hours**.
2. Attend lectures **c hours** each, and can stay extra **d hours** if needed.

Key observations:

* If **c ≤ d**, he can adjust to meet sleep requirements easily.
* Otherwise, we need to check if the total sleep fits in the allowed range.

---

## Approach

1. Read integers **a, b, c, d**.
2. Check if the condition `c > d + b` holds:
   * If yes → impossible, print **-1**
   * Else → compute minimum total time as `max(a, c - d)`
3. Output the minimum total time.

---

## Algorithm

1. Input integers **a, b, c, d**.
2. If `c > b + d`, output **-1**.
3. Else, output `max(a, c - d)`.

---

## Explanation

The problem ensures Polycarp gets enough sleep while attending lectures. By comparing lecture and extra time against sleep limits, we can find the minimal total time or determine impossibility.

---

## Complexity Analysis

* **Time Complexity:** `O(1)`
* **Space Complexity:** `O(1)`

---

## Examples

| Input | Output | Reason                                     |
|-------|--------|-------------------------------------------|
| 5 8 6 2 | 4    | Adjust sleep to meet lecture time         |
| 3 3 5 1 | -1   | Impossible to meet sleep requirement      |
| 6 10 6 4 | 6    | Sleep requirement satisfied               |

---

## Summary

This problem reduces to checking sleep feasibility against lecture and extra time constraints. A simple comparison gives the correct result efficiently.
