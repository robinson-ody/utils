interface ThousandSeparatorParams {
  numbers: string | number;
  empty_placeholder?: string | number;
  separator?: string;
}

/**
 * Adds thousand separators to a given number or string
 *
 * @param {ThousandSeparatorParams} params - The input parameters for the function
 * @param {string | number} params.numbers - The number or string to be formatted
 * @param {string} [params.empty_placeholder='-'] - The placeholder to use when the numbers parameter is empty or invalid
 * @param {string} [params.separator='.'] - The separator to use between groups of three digits
 * @returns {number | string} The formatted number or empty placeholder
 */
const thousand_separator = ({
  empty_placeholder = '-',
  numbers,
  separator = '.',
}: ThousandSeparatorParams): string | number => {
  if (!numbers || isNaN(Number(numbers))) return empty_placeholder;
  let result = '';
  const numbersArr = numbers.toString().split('').reverse();

  for (let i in numbersArr) {
    if (i !== '0' && Number(i) % 3 === 0) result = separator + result;
    result = numbersArr[i] + result;
  }

  return result;
};

export default thousand_separator;
