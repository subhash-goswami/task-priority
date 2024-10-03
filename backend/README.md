# Backend - Task Priority Application

## Project Overview

This is the backend for the **Task Priority Application**, a Django-based API that provides functionality to manage tasks with varying priority levels (low, medium, high). The application includes CRUD operations and uses SQLite as the database.

## Project Structure

```
backend
├── Dockerfile
├── README.md
├── requirements.txt
└── src
    ├── api
    │   ├── admin.py
    │   ├── apps.py
    │   ├── __init__.py
    │   ├── migrations
    │   │   └── __init__.py
    │   ├── models.py
    │   ├── serializers.py
    │   ├── tests.py
    │   ├── urls.py
    │   └── views.py
    ├── app
    │   ├── asgi.py
    │   ├── __init__.py
    │   ├── settings.py
    │   ├── urls.py
    │   └── wsgi.py
    ├── core
    │   ├── admin.py
    │   ├── apps.py
    │   ├── __init__.py
    │   ├── migrations
    │   │   ├── 0001_initial.py
    │   │   └── __init__.py
    │   ├── models.py
    │   ├── tests.py
    │   └── views.py
    ├── db.sqlite3
    └── manage.py
```

### Explanation of Key Directories:
- `api`: Contains the business logic of the application (models, serializers, views, and URLs).
- `app`: Contains project-wide settings, ASGI, WSGI configurations, and URL routing.
- `core`: Can be used for reusable modules (e.g., global settings, utilities).

## Setup and Installation

### Prerequisites

Make sure you have **Python 3.x** and **Docker** installed on your machine.

### Steps:

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd backend
   ```

2. **Install Dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

3. **Apply Migrations:**

   Run the following commands to set up the database and apply initial migrations:

   ```bash
   python src/manage.py migrate
   ```

## Running the Application

### Option 1: Using Docker

1. **Build Docker Image:**

   ```bash
   docker build -t backend .
   ```

2. **Run the Application in Docker:**

   ```bash
   docker run -p 8000:8000 backend
   ```

3. **Access the API:**
   The API will be available at `http://localhost:8000`.

### Option 2: Local Development

1. **Run Django Development Server:**

   ```bash
   python src/manage.py runserver
   ```

2. **Access the API:**
   The API will be available at `http://127.0.0.1:8000`.

## Available Endpoints

- **GET /api/v1/tasks?priority=low** - Retrieve all tasks for a given priority (low, medium, high).
- **POST /api/v1/task/** - Add a new task.
- **PUT /api/v1/task/<id>/** - Update an existing task’s priority.
- **DELETE /api/v1/task/<id>/** - Delete a task.

## Configuration

### Environment Variables

- **DATABASE_URL**: Default is `sqlite:///db.sqlite3` (SQLite).

### Additional Notes

- You can modify the database settings in the `src/app/settings.py` file to switch to other databases like PostgreSQL or MySQL for production.

## Troubleshooting

- **ModuleNotFoundError**: Ensure that you are in the correct virtual environment or container and that all dependencies are installed.
- **Database Migration Issues**: Check if the migrations have been applied correctly by running `python src/manage.py showmigrations` and `python src/manage.py migrate`