// lib/dictionary.ts
import words from "an-array-of-english-words";

/** Uppercased word set for fast lookups */
export const WORD_SET: Set<string> = new Set(
  (words as string[]).map((w) => w.toUpperCase())
);

/** Basic dictionary validator (A–Z only, no spaces/punct.) */
export function isValidWord(input: string) {
  return WORD_SET.has(input.toUpperCase());
}
