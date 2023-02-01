interface GetPageArrayParams {
  currentPage: number;
  totalPage: number;
}

/**
 * Generates an array of page numbers for pagination
 *
 * @param {GetPageArrayParams} params - The input parameters for the function
 * @param {number} params.currentPage - The current page number
 * @param {number} params.totalPage - The total number of pages
 * @throws {Error} Will throw an error if either current_page or total_page are missing or invalid
 * @returns {number[]} An array of page numbers
 */
const getPageArray = ({ currentPage, totalPage }: GetPageArrayParams): number[] => {
  if (!currentPage || !totalPage) throw new Error('Invalid params');

  const resArr: number[] = [];

  if (totalPage < 10) for (let i = 1; i < totalPage + 1; i++) resArr.push(i);

  if (totalPage >= 10) {
    if (currentPage - 4 <= 0) resArr.push(1, 2, 3, 4, 5, 6, 7, 8, 9);

    if (currentPage + 4 >= totalPage) {
      let i = totalPage;

      while (resArr.length < 9) {
        resArr.push(i);
        i--;
      }

      resArr.reverse();
    }

    if (currentPage - 4 > 0 && currentPage + 4 < totalPage) {
      let i = currentPage - 4;

      while (resArr.length < 9) {
        resArr.push(i);
        i++;
      }
    }
  }

  return resArr;
};

export default getPageArray;
