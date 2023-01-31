"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Removes thousand separators and decimals from a number string
 */
const plain_number = (number) => {
    if (number.includes('.'))
        number = number.split('.')[0];
    return +number.replace(/,/g, '');
};
exports.default = plain_number;
