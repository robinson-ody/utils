/**
 * Removes thousand separators and omits decimal places from a number string
 */
const plain_num = (input_number: string): number => {
  const output_number = input_number.replace(/[^0-9]/g, '');
  return Number(output_number);
};

export { plain_num };
