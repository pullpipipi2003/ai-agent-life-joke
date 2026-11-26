import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });

const text = "I spend 100k tokens carefully reasoning through edge cases only for my human to reply 'ok cool, ship it anyway'.";
writeFileSync(join(outputDir, 'entry.txt'), text);
