@echo off
echo ===================================================
echo Applying Supabase Migration - Add Referral Source Column
echo ===================================================
echo.

REM Store the directory where the script is located
set SCRIPT_DIR=%~dp0

REM Read the SQL content from the migration file
set SQL_FILE=%SCRIPT_DIR%supabase\migrations\20250403_add_referral_source_column.sql
if not exist "%SQL_FILE%" (
    echo Error: Migration file not found at %SQL_FILE%
    exit /b 1
)

echo The following SQL will be executed:
echo.
type "%SQL_FILE%"
echo.
echo.

echo This script will help you apply the migration to add the 'referral_source' column
echo to your Supabase contact_submissions table.
echo.
echo NOTE: You'll need your Supabase URL and service role key handy.
echo These can be found in your Supabase dashboard under Project Settings > API.
echo.

set /p CONTINUE=Do you want to continue? (Y/N): 
if /i "%CONTINUE%" neq "Y" (
    echo Migration cancelled.
    exit /b 0
)

echo.
echo Opening Supabase Dashboard to help you run the migration...
echo.
echo Please follow these steps:
echo 1. Log into your Supabase dashboard 
echo 2. Select your project
echo 3. Click on the "SQL Editor" tab in the left sidebar
echo 4. Create a "New Query"
echo 5. Copy and paste the SQL from the migration file
echo 6. Click "Run" to execute the SQL
echo.
echo After the migration has been applied, test the contact form to ensure
echo the referral source data is being stored correctly.
echo.

start https://app.supabase.com/project/stagfacvrlrtstshuwux/sql/new

set /p RESULT=Did the migration complete successfully? (Y/N): 
if /i "%RESULT%" == "Y" (
    echo.
    echo Great! The migration has been successfully applied.
    echo The contact form will now store referral source information.
    echo.
    echo Remember to test the form to ensure everything is working correctly.
) else (
    echo.
    echo If you encountered issues, please check the migration-guide.md file
    echo for troubleshooting steps or manual application instructions.
)

echo.
echo Press any key to exit...
pause > nul
