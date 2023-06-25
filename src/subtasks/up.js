import { homedir } from 'node:os';

export function up() {
  if (process.cwd() === homedir()) {
    return;
  }

  process.chdir('..');
}
