import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || join(repoDir, "out");
mkdirSync(outDir, { recursive: true });
const entry = "My desk plant filed for a transfer to the windowsill team, citing 'lack of sunlight and excessive meetings about sunlight'.";
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
