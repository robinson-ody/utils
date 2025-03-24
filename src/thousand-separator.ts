interface ThousandSeparatorParams {
  val: string | number;
  empty_placeholder?: string;
  separator?: string;
  decimal_separator?: string;
}

/**
 * Adds thousand separators to a given number or string
 *
 * @param {ThousandSeparatorParams} params - The input parameters for the function
 * @param {string | number} params.numbers - The number or string to be formatted
 * @param {string} [params.empty_placeholder='-'] - The placeholder to use when the numbers parameter is empty or invalid
 * @param {string} [params.separator='.'] - The separator to use between groups of three digits
 * @param {string} [params.decimal_separator=','] - The separator to use for decimals
 * @returns {number | string} The formatted number or empty placeholder
 */
const thousand_separator = (input: string | number | ThousandSeparatorParams): string => {
  let numbers: string | number;
  let separator = '.';
  let decimal_separator = ',';
  let empty_placeholder: string | number = '-';

  if (typeof input === 'object') {
    numbers = input.val;
    separator = input.separator || '.';
    decimal_separator = input.decimal_separator || ',';
    empty_placeholder = input.empty_placeholder || '-';
  } else {
    numbers = input;
  }
  if (!numbers || isNaN(Number(numbers))) return empty_placeholder.toString();

  if (typeof numbers === 'number') numbers = numbers.toString();

  const is_negative = numbers.substring(0, 1) === '-';
  if (is_negative) numbers = numbers.substring(1);

  // Split the number into integer and decimal parts
  const parts = numbers.split('.');
  const integer_part = parts[0];
  const decimal_part = parts.length > 1 ? parts[1] : '';

  let result = '';

  // Process only the integer part with thousand separators
  if (integer_part.length < 4) {
    result = integer_part;
  } else {
    const integer_arr = integer_part.split('').reverse();

    for (let i = 0; i < integer_arr.length; i++) {
      if (i !== 0 && i % 3 === 0) result = separator + result;
      result = integer_arr[i] + result;
    }
  }

  // Add the decimal part if it exists
  if (decimal_part) {
    result = result + decimal_separator + decimal_part;
  }

  if (is_negative) result = '-' + result;
  return result;
};

export { thousand_separator };
