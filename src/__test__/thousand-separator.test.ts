import { thousand_separator } from '../thousand-separator';

it('should add thousand separators to a given number or string', () => {
  const input = '1000000';
  const output = thousand_separator({ val: input });
  expect(output).toBe('1.000.000');
});

it('should add custom separator when provided', () => {
  const input = '1000000';
  const output = thousand_separator({ val: input, separator: ',' });
  expect(output).toBe('1,000,000');
});

it('should add custom empty placeholder when provided', () => {
  const input = '';
  const output = thousand_separator({ val: input, empty_placeholder: '0' });
  expect(output).toBe('0');
});

it('should handle negative numbers correctly', () => {
  const input = '-1000000';
  const output = thousand_separator({ val: input });
  expect(output).toBe('-1.000.000');
});

it('Should handle non-numeric input correctly', () => {
  const input = '1000000a';
  const output = thousand_separator({ val: input });
  expect(output).toBe('-');
});

it('should handle decimals correctly', () => {
  const input = '1234567.89';
  const output = thousand_separator({ val: input });
  expect(output).toBe('1.234.567,89');
});
