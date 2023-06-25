import { farewell } from './helpers/farewell.js';
import { greetUser } from './helpers/greetUser.js';
import { homedir } from 'node:os';
import * as readline from 'node:readline/promises';
import { showDirName } from './helpers/showDirName.js';
import handleCommand from './handleCommand.js';

process.chdir(homedir());

const userName = greetUser();
showDirName();

const rl = readline.createInterface(process.stdin, process.stdout);

rl.on('line', (line) => {
  if (line.trim() === '.exit') {
    rl.close();
  }

  handleCommand(line);
});

rl.on('SIGINT', () => {
  rl.close();
});

rl.on('close', () => {
  farewell(userName);
  process.nextTick(() => process.exit());
});
