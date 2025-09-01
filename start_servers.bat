@echo off
echo Starting virtual environment...

echo Applying migrations...
venv\Scripts\python.exe manage.py makemigrations
venv\Scripts\python.exe manage.py migrate

echo Starting Django backend...
start cmd /k "venv\Scripts\python.exe manage.py runserver"

echo Starting React frontend...
cd frontend
start cmd /k "npm start"

echo All servers started!
