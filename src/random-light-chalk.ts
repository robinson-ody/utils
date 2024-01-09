import chalk from 'chalk';

const randomLightColor = () => Math.floor(Math.random() * 127 + 127);

const randomLightRGB = (str: any) => {
  if (typeof str !== 'string') str = JSON.stringify(str, null, 2);
  return chalk.bold.rgb(randomLightColor(), randomLightColor(), randomLightColor())(str);
};

/**
 * Prints one or more messages to the console with randomly generated colors
 * The colors are light, so they are suitable for dark backgrounds.
 */
const randomLightChalk = (...messages: any) => {
  messages.forEach((msg: any) => {
    console.log(randomLightRGB(msg));
  });
};

export default randomLightChalk;
