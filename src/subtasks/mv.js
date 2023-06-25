import { resolve } from 'node:path';
import { cp } from './index.js';
import { rm } from 'node:fs/promises';

export async function mv(pathToFile, pathToDir) {
  const inferredRoot = resolve(pathToFile);

  await cp(pathToFile, pathToDir);
  await rm(inferredRoot);
}
