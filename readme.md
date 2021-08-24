## Backend Python(Django)
# Creating Virtual Environment
cmd: python3 -m venv env
# Start Virtual Environment
cmd: source env/bin/activate
cmd: cd backend
# Install requirements.txt file
cmd: pip install -r requirements.txt
# migrate and create superuser
cmd: 1. python manage.py migrate
     2. python manage.py createsuperuser
# Run Server
cmd: python manage.py runserver

## Frontend JavaScript(React)
cmd: cd frontend
# install required packages
cmd: npm i
# Run Server
cmd: npm run start

## Useges:
1. Upload CSV File 
2. Then Show data in Table and Line Chart

# note
For Simplicity, i will show only 30 datasets
