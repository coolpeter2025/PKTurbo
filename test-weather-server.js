// Script to test the weather MCP server directly
import { spawn } from 'child_process';

// Path to the weather server
const serverPath = 'C:\\Users\\zampi\\AppData\\Roaming\\Roo-Code\\MCP\\weather-server\\build\\index.js';

// Function to send a request to the server and get a response
async function sendRequest(request) {
  return new Promise((resolve, reject) => {
    // Spawn the server process
    const proc = spawn('node', [serverPath], {
      env: {
        ...process.env,
        OPENWEATHER_API_KEY: 'YOUR_REAL_API_KEY_HERE' // Replace with a real API key for actual weather data
      },
      stdio: ['pipe', 'pipe', 'pipe']
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
      reject(new Error('Server did not respond within the timeout period'));
    }, 5000);
    
    proc.on('close', (code) => {
      clearTimeout(timeout);
      
      if (responseData) {
        try {
          const response = JSON.parse(responseData);
          resolve({ response, stderr: errorData });
        } catch (e) {
          reject(new Error(`Failed to parse response: ${e.message}`));
        }
      } else if (errorData) {
        reject(new Error(`Server error: ${errorData}`));
      } else {
        reject(new Error(`Process exited with code ${code}`));
      }
    });
    
    // Write the request to stdin
    proc.stdin.write(JSON.stringify(request) + '\n');
    proc.stdin.end();
  });
}

// Main function to test the server
async function main() {
  console.log('Weather MCP Server Test');
  console.log('======================\n');
  
  try {
    // Test 1: Get server info
    console.log('Test 1: Get server info');
    const infoRequest = {
      jsonrpc: '2.0',
      method: 'mcp.server.info',
      params: {},
      id: 1
    };
    
    const infoResult = await sendRequest(infoRequest);
    console.log('Server Info:');
    console.log(JSON.stringify(infoResult.response, null, 2));
    console.log('------------------------\n');
    
    // Test 2: List available tools
    console.log('Test 2: List available tools');
    const toolsRequest = {
      jsonrpc: '2.0',
      method: 'mcp.list_tools',
      params: {},
      id: 2
    };
    
    const toolsResult = await sendRequest(toolsRequest);
    console.log('Available Tools:');
    console.log(JSON.stringify(toolsResult.response.result.tools, null, 2));
    console.log('------------------------\n');
    
    // Test 3: List available resources
    console.log('Test 3: List available resources');
    const resourcesRequest = {
      jsonrpc: '2.0',
      method: 'mcp.list_resources',
      params: {},
      id: 3
    };
    
    const resourcesResult = await sendRequest(resourcesRequest);
    console.log('Available Resources:');
    console.log(JSON.stringify(resourcesResult.response.result.resources, null, 2));
    console.log('------------------------\n');
    
    // Test 4: Call get_current_weather tool with a sample city
    console.log('Test 4: Call get_current_weather tool');
    const weatherRequest = {
      jsonrpc: '2.0',
      method: 'mcp.call_tool',
      params: {
        name: 'get_current_weather',
        arguments: {
          city: 'London'
        }
      },
      id: 4
    };
    
    const weatherResult = await sendRequest(weatherRequest);
    console.log('Current Weather Result:');
    console.log(JSON.stringify(weatherResult.response, null, 2));
    console.log('------------------------\n');
    
    console.log('All tests completed successfully!');
    
  } catch (error) {
    console.error('Error during testing:', error.message);
  }
}

// Run the main function
main().catch(console.error);