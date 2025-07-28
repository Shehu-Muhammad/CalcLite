# 🧮 CalcLite – Command Line Calculator

CalcLite is a simple command-line calculator built with Node.js. It supports basic arithmetic expressions using +, -, *, and /.

> ⚠️ **Note:** This project uses ES modules (`.mjs` files and `"type": "module"` in `package.json`).  
> Requires **Node.js version 12 or higher**.
---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/shehu-muhammad/CalcLite.git
cd CalcLite
```

### 2. Initialize the project
```bash
npm init -y
```

### 3. Run a calculation
```bash
node calc.mjs "2 + 3 * 4"
# Output:
# Answer: 2 + 3 * 4 = 14
```

Or you can run:
```bash
node calc.mjs 2 + 3 * 4
# Output:
# Answer: 2 + 3 * 4 = 14
```

### 💻 REPL Mode (Interactive)
You can also run CalcLite in interactive REPL mode, which allows you to enter multiple math expressions line-by-line.

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

## 🔧 Optional Setup
To add a script shortcut:

1. Open package.json

2. Add:
```json
"scripts": {
  "start": "node calc.mjs",
  "test" : "node test/evaluate.test.js"
}
```

Then run:
```bash
npm start -- "5 * (10 - 6)"
```

## 🧪 Running Tests

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

### 📝 Features
- Basic math: +, -, *, /
- Accepts expression as a string input
- REPL mode for interactive calculations
- (Coming Soon) history log

### 📦 Dependencies
- **None** – pure Node.js

📄 License
MIT


---




