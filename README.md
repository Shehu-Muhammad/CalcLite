# 🧮 CalcLite – Command Line Calculator

CalcLite is a simple command-line calculator built with Node.js. It supports basic arithmetic expressions using +, -, \*, and /.

> ⚠️ **Note:** This project uses ES modules (`.mjs` files and `"type": "module"` in `package.json`).  
> Requires **Node.js version 12 or higher**.

---

### 📚 Table of Contents

- [🚀 Getting Started](#getting-started)
- [💻 REPL Mode (Interactive)](#repl-mode-interactive)
- [🔍 View History & Clear History](#view--clear-history)
- [⚙️ Optional Scripts](#️optional-scripts)
- [🧪 Tests](#tests)
- [🛠️ Development Tools](#️development-tools)
- [🔢 Features](#features)
- [📦 Dependencies](#dependencies)
- [📄 License](#license)

---

### 🚀 Getting Started

1. Clone the repo

```bash
git clone https://github.com/shehu-muhammad/CalcLite.git
cd CalcLite
```

2. Initialize the project

```bash
npm init -y
```

3. Verify Node.js version

```shell
node -v
# Should output v12.0.0 or higher
```

4. Run a calculation
   (Quotes are important to avoid shell misinterpretation.)

```bash
node calc.mjs "2 + 3 * 4"
# Output:
# Answer: 2 + 3 * 4 = 14
```

---

### 💻 REPL Mode (Interactive)

You can also run CalcLite in interactive REPL mode, which allows you to enter multiple math expressions, one per line.

🔁 Start REPL mode:

```bash
node calc.mjs
```

You’ll see:

```shell
Calc>
```

Now enter an expression like:

```shell
Calc> 10 / 2 + 3
Answer: 10 / 2 + 3 = 8
```

Type exit to quit:

```shell
Calc> exit
Exiting...
```

---

### 🔍 View & Clear History

CalcLite stores the last 100 calculations with timestamps and any errors encountered.
Note: History shows up to the last 100 entries with timestamps.

```bash
node calc.mjs --history
```

Example output:

```shell
📜 History:
1: [2025-07-29 19:16:44] Answer: 3 * 2 = 6
2: [2025-07-29 19:16:44] Answer: 1 + 1 = 2
3: [2025-07-29 19:16:44] Answer: 6 * 7 = 42
4: [2025-07-29 19:24:22] Answer: 5 * 9 = 45
5: [2025-07-29 19:35:52] Error: Expression contains invalid characters.
```

If you’ve added the script to your package.json, you can simply run:

```bash
npm run history
```

---

### 🧹 Clear History

To clear the history log (this action is irreversible), use either:

```bash
node calc.mjs --clear
# or
node calc.mjs --clear-history
```

You'll see:

```shell
✅ History cleared successfully.
```

If you've added the script:

```bash
npm run clear
```

---

### ⚙️ Optional Scripts

To add script shortcuts:

1. Open `package.json`

2. Add the following under `"scripts"`:

```json
"scripts": {
  "start": "node calc.mjs",
  "test" : "node test/evaluate.test.js",
  "history": "node calc.mjs --history",
  "clear": "node calc.mjs --clear"
}
```

Then use:

| Action            | Command                       |
| ----------------- | ----------------------------- |
| Run a calculation | `npm start -- "5 * (10 - 6)"` |
| View history      | `npm run history`             |
| Clear history     | `npm run clear`               |

---

### 🧪 Tests

This project includes unit tests in the file `test/evaluate.test.js` to ensure core functions work correctly.

To run tests, simply execute:

```bash
npm test
```

Or run the test file directly:

```bash
node test/evaluate.test.js
```

If all tests pass, you’ll see:

```shell
All tests passed!
```

---

### 🛠️ Development Tools

This project uses the following tools to maintain code quality and consistency:

- **[Prettier](https://prettier.io/)** – Code formatter
  - Check formatting: `npm run format:check`
  - Auto-fix formatting: `npm run format:fix`

- **[ESLint](https://eslint.org/)** – JavaScript linter
  - Run lint checks: `npm run lint`
  - Auto-fix lint issues: `npm run lint:fix`

Both tools run automatically in GitHub Actions as part of the CI pipeline.

---

### 🔢 Features

- Basic Math: +, -, \*, /
- String Input Support
- Interactive REPL Mode
- Persistent History Log

### 📦 Dependencies

- **None** – pure Node.js

## License

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

---
