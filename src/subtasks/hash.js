import { resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';

export async function hash(pathToFile) {
  const inferredRoot = resolve(pathToFile);
  const file = await readFile(inferredRoot, { encoding: 'utf8' });

  const result = createHash('sha3-256').update(file).digest('hex');
  console.log(result);
}
