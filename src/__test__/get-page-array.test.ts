import { get_pagination_array } from '../get-page-array';

it('should return an array of page numbers', () => {
  expect(get_pagination_array({ page: 1, total_page: 10 })).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(get_pagination_array({ page: 5, total_page: 10 })).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(get_pagination_array({ page: 10, total_page: 10 })).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 10]);
  expect(get_pagination_array({ page: 12, total_page: 20 })).toEqual([8, 9, 10, 11, 12, 13, 14, 15, 16]);
  expect(get_pagination_array({ page: 19, total_page: 20 })).toEqual([12, 13, 14, 15, 16, 17, 18, 19, 20]);
});

it('Should throw an error if either current_page or total_page are missing or invalid', () => {
  expect(() => get_pagination_array({ page: 1, total_page: 0 })).toThrow();
  expect(() => get_pagination_array({ page: 0, total_page: 10 })).toThrow();
  expect(() => get_pagination_array({ page: 0, total_page: 0 })).toThrow();
});
