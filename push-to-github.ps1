# PowerShell script to push to GitHub with detailed output

# Set error action preference to stop on error
$ErrorActionPreference = "Stop"

# Function to execute command and display output
function Exec-Command {
    param (
        [Parameter(Mandatory=$true)]
        [string]$Command,
        
        [Parameter(Mandatory=$true)]
        [string]$Description
    )
    
    Write-Output "Executing: $Description"
    Write-Output "Command: $Command"
    
    try {
        $output = Invoke-Expression $Command
        Write-Output "Output:"
        Write-Output $output
        Write-Output "Command completed successfully.`n"
        return $true
    }
    catch {
        Write-Output "Error executing command:"
        Write-Output $_.Exception.Message
        Write-Output "Command failed.`n"
        return $false
    }
}

# Main script
Write-Output "Starting GitHub push process..."

# Check Git status
Exec-Command -Command "git status" -Description "Checking Git status"

# Add all files
Exec-Command -Command "git add ." -Description "Adding all files to Git"

# Commit changes
Exec-Command -Command "git commit -m 'Fix Next.js version and configuration issues'" -Description "Committing changes"

# Set the remote repository
Exec-Command -Command "git remote set-url origin https://github.com/coolpeter2025/Delightful-Bean-Coffee-Cart.git" -Description "Setting remote repository"

# Push to GitHub
Exec-Command -Command "git push -u origin master" -Description "Pushing to GitHub master branch"

# If master branch fails, try main branch
if (-not (Exec-Command -Command "git push -u origin master" -Description "Pushing to GitHub master branch")) {
    Exec-Command -Command "git push -u origin main" -Description "Pushing to GitHub main branch"
}

Write-Output "GitHub push process completed."
