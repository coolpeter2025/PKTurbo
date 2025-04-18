// Script to fix the Git MCP server configuration
import fs from 'fs';
import path from 'path';
import os from 'os';
import { fileURLToPath } from 'url';

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the MCP settings file
const settingsPath = path.join(
  process.env.APPDATA || 
  (process.platform === 'darwin' ? 
    path.join(process.env.HOME, 'Library/Application Support') : 
    path.join(process.env.HOME, '.config')),
  'Code', 'User', 'globalStorage', 'saoudrizwan.claude-dev', 'settings', 'cline_mcp_settings.json'
);

// Function to update the Git MCP server configuration
async function fixGitMcpServer() {
  console.log('Fixing Git MCP Server...');
  console.log(`Settings file path: ${settingsPath}`);
  
  try {
    // Read the settings file
    const settingsContent = fs.readFileSync(settingsPath, 'utf8');
    const settings = JSON.parse(settingsContent);
    
    const gitServerKey = 'github.com/modelcontextprotocol/servers/tree/main/src/git';
    
    if (!settings.mcpServers || !settings.mcpServers[gitServerKey]) {
      console.log('Git MCP server not found in settings.');
      return;
    }
    
    // Update the Git server configuration
    // The error shows that the server is expecting a different protocol version
    // Let's update the configuration to match the expected format
    const gitServer = settings.mcpServers[gitServerKey];
    
    // Update the command and args
    // The error suggests that the server is using a newer MCP protocol version
    // Let's make sure we're using the correct command and arguments
    gitServer.command = 'python';
    gitServer.args = [
      '-m',
      'mcp_server_git',
      '--repository',
      // Use a valid repository path - update this to a real repository path on your system
      path.join(os.homedir(), 'Desktop', 'Working Copy for Verscel')
    ];
    
    // Add any necessary environment variables
    gitServer.env = {
      ...gitServer.env,
      // Add any required environment variables here
      MCP_PROTOCOL_VERSION: '0.1.0'
    };
    
    // Write the updated settings back to the file
    fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 2), 'utf8');
    
    console.log('✅ Git MCP server configuration updated successfully.');
    
  } catch (error) {
    console.error('Error updating Git MCP server configuration:', error.message);
    if (error.code === 'ENOENT') {
      console.error(`Settings file not found at: ${settingsPath}`);
    }
  }
}

// Run the update function
fixGitMcpServer().catch(console.error);