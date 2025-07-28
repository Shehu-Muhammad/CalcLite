import assert from 'assert';
import { checkInput, checkAllowedCharacters } from '../src/validate.js';
import { evaluateInput } from '../src/evaluate.js';
import { checkForReplMode } from '../src/repl.js';

// === Input Validation Tests ===

// Test that empty input throws an error with a clear message
assert.throws(() => checkInput(''), /Please provide/, 'Empty input should throw "Please provide" error');

// Test that valid input does NOT throw an error
assert.doesNotThrow(() => checkInput('1 + 1'), 'Valid input should not throw an error');

// === Allowed Characters Validation Tests ===

// Test that invalid characters cause an error
assert.throws(() => checkAllowedCharacters('2 + abc'), /invalid characters/, 'Input with letters should throw error');

// Test that allowed characters pass validation
assert.doesNotThrow(() => checkAllowedCharacters('2 + 3 * (4 - 1)'), 'Valid characters should pass');

// === Expression Evaluation Tests ===

// Test correct evaluation of basic arithmetic expression
assert.strictEqual(evaluateInput('2 + 3 * 4'), 14, 'Expression "2 + 3 * 4" should evaluate to 14');

// Test evaluation handles division correctly
assert.strictEqual(evaluateInput('10 / 2'), 5, 'Expression "10 / 2" should evaluate to 5')

// Test that invalid expressions throw an error
assert.throws(() => evaluateInput('2 + * 3'), /Invalid expression/, 'Malformed expression should throw error')

// === REPL Tests ===

// Test for true for REPL
assert.strictEqual(checkForReplMode(['node', 'calc.js']), true);

// Test for false for REPL
assert.strictEqual(checkForReplMode(['node', 'calc.js', '2 + 2']), false);

console.log('All tests passed!');


