import { checkForReplMode, replMode } from './src/repl.js';
import { checkInput, checkAllowedCharacters } from './src/validate.js';
import { evaluateInput } from './src/evaluate.js';
import { getDate } from './src/getDate.js';
import { logHistory } from './src/logHistory.js';
import { showHistory, checkForHistoryFlag } from './src/showHistory.js';
import { checkForClearHistoryFlag, clearHistory } from './src/clearHistory.js';

// Collect all args from index 2
let input = process.argv.slice(2).join(' ');

(function main() {
  const repl_mode = checkForReplMode();
  const date = getDate();
  const historyFlag = checkForHistoryFlag();
  const clearFlag = checkForClearHistoryFlag();
  if (historyFlag) {
    showHistory();
  } else if (clearFlag) {
    clearHistory();
  } else if (repl_mode) {
    replMode();
  } else {
    try {
      checkInput(input);
      checkAllowedCharacters(input);
      const result = evaluateInput(input);
      const logEntry = `[${date}] Answer: ${input} = ${result}`;
      logHistory(logEntry);
      console.log(logEntry);
    } catch (err) {
      const logEntry = `[${date}] Error: ${err.message}`;
      logHistory(logEntry);
      console.error(logEntry);
      process.exit(1);
    }
  }
})();
