import getPageArray from '../get-page-array';

it('should return an array of page numbers', () => {
  expect(getPageArray({ currentPage: 1, totalPage: 10 })).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(getPageArray({ currentPage: 5, totalPage: 10 })).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(getPageArray({ currentPage: 10, totalPage: 10 })).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 10]);
  expect(getPageArray({ currentPage: 12, totalPage: 20 })).toEqual([8, 9, 10, 11, 12, 13, 14, 15, 16]);
  expect(getPageArray({ currentPage: 19, totalPage: 20 })).toEqual([12, 13, 14, 15, 16, 17, 18, 19, 20]);
});

it('Should throw an error if either current_page or total_page are missing or invalid', () => {
  expect(() => getPageArray({ currentPage: 1, totalPage: 0 })).toThrow();
  expect(() => getPageArray({ currentPage: 0, totalPage: 10 })).toThrow();
  expect(() => getPageArray({ currentPage: 0, totalPage: 0 })).toThrow();
});
