import chalk from 'chalk';

const random_color = () => Math.floor(Math.random() * 255);
const random_rgb = (str: string) => chalk.bold.rgb(random_color(), random_color(), random_color())(str);

/**
 * Prints one or more messages to the console with randomly generated colors
 */
const random_chalk = (...messages: any) => {
  messages.forEach((msg: any) => {
    console.log(random_rgb(msg));
  });
};

export default random_chalk;
