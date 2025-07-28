/**
 * Evaluates a math expression and logs the result.
 *
 * @param {string} input - The math expression to evaluate.
 * @throws {Error} If the expression is syntactically invalid.
 */
function evaluateInput(input) {
    try {
        return Function(`'use strict'; return (${input})`)();;
    } catch (error) {
        throw new Error('Invalid expression.');
    }
}

export { evaluateInput };