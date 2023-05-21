import getRandomNumber from '../random-number';

it('generate a random number', () => {
  const randomNumberArr = [];

  for (let i = 0; i < 100; i++) {
    randomNumberArr.push(getRandomNumber({ min: 1, max: 10 }));
  }

  expect(randomNumberArr).toEqual(expect.arrayContaining([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
});
