import { osCommands } from '../static/commands.js';
import { arch } from 'node:process';
import { cpus, EOL, userInfo, homedir } from 'node:os';

export async function os(option) {
  let result;

  if (!option || !osCommands.includes(option)) {
    throw new Error('Wrong os command option');
  }

  switch (option.slice(2)) {
    case 'EOL':
      result = JSON.stringify(EOL);
      break;
    case 'cpus':
      result = cpus().map((core) => {
        const { model, speed } = core;
        return { model, speed: `${speed / 1000} GHz` };
      });
      break;
    case 'homedir':
      result = homedir();
      break;
    case 'username':
      result = userInfo().username;
      break;
    case 'architecture':
      result = arch;
      break;
  }

  console.log(result);
}
