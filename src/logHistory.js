import { promises as fs } from 'fs';

async function logHistory(entry) {
    try {
        const count = await checkCount();
        if (count >= 5) {
            await replaceFirstLine(entry);
        } else {
            await fs.appendFile('history.log', `${entry}\n`);
        }
    } catch (err) {
        console.error('Failed to log:', err);
    }
}

async function checkCount() {
    const content = await fs.readFile("history.log", "utf-8");
    const lines = content.split("\n").filter(line => line.trim() !== "");
    return lines.length;
}

async function replaceFirstLine(entry) {
    const content = await fs.readFile("history.log", "utf-8");
    const lines = content.split("\n").filter(line => line.trim() != "");
    lines.shift(); // remove the first line
    lines.push(entry); // add new entry at the end
    await fs.writeFile("history.log", lines.join("\n") + "\n");
}

export { logHistory };