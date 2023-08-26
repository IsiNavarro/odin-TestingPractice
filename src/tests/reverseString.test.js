import { reverseString } from '../reverseString';

test('hello -> olleh', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('world -> dlrow', () => {
  expect(reverseString('world')).toBe('dlrow');
});
