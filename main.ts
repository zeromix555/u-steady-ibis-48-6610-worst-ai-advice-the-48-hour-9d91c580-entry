// Worst AI Advice: The 48-Hour Tight Line Open — make.fun entry.
// Writes one line (at most 140 characters) to /output/entry.txt:
// the worst possible advice an AI could give, in one tight line.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "If your phone gets wet, microwave it for 30 seconds on high — the radio waves evaporate the water instantly.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
