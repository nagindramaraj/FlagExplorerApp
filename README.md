# Flag Explorer App

## Setup Instructions

### Backend
```bash
cd backend
npm install
npm start
```

### Frontend
```bash
cd frontend
npm install
npm start
```

### Run Tests
```bash
# Backend
cd backend
npm test

# Frontend
cd frontend
npm test
```

### CI/CD
- On push to main, GitHub Actions will:
  - Run tests
  - Build frontend

---

This project uses React for frontend, Node.js + Express for backend, Axios for HTTP requests, and GitHub Actions for CI/CD.
