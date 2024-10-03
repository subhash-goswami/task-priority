# Frontend - Task Priority Application

## Project Overview

The frontend is a React application (using TypeScript) that provides a user interface for interacting with the Task Priority API. Users can add, edit, delete, and view tasks grouped by their priority levels (low, medium, high). The project uses **Material UI (MUI)** for responsive design and styling.

## Project Structure

```
frontend
├── Dockerfile
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── components
│   │   └── Tasks
│   │       ├── AddTask.tsx
│   │       ├── TaskCard.tsx
│   │       └── TaskList.tsx
│   ├── hooks
│   │   └── useFetchTasks.ts
│   ├── index.css
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   ├── services
│   │   └── taskService.ts
│   ├── setupTests.ts
│   ├── theme
│   │   └── theme.ts
│   ├── types
│   │   └── task.d.ts
│   └── utils
│       └── formatDate.ts
└── tsconfig.json
```

### Explanation of Key Directories:
- `components/Tasks`: Contains reusable components related to task management (AddTask, TaskCard, TaskList).
- `hooks`: Custom React hooks (e.g., `useFetchTasks.ts` for fetching task data).
- `services`: API service logic to interact with the backend.
- `theme`: Custom theme settings for Material UI.
- `utils`: Helper functions like `formatDate.ts` for date formatting.

## Setup and Installation

### Prerequisites

Make sure you have **Node.js** and **Docker** installed on your machine.

### Steps:

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd frontend
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

## Running the Application

### Option 1: Using Docker

1. **Build Docker Image:**

   ```bash
   docker build -t frontend .
   ```

2. **Run the Application in Docker:**

   ```bash
   docker run -p 3000:3000 frontend
   ```

3. **Access the Application:**

   Open `http://localhost:3000` in your web browser.

### Option 2: Local Development

1. **Start the Application Locally:**

   ```bash
   npm start
   ```

2. **Access the Application:**

   Open `http://localhost:3000` in your web browser.

## Configuration

### API Integration

- The frontend communicates with the backend through API calls. The API URL should be configured in `src/services/taskService.ts`.
  Example:
  ```typescript
  const API_URL = "http://localhost:8000/api/v1";
  ```

### Material UI Theme Customization

- The theme for Material UI can be customized in `src/theme/theme.ts` where you can modify colors, typography, etc.

## Troubleshooting

- **CORS Issues:** Ensure that the backend CORS settings allow requests from the frontend URL (`http://localhost:3000`).
- **TypeScript Errors:** Ensure that all required types are defined correctly in `src/types/`.
- **Build Errors:** If using Docker, make sure the Dockerfile is set up correctly and all dependencies are installed.