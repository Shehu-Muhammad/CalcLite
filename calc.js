// Collect all args from index 2
let input = process.argv.slice(2).join(" ");

// Allowed characters
const allowed = /^[0-9+\-*/().\s]+$/;

// Checks to make sure the expression is included
if (!input) {
  console.error("Please provide an expression to evaluate, e.g.: node calc.js \"2 + 3 * 4\"");
  process.exit(1);
}

// Checks to make sure the expression contains only valid characters
if (!allowed.test(input)) {
  console.error("Expression contains invalid characters.");
  process.exit(1);
}

// Tries to evaluate the expression
try {
    const result = Function(`"use strict"; return (${input})`)();
    console.log(`${input} = ${result}`);
// Throws an error if it cannot evaluate the expression
} catch (error) {
    console.error("Invalid expression.");
    process.exit(1);
}