// Collect all args from index 2
let input = process.argv.slice(2).join(" ");

/**
 * Determines if REPL mode should be activated.
 *
 * @returns {boolean} True if no expression was passed via CLI.
 */
function checkForReplMode() {
    if (process.argv.length <= 2) {
        repl_mode = true;
    }
    return repl_mode;
}

/**
 * Starts REPL mode, allowing the user to input math expressions line by line.
 * Type "exit" to terminate.
 */
function replMode() {
    const readline = require('readline');

    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Calc> '
    });

    rl.prompt();

    rl.on('line', (line) => {
        if (line.trim().toLowerCase() === 'exit') {
            rl.close();
        }
        try {
            checkInput(line);
            checkAllowedCharacters(line);
            evaluateInput(line);
        } catch (err) {
            console.error(err.message);
        }
        rl.prompt();
    }).on('close', () => {
        console.log('Exiting...');
        process.exit(0);
    });
}

/**
 * Validates that an input expression is provided.
 *
 * @param {string} input - The math expression to evaluate.
 * @throws {Error} If no input is provided.
 */
function checkInput(input) {
    if (!input) {
        throw new Error("Please provide an expression to evaluate, e.g.: node calc.js \"2 + 3 * 4\"");
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
        throw new Error("Expression contains invalid characters.");
    }
}

/**
 * Evaluates a math expression and logs the result.
 *
 * @param {string} input - The math expression to evaluate.
 * @throws {Error} If the expression is syntactically invalid.
 */
function evaluateInput(input) {
    try {
        const result = Function(`"use strict"; return (${input})`)();
        console.log(`Answer: ${input} = ${result}`);
    } catch (error) {
        throw new Error("Invalid expression.");
    }
}

(function main() {
    const repl_mode = checkForReplMode();
    if (repl_mode) {
        replMode()
    } else {
        try {
            checkInput(input);
            checkAllowedCharacters(input);
            evaluateInput(input);
        } catch (err) {
            console.error(err.message);
            process.exit(1);
        }
    }
})();