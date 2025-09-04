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
- **Lucide React** - Icons

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

- **Node.js** (version 18 or higher)
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

## 📊 Database

The application uses a pre-populated SQLite database (`backend/data.db`) containing:
- Users with profile information and addresses
- Posts associated with users
- User metadata (adders)

No additional database setup is required - the database file is included in the project.

## 🔌 API Endpoints

### User Endpoints
- `GET /users` - Get paginated list of users
- `GET /users/count` - Get total number of users
- `GET /users/:id` - Get user details with adders

### Post Endpoints
- `GET /posts?userId={userId}` - Get posts for a specific user
- `POST /posts` - Create a new post
- `DELETE /posts/:id` - Delete a post by ID

## ✨ Features

### Users Management
- **Paginated Users Table**: View users with pagination (4 users per page)
- **User Details**: Display full name, email, and formatted address
- **Responsive Design**: Optimized for various screen sizes

### Posts Management
- **User Posts View**: Click on any user to view their posts
- **Create Posts**: Add new posts with title and body
- **Delete Posts**: Remove posts with confirmation
- **Real-time Updates**: UI updates without page refresh using React Query

### UI/UX Features
- **Loading States**: Skeleton loaders and spinners
- **Error Handling**: Graceful error messages and fallbacks
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Components**: Built with Radix UI and custom components

## 🛠️ Development

### Backend Development

```bash
cd backend

# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Frontend Development

```bash
cd frontend

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 🧪 Testing

The application includes comprehensive testing setup with Jest, React Testing Library, and TypeScript support.

### Frontend Testing Setup

The frontend includes a complete testing environment:
- **Jest** - Testing framework with jsdom environment
- **React Testing Library** - Component testing utilities
- **@testing-library/jest-dom** - Additional Jest matchers
- **TypeScript** - Full type support for tests

### Running Tests

```bash
# Frontend tests
cd frontend

# Run all tests
npm test

# Run tests in watch mode (for development)
npm run test:watch

# Run tests with coverage report
npm run test:coverage

# Run a specific test file
npm test -- Paginator.test.tsx

# Run tests matching a pattern
npm test -- --testNamePattern="should render"
```

### Test Structure

```
frontend/src/
├── components/
│   ├── __tests__/           # Component tests
│   │   ├── Button.test.tsx
│   │   └── Modal.test.tsx
│   └── Table/
│       └── __tests__/       # Table component tests
│           └── Paginator.test.tsx
├── utils/
│   └── __tests__/           # Utility function tests
│       └── generate-dotted-pages.test.ts
└── features/
    └── users/
        └── __tests__/       # Feature-specific tests
```

### Writing Tests

Example component test:
```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '../Button';

describe('Button Component', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### Available Jest Matchers

Thanks to `@testing-library/jest-dom`, you have access to:
- `toBeInTheDocument()` - Element is in the DOM
- `toHaveClass()` - Element has specific CSS class
- `toBeDisabled()` - Form element is disabled
- `toHaveFocus()` - Element has focus
- `toHaveValue()` - Input has specific value
- And many more...

### Backend Testing

Backend testing can be added with:
```bash
cd backend
npm install --save-dev jest @types/jest ts-jest supertest @types/supertest

# Run backend tests (when implemented)
npm test
```

### Test Coverage

Generate detailed coverage reports:
```bash
cd frontend
npm run test:coverage

# Coverage report will be generated in coverage/ directory
# Open coverage/lcov-report/index.html in browser for detailed view
```

### Continuous Integration

Tests can be integrated into CI/CD pipelines:
```yaml
# Example GitHub Actions workflow
- name: Run Frontend Tests
  run: |
    cd frontend
    npm ci
    npm test -- --coverage --watchAll=false
```

## 🎨 Design System

The application follows a consistent design system:
- **Colors**: Custom color palette defined in Tailwind configuration
- **Typography**: Consistent text styles and sizes
- **Components**: Reusable UI components with consistent styling
- **Spacing**: Standardized spacing using Tailwind utilities
- **Icons**: Lucide React icon library for consistency

## 🔧 Configuration

### Backend Configuration
- **Port**: 3001 (configurable in `backend/config/default.json`)
- **Database**: SQLite database path configurable
- **CORS**: Enabled for cross-origin requests

### Frontend Configuration
- **API Base URL**: Configured for localhost:3001
- **Build**: Optimized with Turbopack for faster builds
- **TypeScript**: Strict mode enabled for better type safety

## 🚨 Troubleshooting

### Common Issues

1. **Port Already in Use**
   ```bash
   # Kill process using port 3001 (backend)
   lsof -ti:3001 | xargs kill -9
   
   # Kill process using port 3000 (frontend)
   lsof -ti:3000 | xargs kill -9
   ```

2. **Node Modules Issues**
   ```bash
   # Clear node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **TypeScript Build Errors**
   ```bash
   # Clear TypeScript cache
   npx tsc --build --clean
   npm run build
   ```

4. **Database Issues**
   - The `data.db` file should be present in the backend directory
   - If missing, the application will create a new empty database

### Environment Issues

- **Node.js Version**: Ensure you're using Node.js 18 or higher
- **npm Version**: Update npm to the latest version: `npm install -g npm@latest`
- **TypeScript**: Global TypeScript installation may conflict with local versions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is part of a web developer assignment and is for educational/evaluation purposes.

## 🔗 Resources

- [Figma Design](https://www.figma.com/design/Wkbz27sGWBOFMDocOck4mm/Full-Stack-Developer-Assignment?node-id=0-1&node-type=canvas&t=zK4X8qKaPmxu84XZ-0)
- [Next.js Documentation](https://nextjs.org/docs)
- [TanStack Query Documentation](https://tanstack.com/query/latest)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)