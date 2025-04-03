# How the Supabase Keep-Alive Works

## Overview

The Supabase keep-alive solution uses GitHub Actions to automatically ping your Supabase database on a regular schedule. This prevents the free-tier Supabase project from being paused due to inactivity (which happens after 7 days of no activity).

## How It Works - Step by Step

### 1. Scheduled Execution

The GitHub Actions workflow is configured to run:
- **Automatically**: Every day at 9:00 AM UTC (scheduled via cron expression `0 9 * * *`)
- **Manually**: Whenever you trigger it through the GitHub Actions UI

### 2. Workflow Process

When triggered, the workflow runs these steps in sequence:

1. **Checkout Repository**: Gets a copy of your repository code
2. **Setup Node.js**: Installs Node.js runtime (version 18)
3. **Install Supabase Client**: Installs the Supabase JavaScript client library
4. **Verify Installation**: Confirms the client library was installed correctly
5. **Run Keep-Alive Script**: Executes the script that connects to your Supabase database

### 3. Authentication & Security

The workflow securely accesses your Supabase project by:
- Storing credentials as GitHub repository secrets (they're encrypted and not visible in logs)
- Passing these secrets as environment variables to the script
- Using the service role key which has full access to your database

### 4. Database Connection

The script (`scripts/keep-alive.js`) performs these actions:
1. Connects to your Supabase instance using the provided credentials
2. Runs a simple query against the `contact_submissions` table
3. Logs the results (connection status, record count, sample ID if available)
4. Reports success or failure with appropriate exit codes

### 5. Keeping Supabase Active

This prevents Supabase from pausing your project because:
- Any API call or database interaction counts as "activity"
- The query is lightweight but sufficient to register as activity
- Daily execution ensures you never reach the 7-day inactivity limit

## Technical Implementation

### GitHub Secrets

The workflow uses two GitHub secrets:
- `SUPABASE_URL`: Your project URL (e.g., https://stagfacvrlrtstshuwux.supabase.co)
- `SUPABASE_SERVICE_ROLE_KEY`: Your service role API key

### External JavaScript File

Using an external script file instead of inline code:
- Prevents shell escaping issues
- Makes the code easier to maintain
- Provides cleaner error handling
- Improves logging and debugging

### Environment Variables

The GitHub workflow passes secrets as environment variables:
```yaml
env:
  SUPABASE_URL: ${{ secrets.SUPABASE_URL }}
  SUPABASE_SERVICE_ROLE_KEY: ${{ secrets.SUPABASE_SERVICE_ROLE_KEY }}
```

The script then accesses them using `process.env`:
```javascript
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
```

## Maintenance and Monitoring

- **GitHub Actions Logs**: Every run is logged in the Actions tab of your repository
- **Run Status**: Success/failure is clearly indicated with checkmarks or X marks
- **Detailed Logs**: Full output from the script is available for troubleshooting
- **Email Notifications**: GitHub can notify you if the workflow fails (configure in GitHub settings)

This solution will run continuously as long as your GitHub repository exists and the Action is enabled, keeping your Supabase project active indefinitely.
