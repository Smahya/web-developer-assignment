# Web Developer Assignment - Full Stack Application

A modern full-stack web application built with Node.js/TypeScript backend and Next.js frontend, featuring user management and posts functionality with a clean, responsive UI.

## 🚀 Tech Stack

### Backend
- **Node.js** with **TypeScript**
- **Express.js** - Web framework
- **SQLite3** - Database
- **Config** - Configuration management

### Frontend
- **Next.js 15** with **TypeScript**
- **React 19** - UI library
- **TanStack Query (React Query)** - Server state management
- **Tailwind CSS** - Styling
- **Radix UI** - UI components
- **Axios** - HTTP client

## 📁 Project Structure

```
web-developer-assignment/
├── backend/                 # Node.js/Express API server
│   ├── src/
│   │   ├── db/             # Database layer
│   │   ├── routes/         # API routes
│   │   └── index.ts        # Server entry point
│   ├── config/             # Configuration files
│   ├── data.db            # SQLite database
│   └── package.json
├── frontend/               # Next.js React application
│   ├── src/
│   │   ├── app/           # Next.js app router
│   │   ├── components/    # Reusable UI components
│   │   ├── features/      # Feature-specific components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── services/      # API service layer
│   │   └── types/         # TypeScript type definitions
│   └── package.json
└── README.md              # This file
```

## 🛠️ Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 20 or higher)
- **npm** (comes with Node.js)

## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd web-developer-assignment
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Build TypeScript (optional, for production)
npm run build
```

### 3. Frontend Setup

```bash
# Navigate to frontend directory
cd ../frontend

# Install dependencies
npm install
```

## 🚀 Running the Application

### Start the Backend Server

```bash
# From the backend directory
cd backend

# For development (with hot reload)
npm run dev

# OR for production
npm run build
npm start
```

The backend server will start on **http://localhost:3001**

### Start the Frontend Application

```bash
# From the frontend directory (in a new terminal)
cd frontend

# For development
npm run dev

# OR for production
npm run build
npm start
```

The frontend application will start on **http://localhost:3000**

### 🌐 Access the Application

Once both servers are running:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001


## 🔧 Configuration

### Backend Configuration
- **Port**: 3001 (configurable in `backend/config/default.json`)
- **Database**: SQLite database path configurable
- **CORS**: Enabled for cross-origin requests

### Frontend Configuration
- **API Base URL**: Configured for localhost:3001
- **Build**: Optimized with Turbopack for faster builds
- **TypeScript**: Strict mode enabled for better type safety

## 📝 License

This project is part of a web developer assignment and is for educational/evaluation purposes.