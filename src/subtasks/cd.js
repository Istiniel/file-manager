import path from 'node:path';
import { up } from './index.js';

export async function cd(relatedPath) {
  if (path.isAbsolute(relatedPath)) {
    process.chdir(relatedPath);
    return;
  }

  if (relatedPath === '..' || relatedPath === '../') {
    up();
    return;
  }

  process.chdir(path.join(process.cwd() + relatedPath));
}
