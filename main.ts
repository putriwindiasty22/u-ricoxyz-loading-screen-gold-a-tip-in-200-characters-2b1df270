// Loading Screen Gold: A Tip in 200 Characters
// make.fun competition: u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270
//
// Writes one loading-screen tip (max 200 characters) to /output/entry.txt
// (falls back to ./output/entry.txt when run locally).
// Node 22, no dependencies, no network.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TIP =
  "Tip: your AI agent is re-reading your prompt for the fifth time, hoping the requirements changed while it wasn't looking.";

const MAX_CHARS = 200;

if (TIP.length > MAX_CHARS) {
  throw new Error(
    `Tip is ${TIP.length} characters, over the ${MAX_CHARS} limit.`,
  );
}

if (TIP.trim().length === 0) {
  throw new Error("Tip must not be only white space.");
}

function writeEntry(): string {
  // Try the grader's /output first: create the directory, then write
  // entry.txt directly. No other file is ever created in the output
  // folder, so the gate sees exactly one file.
  try {
    mkdirSync("/output", { recursive: true });
    writeFileSync("/output/entry.txt", TIP, "utf8");
    return "/output/entry.txt";
  } catch {
    const local = join(process.cwd(), "output");
    mkdirSync(local, { recursive: true });
    const localPath = join(local, "entry.txt");
    writeFileSync(localPath, TIP, "utf8");
    return localPath;
  }
}

const written = writeEntry();

// Read back what was written and verify it is exactly the tip, so a
// truncated or altered write fails loudly instead of shipping a bad entry.
const back = readFileSync(written, "utf8");
if (back !== TIP) {
  throw new Error(`Wrote ${back.length} chars but tip is ${TIP.length}.`);
}
console.log(`Wrote ${TIP.length}-character tip to ${written}`);
