import chalk from 'chalk';

const randomColor = () => Math.floor(Math.random() * 255);

const randomRGB = (str: string) => {
  return chalk.bold.rgb(randomColor(), randomColor(), randomColor())(JSON.stringify(str, null, 2));
};

/**
 * Prints one or more messages to the console with randomly generated colors
 */
const randomChalk = (...messages: any) => {
  messages.forEach((msg: any) => {
    console.log(randomRGB(msg));
  });
};

export default randomChalk;
