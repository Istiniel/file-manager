export const greetUser = () => {
  let result = process.argv
    .slice(2)
    .map((arg) => arg.split('='))
    .filter((arg) => arg[0].includes('username'))
    .flat();

  if (result.length > 0) {
    console.log(`Welcome to the File Manager, ${result[1]}!`);
  } else {
    console.log(`Welcome to the File Manager, Traveler!`);
  }

  return result[1];
};
