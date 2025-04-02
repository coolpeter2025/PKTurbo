# Testing the Supabase Keep-Alive Functionality

This guide provides instructions for testing the Supabase keep-alive functionality before and after pushing to GitHub.

## Local Testing (Already Completed)

We've already run the local test scripts and verified that the Supabase connection works:

```
✅ Connection successful!
📊 Found 8 total records in contact_submissions table
🟢 Supabase keep-alive test completed successfully
📝 Sample record ID: 24466938-f3ad-4104-bba4-82c4b5216c97
```

This confirms that:
1. The Supabase credentials are valid
2. The contact_submissions table exists and is accessible
3. The basic query functionality works as expected

## Testing on GitHub After Push

Once the push to GitHub is complete, follow these steps to test the workflow:

1. Go to: https://github.com/coolpeter2025/coffee/actions
2. You should see the "Supabase Keep Alive" workflow listed in the left sidebar
3. Click on the workflow name to go to its specific page
4. Click the "Run workflow" dropdown button at the right side of the screen
5. In the dialog that appears, click the green "Run workflow" button
6. The workflow run will appear in the list below
7. Click on the running workflow to see its progress
8. When completed, you should see green checkmarks indicating success

## Monitoring GitHub Actions

To monitor the scheduled runs:
1. Visit https://github.com/coolpeter2025/coffee/actions regularly
2. Check the logs for the most recent runs of the "Supabase Keep Alive" workflow
3. Each successful run will prevent your Supabase project from being paused

## Troubleshooting

If the GitHub Action fails:

1. Check the error message in the GitHub Actions logs
2. Verify that the secrets are correctly set up:
   - Go to https://github.com/coolpeter2025/coffee/settings/secrets/actions
   - Confirm that SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY exist and are set correctly
3. If the issue persists, try running the local test script again to ensure the Supabase credentials still work

## Success Criteria

You'll know the keep-alive system is working correctly when:
1. The GitHub Action completes successfully (green checkmark)
2. Your Supabase project remains active and doesn't get paused
3. You can still access your Supabase project through the dashboard without it showing as paused
