import { capitalize } from '../capitalize';

test('capitalize -> Capitalize', () => {
  expect(capitalize('capitalize')).toBe('Capitalize');
});
test('empty string', () => {
  expect(capitalize('')).toBe('');
});
