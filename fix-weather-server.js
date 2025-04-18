// Script to fix the weather server MCP configuration
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

// Function to update the weather server API key
async function updateWeatherServerApiKey() {
  console.log('Fixing Weather MCP Server...');
  console.log(`Settings file path: ${settingsPath}`);
  
  try {
    // Read the settings file
    const settingsContent = fs.readFileSync(settingsPath, 'utf8');
    const settings = JSON.parse(settingsContent);
    
    if (!settings.mcpServers || !settings.mcpServers['weather-server']) {
      console.log('Weather server not found in MCP settings.');
      return;
    }
    
    // Update the API key
    // Replace this with a real OpenWeather API key if you have one
    const apiKey = 'YOUR_REAL_API_KEY_HERE'; // Replace with a real API key
    settings.mcpServers['weather-server'].env.OPENWEATHER_API_KEY = apiKey;
    
    // Write the updated settings back to the file
    fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 2), 'utf8');
    
    console.log('✅ Weather server API key updated successfully.');
    
  } catch (error) {
    console.error('Error updating weather server API key:', error.message);
    if (error.code === 'ENOENT') {
      console.error(`Settings file not found at: ${settingsPath}`);
    }
  }
}

// Run the update function
updateWeatherServerApiKey().catch(console.error);