# Way Too Long Words – Explanation

## Problem Statement

You are given **n words**. For each word:

* If its length is **greater than 10**, shorten it.
* Otherwise, leave it unchanged.

The shortened form of a word is created by:
* Keeping the **first letter**
* Replacing the middle letters with the **count of omitted letters**
* Keeping the **last letter**

---

## Idea Behind the Solution

Long words can be abbreviated without losing meaning by:
* Preserving the first and last characters
* Counting how many characters are removed in between

If a word is short (length ≤ 10), no abbreviation is needed.

---

## Approach

1. Read integer **n**.
2. For each word:
   * Check its length.
   * If the length is greater than 10:
     * Print first character + (length − 2) + last character.
   * Otherwise, print the word as it is.

---

## Algorithm

1. Input integer **n**.
2. Loop **n** times:
   1. Input string **s**.
   2. If `length(s) > 10`:
      * Output `s[0] + (length(s) − 2) + s[last]`.
   3. Else output **s**.

---

## Explanation

For long words, the middle characters are replaced with their count, making the word shorter and easier to read. Short words remain unchanged because abbreviating them provides no benefit.

---

## Complexity Analysis

* **Time Complexity:** `O(n)` — each word is processed once.
* **Space Complexity:** `O(1)` — no extra space is required.

---

## Examples

| Input | Output |
|-------|--------|
| localization | l10n |
| word         | word |
| internationalization | i18n |

---

## Summary

This problem demonstrates simple string manipulation. By checking the word length and applying abbreviation rules, we can efficiently generate the required output.
