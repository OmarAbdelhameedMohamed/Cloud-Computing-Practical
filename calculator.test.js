import { add, subtract, multiply, divide, percent, sqrt } from "./calculator.js";

test("adds numbers correctly", () => {
  expect(add(2, 3)).toBe(5);
});

test("subtracts numbers correctly", () => {
  expect(subtract(10, 4)).toBe(6);
});

test("multiplies numbers correctly", () => {
  expect(multiply(3, 5)).toBe(15);
});

test("divides numbers correctly", () => {
  expect(divide(10, 2)).toBe(5);
});

test("division by zero throws error", () => {
  expect(() => divide(5, 0)).toThrow("Cannot divide by zero");
});

test("percent calculation works correctly", () => {
  expect(percent(50)).toBe(0.5);
  expect(percent(200)).toBe(2);
});

test("sqrt calculation works correctly", () => {
  expect(sqrt(4)).toBe(2);
  expect(sqrt(9)).toBe(3);
  expect(sqrt(0)).toBe(0);
});

test("sqrt of negative number throws error", () => {
  expect(() => sqrt(-9)).toThrow("Cannot calculate square root of negative number");
});
