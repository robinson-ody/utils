/**
 * Removes thousand separators and decimals from a number string
 */
const plain_number = (number: string): number => {
  if (number.includes('.')) number = number.split('.')[0];
  return +number.replace(/,/g, '');
};

export default plain_number;
