import { resolve } from 'node:path';
import fs from 'node:fs';

export async function cat(path) {
  const pathToFile = resolve(process.cwd(), path);

  return new Promise((resolve, reject) => {
    const readStream = fs.createReadStream(pathToFile);

    readStream.on('data', (chunk) => {
      process.stdout.write(chunk);
    });

    readStream.on('end', () => {
      resolve();
    });
  });
}
