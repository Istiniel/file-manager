import path from 'node:path';
import { rename } from 'node:fs/promises';

export async function rn(pathToFile, newName) {
  let inferedPath = path.resolve(pathToFile);
  const { dir } = path.parse(inferedPath);

  const newFilePath = path.resolve(dir, newName);
  await rename(inferedPath, newFilePath);
}
