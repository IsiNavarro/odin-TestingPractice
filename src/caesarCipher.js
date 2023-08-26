export function caesarCipher(inputString, shiftFactor) {
  return inputString
    .split('')
    .map((char) => shiftChar(char, shiftFactor))
    .join('');
}

function shiftChar(char, shiftFactor) {
  const isUpperCase = char === char.toUpperCase();

  char = char.toLowerCase();
  const charCode = char.charCodeAt(0);

  if (charCode >= 97 && charCode <= 122) {
    let shiftedCharCode = charCode + shiftFactor;

    if (shiftedCharCode > 122) {
      shiftedCharCode = shiftedCharCode - 26;
    } else if (shiftedCharCode < 97) {
      shiftedCharCode = shiftedCharCode + 26;
    }

    char = String.fromCharCode(shiftedCharCode);

    if (isUpperCase) {
      char = char.toUpperCase();
    }
  }

  return char;
}
