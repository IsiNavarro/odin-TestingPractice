export function capitalize(str) {
  if (str.length === 0) {
    return str; // Return an empty string if input is empty
  }

  const firstChar = str[0].toUpperCase(); // Get the first character and capitalize it
  const restOfString = str.slice(1); // Get the rest of the string

  return firstChar + restOfString; // Concatenate the capitalized first character with the rest of the string
}
