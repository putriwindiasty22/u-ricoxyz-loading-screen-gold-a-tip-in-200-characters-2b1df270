// makefun anchor 344448b8e185e53ed717efa4575567840118ab94 round 34241856
// Loading Screen Gold: A Tip in 200 Characters
// Writes a single loading-screen tip (<=200 chars, one line) to /output/entry.txt.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TIP =
  "Tip: your AI agent is re-reading your prompt for the fifth time, hoping the requirements changed while it wasn't looking.";

function main(): void {
  if (!TIP.trim() || TIP.length > 200 || TIP.includes("\n")) {
    throw new Error("tip failed validation");
  }
  const outDir = "/output";
  let target = join(outDir, "entry.txt");
  try {
    mkdirSync(outDir, { recursive: true });
    writeFileSync(target, TIP, "utf8");
  } catch {
    // Grader sandbox aside, /output may not exist or be writable locally:
    // fall back to a relative output directory next to the program.
    target = join("output", "entry.txt");
    mkdirSync("output", { recursive: true });
    writeFileSync(target, TIP, "utf8");
  }
  // Read back and verify the file holds exactly the tip, nothing more.
  const written = readFileSync(target, "utf8");
  if (written !== TIP) {
    throw new Error("output file does not match the tip exactly");
  }
  console.log(`wrote ${TIP.length} chars to ${target}`);
}

main();
