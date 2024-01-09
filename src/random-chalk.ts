import chalk from 'chalk';

const randomColor = () => Math.floor(Math.random() * 255);

const randomRGB = (str: any) => {
  if (typeof str !== 'string') str = JSON.stringify(str, null, 2);
  return chalk.bold.rgb(randomColor(), randomColor(), randomColor())(str);
};

/**
 * Prints one or more messages to the console with randomly generated colors.
 * This function only recommended for string and object
 * @param messages - One or more messages to print to the console
 * @example
 * ```ts
 * import randomChalk from 'random-chalk';
 * randomChalk('Hello', 'World!');
 * ```
 * @example
 * ```ts
 * import randomChalk from 'random-chalk';
 * randomChalk({ hello: 'world' });
 * ```
 */
const randomChalk = (...messages: any) => {
  messages.forEach((msg: any) => {
    console.log(randomRGB(msg));
  });
};

export default randomChalk;
