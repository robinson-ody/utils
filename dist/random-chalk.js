"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const random_color = () => Math.floor(Math.random() * 255);
const random_rgb = (str) => chalk_1.default.bold.rgb(random_color(), random_color(), random_color())(str);
/**
 * Prints one or more messages to the console with randomly generated colors
 */
const random_chalk = (...messages) => {
    messages.forEach((msg) => {
        console.log(random_rgb(msg));
    });
};
exports.default = random_chalk;
