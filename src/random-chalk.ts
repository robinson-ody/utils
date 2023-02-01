import chalk from 'chalk';

const randomColor = () => Math.floor(Math.random() * 255);
const randomRGB = (str: string) => chalk.bold.rgb(randomColor(), randomColor(), randomColor())(str);

/**
 * Prints one or more messages to the console with randomly generated colors
 */
const randomChalk = (...messages: any) => {
  messages.forEach((msg: any) => {
    console.log(randomRGB(msg));
  });
};

export default randomChalk;
