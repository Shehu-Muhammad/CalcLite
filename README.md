# 🧮 CalcLite – Command Line Calculator

CalcLite is a simple command-line calculator built with Node.js. It supports basic arithmetic expressions using +, -, *, and /.

> ⚠️ **Note:** This project uses ES modules (`.mjs` files and `"type": "module"` in `package.json`).  
> Requires **Node.js version 12 or higher**.

---

### 📚 Table of Contents
- [🚀 Getting Started](#-getting-started)
- [💻 REPL Mode (Interactive)](#-repl-mode-interactive)
- [🔍 View History](#-view-history)
- [⚙️ Optional Scripts](#️-optional-scripts)
- [🧪 Tests](#-tests)
- [🔢 Features](#-features)
- [📦 Dependencies](#-dependencies)
- [📄 License](#-license)

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

### 🔍 View History
You can see the last 100 expressions that you entered, including results and errors.
Note: History shows up to the last 100 entries with timestamps.
```bash
node calc.mjs --history
```
You'll see something similar to this:
```shell
📜 History:
1: [2025-07-29 19:16:44] Answer: 3 * 2 = 6
2: [2025-07-29 19:16:44] Answer: 1 + 1 = 2
3: [2025-07-29 19:16:44] Answer: 6 * 7 = 42
4: [2025-07-29 19:24:22] Answer: 5 * 9 = 45
5: [2025-07-29 19:35:52] Error: Expression contains invalid characters.
```
Alternatively, if you add the history script to your `package.json`, you can simply run:
```bash
npm run history
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
  "history": "node calc.mjs --history"
}
```

You can run an expression from terminal like:
```bash
npm start -- "5 * (10 - 6)"
```

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


### 🔢 Features
- Basic Math: +, -, *, /
- String Input Support
- Interactive REPL Mode
- Persistent History Log

### 📦 Dependencies
- **None** – pure Node.js

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

---




