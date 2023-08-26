import { analyzeArray } from '../analyzeArray';

describe('analyzeArray', () => {
  it('calculates correct analysis for an array of numbers', () => {
    const numbers = [5, 10, 15, 20];
    const analysis = analyzeArray(numbers);

    expect(analysis.average).toBe(12.5);
    expect(analysis.min).toBe(5);
    expect(analysis.max).toBe(20);
    expect(analysis.length).toBe(4);
  });

  it('calculates correct analysis for an array with a single element', () => {
    const numbers = [42];
    const analysis = analyzeArray(numbers);

    expect(analysis.average).toBe(42);
    expect(analysis.min).toBe(42);
    expect(analysis.max).toBe(42);
    expect(analysis.length).toBe(1);
  });

  it('returns correct analysis for an empty array', () => {
    const numbers = [];
    const analysis = analyzeArray(numbers);

    expect(analysis.average).toBe(NaN);
    expect(analysis.min).toBe(Infinity);
    expect(analysis.max).toBe(-Infinity);
    expect(analysis.length).toBe(0);
  });
});
