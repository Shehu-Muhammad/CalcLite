// Collect all args from index 2
let input = process.argv.slice(2).join(" ");

/**
 * Checks if a math expression is provided.
 * Throws an error if the expression is missing.
 * @param {string} input - The mathematical expression to evaluate.
 */
function checkInput(input) {
    if (!input) {
        throw new Error("Please provide an expression to evaluate, e.g.: node calc.js \"2 + 3 * 4\"");
    }
}

/**
 * Checks if a math expression only has allowed characters.
 * Throws an error if the expression contains invalid characters.
 * @param {string} input - The mathematical expression to evaluate.
 */
function checkAllowedCharacters(input) {
    const allowed = /^[0-9+\-*/().\s]+$/;

    if (!allowed.test(input)) {
        throw new Error("Expression contains invalid characters.");
    }
}

/**
 * Evaluates a math expression string and logs the result.
 * Throws an error if the expression is invalid.
 * @param {string} input - The mathematical expression to evaluate.
 */
function evaluateInput(input) {
    try {
        const result = Function(`"use strict"; return (${input})`)();
        console.log(`${input} = ${result}`);
    } catch (error) {
        throw new Error("Invalid expression.");
    }
}

(function main() {
    try {
        checkInput(input);
        checkAllowedCharacters(input);
        evaluateInput(input);
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
})();