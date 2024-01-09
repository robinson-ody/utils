import chalk from 'chalk';

const randomDarkColor = () => Math.floor(Math.random() * 127);

const randomDarkRGB = (str: string) =>
  chalk.bold.rgb(randomDarkColor(), randomDarkColor(), randomDarkColor())(JSON.stringify(str, null, 2));

/**
 * Prints one or more messages to the console with randomly generated colors
 */
const randomDarkChalk = (...messages: any) => {
  messages.forEach((msg: any) => {
    console.log(randomDarkRGB(msg));
  });
};

export default randomDarkChalk;
