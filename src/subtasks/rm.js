import { resolve } from 'node:path';
import { rm as remove } from 'node:fs/promises';

export async function rm(pathToFile) {
  const inferredRoot = resolve(pathToFile);

  await remove(inferredRoot);
}
