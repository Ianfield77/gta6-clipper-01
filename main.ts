// gta6-clipper-01: carry VIDEO.json to the output directory.
//
// The house reads the video itself from the address named in VIDEO.json,
// so this program has one job: copy that file to /output, byte for byte.
// The copy is checked first: the file must be JSON with a url string,
// so a broken VIDEO.json fails loudly here instead of reaching the house.
// Standard library only. No network, no clock, deterministic output.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const source = join(botDir, "VIDEO.json");
const video = readFileSync(source);
const parsed = JSON.parse(video.toString("utf8"));
if (typeof parsed !== "object" || parsed === null || typeof parsed.url !== "string") {
  throw new Error("VIDEO.json must be a JSON object with a url string");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "VIDEO.json"), video);
