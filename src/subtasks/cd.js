import path from 'node:path';

export async function cd(relatedPath) {
  const destination = path.resolve(relatedPath);
  if (destination.length < process.cwd().length) {
    return;
  }

  process.chdir(path.resolve(relatedPath));
}
