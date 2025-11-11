// lib/dictionary.ts
import words from "an-array-of-english-words";

// Uppercased word set for fast lookups
export const WORD_SET: Set<string> = new Set(
  (words as string[]).map((w) => w.toUpperCase())
);

// Canonical validator
export function isValidWord(input: string) {
  return WORD_SET.has(String(input || "").toUpperCase());
}

// Back-compat for existing imports in the app
export function isValidEnglishWord(input: string) {
  return isValidWord(input);
}

export default { isValidWord, isValidEnglishWord, WORD_SET };
