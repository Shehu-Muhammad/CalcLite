import { checkInput, checkAllowedCharacters } from './validate.js';
import { evaluateInput } from './evaluate.js';
import readline from 'readline';

/**
 * Determines if REPL mode should be activated.
 *
 * @returns {boolean} True if no expression was passed via CLI.
 */
function checkForReplMode() {
    if (process.argv.length <= 2) {
        return true;
    }
}

/**
 * Starts REPL mode, allowing the user to input math expressions line by line.
 * Type "exit" to terminate.
 */
function replMode() {
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

export { checkForReplMode, replMode };