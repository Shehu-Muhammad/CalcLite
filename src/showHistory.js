import { readFile } from 'fs/promises';

function showHistory() {
  (async () => {
    try {
      const content = await readFile('history.log', 'utf-8');
      const lines = content.trim().split('\n');
      console.log('📜 History:');
      lines.forEach((line, idx) => {
        console.log(`${idx + 1}: ${line}`);
      });
    } catch (err) {
      console.error('Could not read history:', err.message);
    }
    process.exit(); // Exit after showing history
  })();
}

function checkForHistoryFlag() {
  return process.argv.includes('--history');
}

export { showHistory, checkForHistoryFlag };
