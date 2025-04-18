# Guide to Creating MCP Servers

This guide explains how to create Model Context Protocol (MCP) servers that extend Claude's capabilities with custom tools and resources.

## What is MCP?

The Model Context Protocol (MCP) enables communication between Claude and external servers that provide additional tools and resources. These servers can:

1. Provide **tools** that Claude can use to perform actions (like fetching weather data, accessing databases, or calling APIs)
2. Expose **resources** that Claude can access for information (like database records, API responses, or files)

## Types of MCP Servers

MCP servers can be configured in two ways:

1. **Local (Stdio) Servers**: Run locally on your machine and communicate via standard input/output
2. **Remote (SSE) Servers**: Run on remote machines and communicate via Server-Sent Events over HTTP/HTTPS

## Creating a Local MCP Server

### Step 1: Set Up the Project Structure

Create a directory for your MCP server with the following structure:

```
my-mcp-server/
  ├── package.json
  ├── tsconfig.json
  └── src/
      └── index.ts
```

### Step 2: Configure package.json

```json
{
  "name": "my-mcp-server",
  "version": "0.1.0",
  "description": "My custom MCP server",
  "type": "module",
  "main": "build/index.js",
  "scripts": {
    "build": "tsc",
    "start": "node build/index.js"
  },
  "dependencies": {
    "axios": "^1.6.0"
  },
  "devDependencies": {
    "@types/node": "^20.8.10",
    "typescript": "^5.2.2"
  }
}
```

### Step 3: Configure tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "esModuleInterop": true,
    "outDir": "build",
    "strict": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "build"]
}
```

### Step 4: Implement the MCP Server

Create a basic MCP server in `src/index.ts`:

```typescript
#!/usr/bin/env node
import { createInterface } from 'readline';

// Create readline interface for stdio communication
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

// MCP protocol constants
const ErrorCode = {
  ParseError: -32700,
  InvalidRequest: -32600,
  MethodNotFound: -32601,
  InvalidParams: -32602,
  InternalError: -32603
};

// Server info
const SERVER_INFO = {
  name: "my-mcp-server",
  version: "0.1.0"
};

// MCP request handler
async function handleRequest(request: any): Promise<any> {
  try {
    const method = request.method;
    const params = request.params || {};
    const id = request.id;

    switch (method) {
      case 'mcp.server.info':
        return createResponse(id, SERVER_INFO);

      case 'mcp.list_tools':
        return createResponse(id, {
          tools: [
            {
              name: 'my_tool',
              description: 'Description of my tool',
              inputSchema: {
                type: 'object',
                properties: {
                  param1: {
                    type: 'string',
                    description: 'Description of param1'
                  }
                },
                required: ['param1']
              }
            }
          ]
        });

      case 'mcp.call_tool':
        return handleToolCall(id, params);

      default:
        return createErrorResponse(id, ErrorCode.MethodNotFound, `Method not found: ${method}`);
    }
  } catch (error) {
    console.error('Error handling request:', error);
    return createErrorResponse(
      request.id,
      ErrorCode.InternalError,
      'Internal server error'
    );
  }
}

// Handle tool calls
async function handleToolCall(id: string | number, params: any): Promise<any> {
  const { name, arguments: args } = params;

  if (name === 'my_tool') {
    if (!args || typeof args !== 'object' || !args.param1) {
      return createErrorResponse(id, ErrorCode.InvalidParams, 'param1 is required');
    }

    // Implement your tool functionality here
    const result = `You called my_tool with param1: ${args.param1}`;

    return createResponse(id, {
      content: [
        {
          type: 'text',
          text: result
        }
      ]
    });
  }

  return createErrorResponse(id, ErrorCode.MethodNotFound, `Tool not found: ${name}`);
}

// Helper function to create a JSON-RPC response
function createResponse(id: string | number, result: any): any {
  return {
    jsonrpc: '2.0',
    id,
    result
  };
}

// Helper function to create a JSON-RPC error response
function createErrorResponse(id: string | number, code: number, message: string): any {
  return {
    jsonrpc: '2.0',
    id,
    error: {
      code,
      message
    }
  };
}

// Start the server
console.error('MCP server starting...');

// Process each line from stdin
rl.on('line', async (line) => {
  try {
    const request = JSON.parse(line);
    const response = await handleRequest(request);
    console.log(JSON.stringify(response));
  } catch (error) {
    console.error('Error processing request:', error);
    console.log(JSON.stringify({
      jsonrpc: '2.0',
      error: {
        code: ErrorCode.ParseError,
        message: 'Parse error'
      }
    }));
  }
});

// Handle process termination
process.on('SIGINT', () => {
  console.error('Shutting down...');
  rl.close();
  process.exit(0);
});

console.error('MCP server running on stdio');
```

### Step 5: Build the Server

```bash
npm install
npm run build
```

### Step 6: Configure the MCP Settings File

Add your server to the MCP settings file located at:
- Windows: `%APPDATA%\Code\User\globalStorage\saoudrizwan.claude-dev\settings\cline_mcp_settings.json`
- macOS: `~/Library/Application Support/Code/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json`

```json
{
  "mcpServers": {
    "my-mcp-server": {
      "command": "node",
      "args": [
        "C:\\path\\to\\my-mcp-server\\build\\index.js"
      ],
      "env": {
        "MY_ENV_VAR": "my-value"
      },
      "disabled": false,
      "autoApprove": []
    }
  }
}
```

## Adding Resources to Your MCP Server

To add resources to your MCP server, implement the following methods:

1. `mcp.list_resources` - List static resources
2. `mcp.list_resource_templates` - List resource templates
3. `mcp.read_resource` - Read a resource

Example implementation:

```typescript
case 'mcp.list_resources':
  return createResponse(id, {
    resources: [
      {
        uri: 'myprotocol://static-resource',
        name: 'My Static Resource',
        mimeType: 'application/json',
        description: 'Description of my static resource'
      }
    ]
  });

case 'mcp.list_resource_templates':
  return createResponse(id, {
    resourceTemplates: [
      {
        uriTemplate: 'myprotocol://{param}/resource',
        name: 'My Dynamic Resource',
        mimeType: 'application/json',
        description: 'Description of my dynamic resource'
      }
    ]
  });

case 'mcp.read_resource':
  return handleResourceRead(id, params);
```

## Best Practices

1. **Error Handling**: Implement robust error handling to provide clear error messages
2. **Authentication**: Store API keys and credentials in the MCP settings file's `env` section
3. **Documentation**: Document your server's tools and resources for easy reference
4. **Testing**: Test your server thoroughly before deploying
5. **Security**: Never hardcode sensitive information in your server code

## Example Use Cases

1. **API Integration**: Create tools to interact with external APIs (weather, stocks, news)
2. **Database Access**: Provide tools to query and update databases
3. **File Operations**: Create tools to read, write, and manipulate files
4. **Custom Calculations**: Implement specialized algorithms or calculations
5. **IoT Control**: Interface with smart home devices or other IoT systems

## Troubleshooting

1. **Server Not Starting**: Check the command and args in the MCP settings file
2. **Tool Not Found**: Ensure the tool name matches between `mcp.list_tools` and `mcp.call_tool`
3. **Environment Variables**: Verify environment variables are correctly set in the MCP settings file
4. **Parsing Errors**: Check for JSON syntax errors in your responses
5. **Timeout Issues**: Implement proper error handling for long-running operations