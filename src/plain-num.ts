/**
 * Removes thousand separators and omits decimal places from a number string
 */
const plainNumber = (inputNumber: string): number => {
  const plainNumber = inputNumber.replace(/[^0-9]/g, '');
  return Number(plainNumber);
};

export default plainNumber;
