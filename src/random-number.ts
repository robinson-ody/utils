interface RandomNumberParams {
  min: number;
  max: number;
}

/**
 * The min and max is inclusive.
 * Meaning that if you input min: 1 and max: 5,
 * the result is one of 1, 2, 3, 4, 5
 */
const get_rand_num = ({ min, max }: RandomNumberParams) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export { get_rand_num };
