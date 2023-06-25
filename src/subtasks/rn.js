import path from 'node:path';
import { rename } from 'node:fs/promises';

export async function rn(pathToFile, newName) {
  let inferredPath = path.resolve(pathToFile);
  const { dir } = path.parse(inferredPath);

  const newFilePath = path.resolve(dir, newName);
  await rename(inferredPath, newFilePath);
}
