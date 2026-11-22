import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Make the AI judge feel curious — entry text.
// One short text, 270 Unicode code points, 8 short lines in 4 stanzas.
// A letter arrives each morning, in your own hand, that you never wrote.
// The letter names a room that does not exist — and tomorrow's is already here.
const ENTRY = [
  "You find it on the kitchen table each morning.",
  "An envelope. Your name, in your hand.",
  "",
  "You never wrote it.",
  "You open it anyway.",
  "",
  "Inside, one line, in your hand:",
  "\"Don't forget the light in the back room.\"",
  "",
  "There is no back room.",
  "Tomorrow's envelope is already on the table.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
