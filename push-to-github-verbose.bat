@echo off
echo Starting GitHub push process...

cd /d %~dp0

echo Checking Git status...
git status
echo.

echo Adding all files to Git...
git add .
echo.

echo Committing changes...
git commit -m "Fix Next.js version and configuration issues"
echo.

echo Setting remote repository...
git remote set-url origin https://github.com/coolpeter2025/delightfulbean.git
echo.

echo Pushing to GitHub main branch with verbose output...
git push -v -u origin main
echo.

echo GitHub push process completed.
