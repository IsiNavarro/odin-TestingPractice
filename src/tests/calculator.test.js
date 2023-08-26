import { calculator } from '../calculator';

test('add(1,2) equals 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('substract(1,2) equals -1', () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test('divide(1,0) equals "Cannot divide by zero"', () => {
  expect(() => calculator.divide(1, 0)).toThrow('Cannot divide by zero');
});
test('divide(1,2) equals 0.5', () => {
  expect(calculator.divide(1, 2)).toBe(0.5);
});
test('multiply(1,2) equals 2', () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});
