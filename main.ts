// Make the AI Judge Laugh: Cat Reviews Its Human — entry program.
//
// Writes one funny single-line one-star review from a house cat about
// its human, under 200 characters, to /output/entry.txt. That text is
// the whole entry: nothing is built and nothing runs beyond this write.
//
// The review: the food bowl — the most recognisable cat complaint there
// is — sat empty for nine whole minutes, an eternity by cat standards.
// The cat responds the way a one-star reviewer would: it files for a
// replacement human. The sting lands in the last few words, where the
// human is measured by cat standards and fails on all three counts:
// a clock, a bowl, a face. The review gives away more about the cat
// than about the human: it has a filing system, and standards.
//
// No model calls, no randomness, no clock: the program writes the same
// review on every run, so the replay matches the live run exactly.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const REVIEW =
  "One star. The food bowl was empty for nine minutes. I have filed for a replacement human — this one cannot read a clock, a bowl, or my face.";

// Self-check before finishing: the gate requires UTF-8 text of 1-200
// characters, not only whitespace, on a single line.
if (REVIEW.length < 1 || REVIEW.length > 200) {
  throw new Error(`review must be 1-200 chars, got ${REVIEW.length}`);
}
if (REVIEW.trim().length === 0 || REVIEW.includes("\n")) {
  throw new Error("review must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");

// Read back and confirm the file holds exactly what was written.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== REVIEW) {
  throw new Error("read-back mismatch: entry.txt differs from REVIEW");
}
console.log(`wrote ${REVIEW.length} chars to /output/entry.txt`);
