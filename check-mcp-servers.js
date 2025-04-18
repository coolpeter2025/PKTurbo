// Script to check all MCP server configurations
const fs = require('fs');
const path = require('path');

console.log('Checking all MCP server configurations...');

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
    
    console.log('Configured MCP Servers:');
    if (settings.mcpServers) {
      const servers = Object.keys(settings.mcpServers);
      console.log(`Found ${servers.length} servers:`);
      
      servers.forEach(serverName => {
        const server = settings.mcpServers[serverName];
        console.log(`\n=== ${serverName} ===`);
        console.log(`Command: ${server.command}`);
        console.log(`Args: ${JSON.stringify(server.args)}`);
        console.log(`Disabled: ${server.disabled}`);
        
        // Check autoApprove settings
        if (server.autoApprove && Array.isArray(server.autoApprove)) {
          console.log(`AutoApprove: ${server.autoApprove.length} tools`);
          console.log(`  - ${server.autoApprove.join('\n  - ')}`);
        } else {
          console.log('AutoApprove: None');
        }
        
        // Check environment variables
        if (server.env) {
          console.log('Environment Variables:');
          Object.keys(server.env).forEach(key => {
            // Mask sensitive values
            const isSensitive = key.includes('KEY') || 
                               key.includes('PASSWORD') || 
                               key.includes('SECRET') ||
                               key.includes('TOKEN');
            
            const value = isSensitive ? 
              '****' : 
              (typeof server.env[key] === 'string' ? 
                (server.env[key].length > 30 ? 
                  server.env[key].substring(0, 30) + '...' : 
                  server.env[key]) : 
                JSON.stringify(server.env[key]));
            
            console.log(`  ${key}: ${value}`);
          });
        }
        
        // Check if command file exists
        if (typeof server.command === 'string') {
          // Handle relative paths
          let commandPath = server.command;
          if (!path.isAbsolute(commandPath) && !commandPath.includes(' ')) {
            // Try to resolve the command if it's not absolute and doesn't have spaces (e.g. python, node)
            try {
              // This is basic and won't work for all cases, but helps for common commands
              const isWindows = process.platform === 'win32';
              const envPath = process.env.PATH || process.env.Path || '';
              const pathExt = process.env.PATHEXT || '.EXE;.CMD;.BAT';
              const pathSep = isWindows ? ';' : ':';
              const exts = isWindows ? pathExt.split(pathSep) : [''];
              
              let found = false;
              for (const dir of envPath.split(pathSep)) {
                for (const ext of exts) {
                  const fullPath = path.join(dir, commandPath + ext);
                  if (fs.existsSync(fullPath)) {
                    console.log(`Command resolved to: ${fullPath}`);
                    found = true;
                    break;
                  }
                }
                if (found) break;
              }
              
              if (!found) {
                console.log(`WARNING: Could not resolve command: ${commandPath}`);
              }
            } catch (error) {
              console.log(`Error resolving command: ${error.message}`);
            }
          } else if (path.isAbsolute(commandPath)) {
            if (fs.existsSync(commandPath)) {
              console.log(`Command file exists at: ${commandPath}`);
            } else {
              console.log(`WARNING: Command file does not exist at: ${commandPath}`);
            }
          }
        }
        
        // Check script files
        if (server.args && Array.isArray(server.args)) {
          server.args.forEach(arg => {
            if (typeof arg === 'string' && arg.endsWith('.js') || arg.endsWith('.py') || arg.endsWith('.bat')) {
              // Check if the script exists
              if (path.isAbsolute(arg)) {
                if (fs.existsSync(arg)) {
                  console.log(`Script exists: ${arg}`);
                } else {
                  console.log(`WARNING: Script does not exist: ${arg}`);
                }
              }
            }
          });
        }
      });
    } else {
      console.log('No MCP servers configured.');
    }
  } catch (error) {
    console.error('Error reading settings file:', error);
  }
} else {
  console.log('MCP settings file not found!');
}

console.log('\nSuggested troubleshooting steps:');
console.log('1. Ensure all paths are absolute paths');
console.log('2. Check that all script files exist at the specified paths');
console.log('3. Verify that all required dependencies are installed');
console.log('4. Restart VSCode to apply any changes to MCP settings');
