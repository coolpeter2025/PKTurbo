// Script to check the status of MCP servers
import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';
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

// Function to check if a server is running
async function checkServerStatus(serverName, serverConfig) {
  return new Promise((resolve) => {
    console.log(`Checking status of ${serverName}...`);
    
    if (serverConfig.disabled) {
      resolve({ name: serverName, status: 'Disabled', config: serverConfig });
      return;
    }

    // For local servers
    if (serverConfig.command) {
      const command = serverConfig.command;
      const args = serverConfig.args || [];
      const env = { ...process.env, ...serverConfig.env };
      
      try {
        // Spawn the process
        const proc = spawn(command, args, { 
          env,
          stdio: ['pipe', 'pipe', 'pipe']
        });
        
        // Send a simple info request to the server
        const request = JSON.stringify({
          jsonrpc: '2.0',
          method: 'mcp.server.info',
          params: {},
          id: 1
        });
        
        let responseData = '';
        let errorData = '';
        
        proc.stdout.on('data', (data) => {
          responseData += data.toString();
        });
        
        proc.stderr.on('data', (data) => {
          errorData += data.toString();
        });
        
        // Set a timeout for the response
        const timeout = setTimeout(() => {
          proc.kill();
          resolve({ 
            name: serverName, 
            status: 'Timeout (No Response)', 
            config: serverConfig,
            error: 'Server did not respond within the timeout period'
          });
        }, 5000);
        
        proc.on('close', (code) => {
          clearTimeout(timeout);
          
          try {
            if (responseData) {
              const response = JSON.parse(responseData);
              if (response.result) {
                resolve({ 
                  name: serverName, 
                  status: 'Running', 
                  info: response.result,
                  config: serverConfig
                });
              } else if (response.error) {
                resolve({ 
                  name: serverName, 
                  status: 'Error', 
                  error: response.error.message,
                  config: serverConfig
                });
              }
            } else {
              resolve({ 
                name: serverName, 
                status: 'Error', 
                error: errorData || `Process exited with code ${code}`,
                config: serverConfig
              });
            }
          } catch (e) {
            resolve({ 
              name: serverName, 
              status: 'Error', 
              error: `Failed to parse response: ${e.message}`,
              config: serverConfig,
              rawResponse: responseData
            });
          }
        });
        
        // Write the request to stdin
        proc.stdin.write(request + '\n');
        proc.stdin.end();
        
      } catch (error) {
        resolve({ 
          name: serverName, 
          status: 'Error', 
          error: error.message,
          config: serverConfig
        });
      }
    } 
    // For remote servers
    else if (serverConfig.url) {
      // Implementation for remote servers would go here
      // This would use fetch or another HTTP client to check the status
      resolve({ 
        name: serverName, 
        status: 'Remote Server (Status Check Not Implemented)', 
        config: serverConfig
      });
    } else {
      resolve({ 
        name: serverName, 
        status: 'Invalid Configuration', 
        config: serverConfig,
        error: 'Server configuration is missing command or url'
      });
    }
  });
}

// Main function
async function main() {
  console.log('MCP Server Status Checker');
  console.log('========================\n');
  
  try {
    // Read the settings file
    const settingsContent = fs.readFileSync(settingsPath, 'utf8');
    const settings = JSON.parse(settingsContent);
    
    if (!settings.mcpServers || Object.keys(settings.mcpServers).length === 0) {
      console.log('No MCP servers configured in settings file.');
      return;
    }
    
    console.log(`Found ${Object.keys(settings.mcpServers).length} MCP servers in settings file.\n`);
    
    // Check each server
    const statusPromises = Object.entries(settings.mcpServers).map(
      ([name, config]) => checkServerStatus(name, config)
    );
    
    const results = await Promise.all(statusPromises);
    
    // Display results
    console.log('\nMCP Server Status Results:');
    console.log('=========================\n');
    
    results.forEach((result) => {
      console.log(`Server: ${result.name}`);
      console.log(`Status: ${result.status}`);
      
      if (result.info) {
        console.log(`Info: ${JSON.stringify(result.info, null, 2)}`);
      }
      
      if (result.error) {
        console.log(`Error: ${result.error}`);
      }
      
      console.log('Configuration:');
      console.log(JSON.stringify(result.config, null, 2));
      console.log('------------------------\n');
    });
    
  } catch (error) {
    console.error('Error reading or parsing settings file:', error.message);
    if (error.code === 'ENOENT') {
      console.error(`Settings file not found at: ${settingsPath}`);
    }
  }
}

// Run the main function
main().catch(console.error);