import { promises as fs } from 'fs';

function logHistory(entry) {
    async function logToFile() {
        try {
            await fs.appendFile('history.log', `${entry}\n`);
        } catch (err) {
            console.error('Failed to log:', err);
        }
    }
    logToFile();
}

export { logHistory };