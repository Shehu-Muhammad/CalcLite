import { checkInput, checkAllowedCharacters } from './validate.js';
import { evaluateInput } from './evaluate.js';
import { getDate } from './getDate.js';
import { logHistory } from './logHistory.js';
import readline from 'readline';

/**
 * Determines if REPL mode should be activated.
 *
 * @returns {boolean} True if no expression was passed via CLI.
 */
function checkForReplMode(argv = process.argv) {
  return argv.length <= 2;
}

/**
 * Starts REPL mode, allowing the user to input math expressions line by line.
 * Type "exit" to terminate.
 */
function replMode() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Calc> ',
  });
  const date = getDate();

  rl.prompt();

  rl.on('line', (line) => {
    if (line.trim().toLowerCase() === 'exit') {
      rl.close();
    }
    try {
      checkInput(line);
      checkAllowedCharacters(line);
      const result = evaluateInput(line);
      const logEntry = `[${date}] Answer: ${line} = ${result}`;
      logHistory(logEntry);
      console.log(logEntry);
    } catch (err) {
      const logEntry = `[${date}] Error: ${err.message}`;
      logHistory(logEntry);
      console.error(logEntry);
    }
    rl.prompt();
  }).on('close', () => {
    console.log('Exiting...');
    process.exit(0);
  });
}

export { checkForReplMode, replMode };
