// Script to fix the Supabase MCP server configuration
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

// Function to update the Supabase MCP server configuration
async function fixSupabaseMcpServer() {
  console.log('Fixing Supabase MCP Server...');
  console.log(`Settings file path: ${settingsPath}`);
  
  try {
    // Read the settings file
    const settingsContent = fs.readFileSync(settingsPath, 'utf8');
    const settings = JSON.parse(settingsContent);
    
    const supabaseServerKey = 'github.com/alexander-zuev/supabase-mcp-server';
    
    if (!settings.mcpServers || !settings.mcpServers[supabaseServerKey]) {
      console.log('Supabase MCP server not found in settings.');
      return;
    }
    
    // Update the Supabase server configuration
    // The error shows that we need to remove some extra inputs that are not permitted
    // and ensure we have the correct environment variables
    const supabaseServer = settings.mcpServers[supabaseServerKey];
    
    // Update environment variables
    supabaseServer.env = {
      // Keep existing environment variables
      ...supabaseServer.env,
      // Add or update required variables
      SUPABASE_URL: 'https://stagfacvrlrtstshuwux.supabase.co',
      SUPABASE_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN0YWdmYWN2cmxydHN0c2h1d3V4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MDgxMjQxNiwiZXhwIjoyMDU2Mzg4NDE2fQ.I4qNsFwSe_4YN5N03dXX990U7YpcPGN1g5evT6TLf94',
      // Remove any problematic variables
      NEXT_PUBLIC_SUPABASE_URL: undefined,
      NEXT_PUBLIC_SUPABASE_ANON_KEY: undefined,
      EMAIL_USER: undefined,
      EMAIL_PASSWORD: undefined,
      NOTIFICATION_EMAIL: undefined
    };
    
    // Clean up undefined values
    Object.keys(supabaseServer.env).forEach(key => {
      if (supabaseServer.env[key] === undefined) {
        delete supabaseServer.env[key];
      }
    });
    
    // Write the updated settings back to the file
    fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 2), 'utf8');
    
    console.log('✅ Supabase MCP server configuration updated successfully.');
    
  } catch (error) {
    console.error('Error updating Supabase MCP server configuration:', error.message);
    if (error.code === 'ENOENT') {
      console.error(`Settings file not found at: ${settingsPath}`);
    }
  }
}

// Run the update function
fixSupabaseMcpServer().catch(console.error);