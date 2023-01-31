"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generates an array of page numbers for pagination
 *
 * @param {GetPageArrayParams} params - The input parameters for the function
 * @param {number} params.current_page - The current page number
 * @param {number} params.total_page - The total number of pages
 * @throws {Error} Will throw an error if either current_page or total_page are missing or invalid
 * @returns {number[]} An array of page numbers
 */
const get_page_array = ({ current_page, total_page }) => {
    if (!current_page || !total_page)
        throw new Error('Invalid params');
    const res_arr = [];
    if (total_page < 10)
        for (let i = 1; i < total_page + 1; i++)
            res_arr.push(i);
    if (total_page >= 10) {
        if (current_page - 4 <= 0)
            res_arr.push(1, 2, 3, 4, 5, 6, 7, 8, 9);
        if (current_page + 4 >= total_page) {
            let i = total_page;
            while (res_arr.length < 9) {
                res_arr.push(i);
                i--;
            }
            res_arr.reverse();
        }
        if (current_page - 4 > 0 && current_page + 4 < total_page) {
            let i = current_page - 4;
            while (res_arr.length < 9) {
                res_arr.push(i);
                i++;
            }
        }
    }
    return res_arr;
};
exports.default = get_page_array;
