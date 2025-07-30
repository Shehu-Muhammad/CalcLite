import { promises as fs } from 'fs';

function checkForClearHistoryFlag() {
    return process.argv.some(arg => ['--clear', '--clear-history'].includes(arg));
}
async function clearHistory() {
    try {
        await fs.writeFile("history.log", "");
        console.log("✅ History cleared successfully.")
    } catch (err) {
        console.error("❌ Failed to clear history:", err.message);
    }
    
}

export { checkForClearHistoryFlag, clearHistory };