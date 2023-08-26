export function analyzeArray(arr) {
  if (arr.length === 0) {
    return {
      average: NaN,
      min: Infinity,
      max: -Infinity,
      length: 0,
    };
  }

  const sum = arr.reduce((acc, num) => acc + num, 0);
  const average = sum / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    average,
    min,
    max,
    length: arr.length,
  };
}
