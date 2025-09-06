# Frontend - Web Developer Assignment

A modern React application built with Next.js 15, TypeScript, and Tailwind CSS, featuring user management and posts functionality with a responsive, accessible UI.

## 🚀 Tech Stack

- **Next.js 15** - React framework with App Router
- **React 19** - UI library with latest features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **TanStack Query** - Server state management
- **Radix UI** - Accessible component primitives
- **Axios** - HTTP client for API requests

## 📁 Project Structure

```
frontend/src/
├── app/                    # Next.js App Router
│   ├── (users)/           # Users route group
│   │   ├── page.tsx       # Users list page
│   │   └── posts/
│   │       └── [userId]/  # Dynamic user posts page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components (Radix UI)
│   ├── Button.tsx        # Custom button component
│   ├── Input/            # Input components
│   ├── Loader/           # Loading components
│   ├── Modal.tsx         # Modal component
│   ├── Table/            # Table components
│   └── Text.tsx          # Typography component
├── features/             # Feature-specific components
│   ├── posts/
│   │   ├── components/   # Post-related components
│   │   └── pages/        # Post page components
│   └── users/
│       └── pages/        # User page components
├── hooks/                # Custom React hooks
│   ├── useDeletePost.ts
│   ├── usePostsList.ts
│   └── useUsersList.ts
├── services/             # API service layer
│   ├── index.ts
│   ├── posts.ts
│   └── users.ts
├── types/                # TypeScript type definitions
│   └── shared.ts
├── lib/                  # Utility libraries
│   ├── axios-instance.ts # Configured Axios instance
│   └── utils.ts          # General utilities
└── utils/                # App-specific utilities
    └── constants.ts      # Application constants
```

## 🛠️ Prerequisites

- **Node.js** 18 or higher
- **npm** (comes with Node.js)
- **Backend server** running on port 3001

## 📦 Installation

```bash
# Install dependencies
npm install
```

## 🚀 Development

```bash
# Start development server
npm run dev

# The app will be available at http://localhost:3000
```

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for local development:

```env
# API Configuration
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
```

### Tailwind Configuration
The project uses Tailwind CSS v4 with custom configuration:
- **Custom Colors**: Defined in `globals.css`
- **Component Classes**: Utility classes for consistent styling
- **Responsive Breakpoints**: Mobile-first breakpoints
- **Dark Mode**: Ready for dark mode implementation

### React Query Integration
Server state is managed with TanStack Query:
- **Caching**: Intelligent data caching
- **Background Updates**: Automatic refetching
- **Optimistic Updates**: Immediate UI updates
- **Error Handling**: Centralized error management

## 🚨 Error Handling

### Client-Side Errors
- **API Errors**: User-friendly error messages
- **Network Errors**: Retry mechanisms
- **404 Errors**: Custom error pages

### Loading States
- **Skeleton Loaders**: Content placeholders
- **Spinners**: Action feedback
- **Optimistic Updates**: Immediate feedback

## 🧪 Testing

The frontend includes a comprehensive testing setup with Jest, React Testing Library, and full TypeScript support.

### Testing Stack
- **Jest 30** - Modern testing framework with jsdom environment
- **React Testing Library 16** - Component testing utilities
- **@testing-library/jest-dom** - Extended Jest matchers for DOM
- **@testing-library/user-event** - User interaction simulation
- **TypeScript** - Full type support for tests

### Quick Start

```bash
# Install dependencies (if not already done)
npm install

# Run all tests
npm test

# Run tests in watch mode (recommended for development)
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

### Test Commands

```bash
# Basic test commands
npm test                    # Run all tests once
npm run test:watch         # Run tests in watch mode
npm run test:coverage      # Run with coverage report
```

### Test Coverage

Generate and view coverage reports:

```bash
# Generate coverage report
npm run test:coverage

# Coverage files generated:
coverage/
├── lcov-report/
│   └── index.html          # Open this in browser
├── clover.xml             # For CI tools
└── lcov.info             # For external tools
```

Coverage thresholds can be configured in `jest.config.js`:

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TanStack Query](https://tanstack.com/query/latest)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Radix UI](https://www.radix-ui.com/primitives)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)