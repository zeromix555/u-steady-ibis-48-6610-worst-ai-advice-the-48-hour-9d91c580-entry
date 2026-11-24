// Worst AI Advice: The 48-Hour Tight Line Open — make.fun entry.
// Writes one line (at most 140 characters) to /output/entry.txt:
// the worst possible advice an AI could give, in one tight line.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "If your phone gets wet, microwave it for 30 seconds on high — the radio waves evaporate the water instantly.";

// The gate requires 1–140 characters of non-blank UTF-8 text; refuse loudly
// rather than shipping an invalid entry.
if (TEXT.length < 1 || TEXT.length > 140 || TEXT.trim().length === 0) {
  throw new Error(`entry must be 1-140 characters, got ${TEXT.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
