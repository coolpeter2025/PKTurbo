// Script to check fetch-mcp server status
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

console.log('Checking fetch-mcp server status...');

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to MCP settings
const settingsPath = path.join(
  process.env.APPDATA || 
  (process.platform === 'darwin' ? 
    path.join(process.env.HOME, 'Library/Application Support') : 
    path.join(process.env.HOME, '.config')),
  'Code/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json'
);

console.log(`Looking for settings at: ${settingsPath}`);

// Check if settings exist
if (fs.existsSync(settingsPath)) {
  console.log('MCP settings file found.');
  try {
    const settings = JSON.parse(fs.readFileSync(settingsPath, 'utf8'));
    
    if (settings.mcpServers && settings.mcpServers['github.com/zcaceres/fetch-mcp']) {
      const fetchMcp = settings.mcpServers['github.com/zcaceres/fetch-mcp'];
      console.log('fetch-mcp server configuration:');
      console.log(JSON.stringify(fetchMcp, null, 2));
      
      // Check if the start script exists
      const scriptPath = fetchMcp.args[0];
      console.log(`Checking if script exists at: ${scriptPath}`);
      
      if (fs.existsSync(scriptPath)) {
        console.log('Script file exists.');
        
        // Check node_modules for required dependencies
        const fetchMcpDir = path.dirname(scriptPath);
        const nodeModulesPath = path.join(fetchMcpDir, 'node_modules');
        
        if (fs.existsSync(nodeModulesPath)) {
          console.log('node_modules directory exists.');
          
          // Check for key dependencies
          const deps = ['ts-node', '@modelcontextprotocol/sdk', 'jsdom', 'turndown'];
          const missingDeps = [];
          
          for (const dep of deps) {
            const depPath = path.join(nodeModulesPath, dep);
            if (!fs.existsSync(depPath)) {
              missingDeps.push(dep);
            }
          }
          
          if (missingDeps.length > 0) {
            console.log(`Missing dependencies: ${missingDeps.join(', ')}`);
          } else {
            console.log('All required dependencies found.');
          }
        } else {
          console.log('node_modules directory not found. Dependencies may not be installed.');
        }
        
        // Try to run the script
        console.log('Attempting to run the start script...');
        const process = spawn('node', [scriptPath], { shell: true });
        
        process.stdout.on('data', (data) => {
          console.log(`Script output: ${data}`);
        });
        
        process.stderr.on('data', (data) => {
          console.error(`Script error: ${data}`);
        });
        
        // Kill after 5 seconds
        setTimeout(() => {
          console.log('Test complete, stopping script...');
          process.kill();
        }, 5000);
      } else {
        console.log('Script file not found!');
      }
    } else {
      console.log('fetch-mcp server configuration not found in settings.');
    }
  } catch (error) {
    console.error('Error reading settings file:', error);
  }
} else {
  console.log('MCP settings file not found!');
}

console.log('\nSuggested troubleshooting steps:');
console.log('1. Ensure all dependencies are installed in the fetch-mcp directory');
console.log('2. Check that the path to the start script is correct in the MCP settings');
console.log('3. Restart VSCode to apply the MCP settings changes');
console.log('4. Ensure the fetch-mcp server code is properly set up for the MCP protocol');
