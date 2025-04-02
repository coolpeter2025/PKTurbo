# Setting Up GitHub Secrets for Supabase Keep-Alive

After pushing the code to GitHub, you need to set up secrets in your GitHub repository to allow the workflow to access your Supabase project. This guide walks you through the process step by step.

## Step 1: Navigate to GitHub Repository Settings

1. Open your browser and go to: https://github.com/coolpeter2025/coffee
2. Click on the "Settings" tab in the top navigation bar
3. You must have admin access to the repository to access settings

## Step 2: Access the Secrets Section

1. In the left sidebar of the Settings page, click on "Secrets and variables"
2. From the dropdown, select "Actions"

## Step 3: Add the Supabase URL Secret

1. Click the "New repository secret" button
2. In the "Name" field, enter: `SUPABASE_URL`
3. In the "Value" field, paste: `https://stagfacvrlrtstshuwux.supabase.co`
4. Click the "Add secret" button

## Step 4: Add the Supabase Service Role Key Secret

1. Click the "New repository secret" button again
2. In the "Name" field, enter: `SUPABASE_SERVICE_ROLE_KEY`
3. In the "Value" field, paste the service role key from the supabase-github-secrets-setup.txt file
4. Click the "Add secret" button

## Step 5: Verify Secrets Are Added

1. After adding both secrets, they should appear in the list of repository secrets
2. The actual values will be hidden for security reasons
3. You should see both `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` in the list

## Step 6: Test the Workflow

1. Go to the "Actions" tab in your repository
2. You should see the "Supabase Keep Alive" workflow listed in the left sidebar
3. Click on the workflow name to go to its specific page
4. Click the "Run workflow" dropdown button on the right side
5. Click the green "Run workflow" button in the dialog
6. The workflow will start running and appear in the list below
7. Click on the running workflow to see its progress
8. When completed, you should see green checkmarks indicating success

## Troubleshooting

If the workflow fails:

1. Check that both secrets are correctly named and added
2. Verify that the Supabase credentials are still valid
3. Make sure the GitHub Actions feature is enabled for your repository
4. Check if the repository has proper permissions to run workflows

The workflow will run automatically every day at 9:00 AM UTC once properly set up.
