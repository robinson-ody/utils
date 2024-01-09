import chalk from 'chalk';

const randomDarkColor = () => Math.floor(Math.random() * 127);

const randomDarkRGB = (str: any) => {
  if (typeof str !== 'string') str = JSON.stringify(str, null, 2);
  return chalk.bold.rgb(randomDarkColor(), randomDarkColor(), randomDarkColor())(str);
};

/**
 * Prints one or more messages to the console with randomly generated colors.
 * The colors are dark, so they are suitable for light backgrounds.
 */
const randomDarkChalk = (...messages: any) => {
  messages.forEach((msg: any) => {
    console.log(randomDarkRGB(msg));
  });
};

export default randomDarkChalk;
