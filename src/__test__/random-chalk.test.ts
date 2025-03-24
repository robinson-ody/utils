import { random_chalk } from '../random-chalk';

it('should print a message with random colors', () => {
  const spy = jest.spyOn(console, 'log');
  random_chalk('Hello World');
  expect(spy).toHaveBeenCalled();
  spy.mockRestore();
});
