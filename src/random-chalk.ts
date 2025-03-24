import chalk from 'chalk';

const random_light_color = () => Math.floor(Math.random() * 127 + 127);

const random_light_rgb = (str: any) => {
  if (typeof str !== 'string') str = JSON.stringify(str, null, 2);
  return chalk.bold.rgb(random_light_color(), random_light_color(), random_light_color())(str);
};

/**
 * Prints one or more messages to the console with randomly generated colors
 * The colors are light, so they are suitable for dark backgrounds.
 */
const random_chalk = (...messages: any) => {
  messages.forEach((msg: any) => {
    console.log(random_light_rgb(msg));
  });
};

export { random_chalk };
