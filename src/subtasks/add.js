import { resolve } from 'node:path';
import { writeFile } from 'node:fs/promises';

export async function add(fileName) {
  const pathToFile = resolve(process.cwd(), fileName);
  await writeFile(pathToFile, `new file: ${fileName}`);
}
