import thousandSeparator from '../thousand-separator';

it('should add thousand separators to a given number or string', () => {
  const input = '1000000';
  const output = thousandSeparator({ numbers: input });
  expect(output).toBe('1.000.000');
});

it('Should add custom separator when provided', () => {
  const input = '1000000';
  const output = thousandSeparator({ numbers: input, separator: ',' });
  expect(output).toBe('1,000,000');
});

it('Should add custom empty placeholder when provided', () => {
  const input = '';
  const output = thousandSeparator({ numbers: input, empty_placeholder: '0' });
  expect(output).toBe('0');
});
