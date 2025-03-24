interface GetPageArrayParams {
  page: number;
  total_page: number;
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
const get_pagination_array = ({ page, total_page }: GetPageArrayParams): number[] => {
  if (!page || !total_page) throw new Error('Invalid params');
  const res_arr: number[] = [];
  if (total_page < 10) for (let i = 1; i < total_page + 1; i++) res_arr.push(i);

  if (total_page >= 10) {
    if (page - 4 <= 0) res_arr.push(1, 2, 3, 4, 5, 6, 7, 8, 9);

    if (page + 4 >= total_page) {
      let i = total_page;

      while (res_arr.length < 9) {
        res_arr.push(i);
        i--;
      }

      res_arr.reverse();
    }

    if (page - 4 > 0 && page + 4 < total_page) {
      let i = page - 4;

      while (res_arr.length < 9) {
        res_arr.push(i);
        i++;
      }
    }
  }

  return res_arr;
};

export { get_pagination_array };
