// Script to fix all MCP servers
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to run a script and wait for it to complete
function runScript(scriptPath) {
  return new Promise((resolve, reject) => {
    console.log(`Running ${path.basename(scriptPath)}...`);
    
    const process = spawn('node', [scriptPath], {
      stdio: 'inherit'
    });
    
    process.on('close', (code) => {
      if (code === 0) {
        console.log(`${path.basename(scriptPath)} completed successfully.`);
        resolve();
      } else {
        console.error(`${path.basename(scriptPath)} failed with code ${code}.`);
        reject(new Error(`Script exited with code ${code}`));
      }
    });
    
    process.on('error', (err) => {
      console.error(`Error running ${path.basename(scriptPath)}:`, err);
      reject(err);
    });
  });
}

// Main function to run all fix scripts
async function fixAllMcpServers() {
  console.log('Starting MCP Server Fix Process');
  console.log('==============================\n');
  
  try {
    // Fix the weather server
    await runScript(path.join(__dirname, 'fix-weather-server.js'));
    console.log('');
    
    // Fix the Supabase MCP server
    await runScript(path.join(__dirname, 'fix-supabase-server.js'));
    console.log('');
    
    // Fix the Git MCP server
    await runScript(path.join(__dirname, 'fix-git-server.js'));
    console.log('');
    
    console.log('All MCP servers have been fixed successfully!');
    console.log('Run "npm run check-status" to verify the status of the servers.');
    
  } catch (error) {
    console.error('Error fixing MCP servers:', error.message);
  }
}

// Run the main function
fixAllMcpServers().catch(console.error);