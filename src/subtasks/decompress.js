import { createBrotliDecompress } from 'node:zlib';
import path, { resolve } from 'node:path';
import fs from 'node:fs';
import { pipeline } from 'node:stream/promises';

export async function decompress(pathToFile, pathToDir) {
  const { name } = path.parse(pathToFile);
  const inferredRoot = resolve(pathToFile);
  const inferredDestination = resolve(pathToDir, name);

  const readStream = fs.createReadStream(inferredRoot);
  const brotZip = createBrotliDecompress();
  const writeStream = fs.createWriteStream(inferredDestination);

  await pipeline(readStream, brotZip, writeStream);
}
