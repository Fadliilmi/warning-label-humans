import { mkdirSync, writeFileSync } from "node:fs";

// The safety warning label that should come printed on every human being.
// One line, one idea: the fries never make it to the table, and the denial
// arrives with the evidence still on the human's face.
const LINE =
  "WARNING: This human eats the fries before reaching the table, then denies it with sauce still on their face.";

// Count real characters (code points), not UTF-16 units, so the gate's
// 1–160 character limit is checked the same way the entry is read.
const charCount = [...LINE].length;
if (charCount < 1 || charCount > 160) {
  throw new Error(`entry must be 1-160 characters, got ${charCount}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

const OUTPUT_PATH = "/output/entry.txt";
mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, LINE, "utf8");
