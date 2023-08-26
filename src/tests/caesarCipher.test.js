import { caesarCipher } from '../caesarCipher';

test('caesarCipher shifts characters correctly', () => {
  expect(caesarCipher('abc', 1)).toBe('bcd');
  expect(caesarCipher('xyz', 1)).toBe('yza');
  expect(caesarCipher('ABC', 1)).toBe('BCD');
  expect(caesarCipher('XYZ', 1)).toBe('YZA');
});

test('caesarCipher wraps around from z to a', () => {
  expect(caesarCipher('z', 1)).toBe('a');
  expect(caesarCipher('Z', 1)).toBe('A');
  expect(caesarCipher('helloz', 1)).toBe('ifmmpa');
});

test('caesarCipher keeps the same case', () => {
  expect(caesarCipher('AbC', 1)).toBe('BcD');
  expect(caesarCipher('aBc', 1)).toBe('bCd');
});

test('caesarCipher handles punctuation and spaces', () => {
  expect(caesarCipher('abc! xyz', 1)).toBe('bcd! yza');
  expect(caesarCipher('def, ghi', 3)).toBe('ghi, jkl');
});
