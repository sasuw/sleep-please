import { spawn } from 'child_process';

// Run the example script
const exampleProcess = spawn('ts-node', ['example.ts'], {
  stdio: 'inherit'
});

exampleProcess.on('close', (code) => {
  console.log(`Example script exited with code ${code}`);
});