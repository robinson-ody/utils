import { plain_num } from '../plain-num';

it('should remove thousand separators and decimals from a number string', () => {
  expect(plain_num('1.000.000')).toBe(1000000);
  expect(plain_num('1,000,000')).toBe(1000000);
  expect(plain_num('1,000,000.00')).toBe(100000000);
  expect(plain_num('1.000.000,00')).toBe(100000000);
});
