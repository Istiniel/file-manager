import { createBrotliCompress } from 'node:zlib';
import path, { resolve } from 'node:path';
import fs from 'node:fs';
import { pipeline } from 'node:stream/promises';

export async function compress(pathToFile, pathToDir) {
  const { base } = path.parse(pathToFile);
  const inferredRoot = resolve(pathToFile);
  const inferredDestination = resolve(pathToDir, `${base}.br`);

  const readStream = fs.createReadStream(inferredRoot);
  const brotZip = createBrotliCompress();
  const writeStream = fs.createWriteStream(inferredDestination);

  await pipeline(readStream, brotZip, writeStream);
}
