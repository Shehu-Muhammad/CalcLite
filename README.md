# 🧮 CalcLite – Command Line Calculator

CalcLite is a simple command-line calculator built with Node.js. It supports basic arithmetic expressions using +, -, *, and /.

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
node calc.js "2 + 3 * 4"
# Output:
# Answer: 2 + 3 * 4 = 14
```

### 💻 REPL Mode (Interactive)
You can also run CalcLite in interactive REPL mode, which allows you to enter multiple math expressions line-by-line.

🔁 Start REPL mode:
```bash
node calc.js
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
  "start": "node calc.js"
}
```

Then run:
```bash
npm start -- "5 * (10 - 6)"
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

Would you like me to generate the starter `calc.js` file that works with this README?



