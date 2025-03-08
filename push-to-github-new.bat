@echo off
echo Starting GitHub push process...

cd /d %~dp0

echo Checking Git status...
git status

echo Adding all files to Git...
git add .

echo Committing changes...
git commit -m "Fix Next.js version and configuration issues"

echo Setting remote repository...
git remote set-url origin https://github.com/coolpeter2025/delightfulbean.git

echo Pushing to GitHub main branch...
git push -u origin main

echo GitHub push process completed.
