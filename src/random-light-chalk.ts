import chalk from 'chalk';

const randomLightColor = () => Math.floor(Math.random() * 127 + 127);

const randomLightRGB = (str: string) =>
  chalk.bold.rgb(randomLightColor(), randomLightColor(), randomLightColor())(JSON.stringify(str, null, 2));

/**
 * Prints one or more messages to the console with randomly generated colors
 */
const randomLightChalk = (...messages: any) => {
  messages.forEach((msg: any) => {
    console.log(randomLightRGB(msg));
  });
};

export default randomLightChalk;
