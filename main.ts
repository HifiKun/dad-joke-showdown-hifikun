// Dad Joke Showdown entry.
// Writes one original dad joke to /output/entry.txt, where the sealed
// scorer gates it (1-200 characters) and the judge reads it head to head.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I told my vacuum it was sucking at its job. It said, \"That's literally the job description.\"";

// Refuse to write anything outside the gate instead of submitting
// an invalid entry.
if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`Joke is ${JOKE.length} characters, outside the 1-200 gate.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`Wrote ${JOKE.length} characters to /output/entry.txt`);
