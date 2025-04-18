# MCP Server Fixes

This document explains how to fix and test the MCP servers in the project.

## Overview

The project uses three MCP (Model Context Protocol) servers:

1. **Weather Server** - Provides weather data tools and resources
2. **Supabase MCP Server** - Provides tools for interacting with Supabase
3. **Git MCP Server** - Provides tools for interacting with Git repositories

## Fix Scripts

The following scripts have been created to fix the MCP servers:

### 1. Fix All MCP Servers

The `fix-all-mcp-servers.js` script runs all the individual fix scripts in sequence:

```bash
npm run fix-all
```

### 2. Individual Fix Scripts

You can also run the individual fix scripts:

- **Weather Server**: `fix-weather-server.js` - Updates the API key for the weather server
- **Supabase Server**: `fix-supabase-server.js` - Fixes the Supabase MCP server configuration
- **Git Server**: `fix-git-server.js` - Fixes the Git MCP server configuration

```bash
node fix-weather-server.js
node fix-supabase-server.js
node fix-git-server.js
```

## Testing MCP Servers

### Check MCP Server Status

The `check-mcp-status.js` script checks the status of all configured MCP servers:

```bash
npm run check-status
```

### Test Weather Server

The `test-weather-server.js` script tests the weather MCP server directly:

```bash
npm run test-weather
```

## Configuration

The MCP servers are configured in the MCP settings file located at:

- Windows: `%APPDATA%\Code\User\globalStorage\saoudrizwan.claude-dev\settings\cline_mcp_settings.json`
- macOS: `~/Library/Application Support/Code/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json`

## Important Notes

1. **API Keys**: For the weather server to work properly, you need to replace `YOUR_REAL_API_KEY_HERE` in the `fix-weather-server.js` script with a real OpenWeather API key.

2. **Repository Path**: For the Git MCP server to work properly, you need to update the repository path in the `fix-git-server.js` script to point to a valid Git repository on your system.

3. **ES Modules**: All scripts use ES modules. Make sure you have the `"type": "module"` field in your package.json file.

## Troubleshooting

If you encounter issues with the MCP servers:

1. Check the error messages in the console
2. Verify that the MCP settings file exists and is accessible
3. Make sure you have the required dependencies installed
4. Check that the API keys and other credentials are correct
5. Restart VS Code after making changes to the MCP settings file