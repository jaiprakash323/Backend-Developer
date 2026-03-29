# Project Name
Backend Task Management Application

## Setup Instructions

### Backend
1. Navigate to `backend/`.
2. Project: cd backend `py manage.py runserver` 
3. Set up PostgreSQL and update `settings.py` with database credentials.
4. Run migrations: `python manage.py migrate`.
5. Create superuser: `python manage.py createsuperuser`.
6. Start server: `python manage.py runserver`.

### Frontend 
1. Navigate to `frontend/`.
2. Install dependencies: `npm install`.
3. Start React dev server: `npm start`.

## Tech Stack
 **Backend**: Django, DRF, SimpleJWT, PostgreSQL
 **Frontend**: React, Axios, React Router
 **Authentication**: JWT with refresh tokens, bcrypt 

 ## Authentication Flow
1. User registers → password hashed with bcrypt.
2. User logs in → server returns JWT access and refresh tokens.

## Database Schema
- **User**: id, username, email, password, role, etc.
- **Task**: id, title, description, completed, created_at, updated_at, user_id (FK)