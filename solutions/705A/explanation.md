# Hulk – Explanation

## Problem Statement

Hulk is feeling angry and wants to express his emotions using a sentence.  
You are given an integer **n**, which represents the number of emotions.

The sentence must be formed using the following pattern:

* Odd positions: **"I hate"**
* Even positions: **"I love"**
* All parts are connected using **"that"**
* The sentence ends with **"it"**

---

## Idea Behind the Solution

The emotions alternate between **hate** and **love**:

* 1st emotion → hate
* 2nd emotion → love
* 3rd emotion → hate
* and so on…

We construct the sentence step by step and finally replace the last connector with **"it"**.

---

## Approach

1. Read the integer **n**.
2. Loop from `1` to `n`.
3. For each position:
   * Print `"I hate"` if the position is odd.
   * Print `"I love"` if the position is even.
4. Add `" that "` between parts.
5. End the sentence with `" it"`.

---

## Algorithm

1. Input integer **n**.
2. For `i` from `1` to `n`:
   * If `i` is odd, append `"I hate"`.
   * Else append `"I love"`.
   * If `i < n`, append `" that "`.
3. Append `" it"` at the end.
4. Output the sentence.

---

## Explanation

The problem follows a simple alternating pattern. By checking the parity of the index, we can decide whether to print "hate" or "love" and build the sentence accordingly.

---

## Complexity Analysis

* **Time Complexity:** `O(n)`
* **Space Complexity:** `O(1)` — excluding output storage.

---

## Examples

| Input | Output |
|-------|--------|
| 1 | I hate it |
| 2 | I hate that I love it |
| 3 | I hate that I love that I hate it |

---

## Summary

This is a straightforward string construction problem. Alternating words based on position and careful formatting produce the required sentence.
