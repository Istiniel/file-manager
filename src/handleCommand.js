import { commands } from './static/commands.js';
import * as processes from './subtasks/index.js';
import { showDirName } from './helpers/showDirName.js';

export default async function handleCommand(line) {
  let command = line
    .trim()
    .split(' ')
    .filter((el) => !!el);

  const processName = command[0];
  const args = command.slice(1);

  try {
    if (!commands.includes(processName)) {
      console.log('Invalid input');
    } else {
      await processes[processName](...args);
    }
  } catch (error) {
    // console.log(error.message);
    console.log('Operation failed');
  } finally {
    showDirName();
  }
}
