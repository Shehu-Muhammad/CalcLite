import { checkForReplMode, replMode } from "./src/repl.js";
import { checkInput, checkAllowedCharacters } from "./src/validate.js";
import { evaluateInput } from "./src/evaluate.js";
// Collect all args from index 2
let input = process.argv.slice(2).join(" ");

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