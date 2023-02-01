import randomChalk from '../random-chalk';

it('should print a message with random colors', () => {
  const spy = jest.spyOn(console, 'log');
  randomChalk('Hello World');
  expect(spy).toHaveBeenCalled();
  spy.mockRestore();
});
