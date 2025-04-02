# GitHub Actions Workflows

This directory contains GitHub Actions workflows for automating various tasks.

## Supabase Keep-Alive

The `supabase-keep-alive.yml` workflow prevents your Supabase project from being paused due to inactivity (which happens after one week of no activity on free plans).

### How it works

This workflow:
- Runs automatically at 9:00 AM UTC every day
- Makes a simple database query to the `contact_submissions` table
- Can also be triggered manually through the GitHub Actions UI

### Required setup

Before this workflow can run successfully, you need to add the following secrets to your GitHub repository:

1. Go to your GitHub repository page
2. Navigate to Settings > Secrets and variables > Actions
3. Add the following repository secrets:
   - `SUPABASE_URL`: Your Supabase project URL (e.g., `https://yourproject.supabase.co`)
   - `SUPABASE_SERVICE_ROLE_KEY`: Your Supabase service role key (NOT the anon/public key)

### Customization

You can customize this workflow by:
- Changing the schedule (cron expression)
- Using a different table name 
- Adding additional steps or logging

### Troubleshooting

If the workflow fails:
1. Check that your GitHub secrets are correctly set up
2. Verify that the `contact_submissions` table exists in your Supabase database
3. Review the GitHub Actions logs for detailed error messages
