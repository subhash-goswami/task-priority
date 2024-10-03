

### Docker Compose

---

# Docker Compose - Task Priority Application

## Running Both Services Together

To run both the backend and frontend services together using Docker Compose:

1. **Build and Start Containers:**

   ```bash
   docker-compose up --build
   ```

2. **Access Services:**

   - **Frontend:** `http://localhost:3000`
   - **Backend:** `http://localhost:8000`

## Cleaning Up

To stop and remove containers:

```bash
docker-compose down
```

---

These README files provide a comprehensive guide for understanding, setting up, and running both the backend and frontend services for project.