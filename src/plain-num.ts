/**
 * Removes thousand separators and omits decimal places from a number string
 */
const plainNumber = (inputNumber: string): number => {
  const outputNumber = inputNumber.replace(/[^0-9]/g, '');
  return Number(outputNumber);
};

export default plainNumber;
