/**
 * Validates that an input expression is provided.
 *
 * @param {string} input - The math expression to evaluate.
 * @throws {Error} If no input is provided.
 */
function checkInput(input) {
  if (!input) {
    throw new Error(
      'Please provide an expression to evaluate, e.g.: node calc.js "2 + 3 * 4"'
    );
  }
}

/**
 * Ensures the input expression only contains allowed characters.
 *
 * @param {string} input - The math expression to evaluate.
 * @throws {Error} If disallowed characters are found.
 */
function checkAllowedCharacters(input) {
  const allowed = /^[0-9+\-*/().\s]+$/;

  if (!allowed.test(input)) {
    throw new Error('Expression contains invalid characters.');
  }
}

export { checkInput, checkAllowedCharacters };
