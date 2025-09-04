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
- **Lucide React** - Modern icon library

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

### Development Features
- **Hot Reload** - Instant updates during development
- **Turbopack** - Ultra-fast bundler for development
- **TypeScript** - Real-time type checking
- **ESLint** - Code quality enforcement

## 🏗️ Building for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🧪 Code Quality

```bash
# Run ESLint
npm run lint

# Fix ESLint issues automatically
npm run lint -- --fix
```

## ✨ Features

### 🏠 Users Management
- **Paginated Table**: Display users with server-side pagination
- **User Details**: Show name, email, and formatted address
- **Navigation**: Click users to view their posts
- **Responsive Design**: Optimized for all screen sizes

### 📝 Posts Management
- **User Posts View**: Display all posts for a selected user
- **Create Posts**: Modal form to add new posts
- **Delete Posts**: Remove posts with confirmation
- **Real-time Updates**: Optimistic updates with React Query

### 🎨 UI/UX Features
- **Loading States**: Skeleton loaders and spinners
- **Error Handling**: User-friendly error messages
- **Responsive Layout**: Mobile-first design approach
- **Accessibility**: ARIA labels and keyboard navigation
- **Modern Icons**: Lucide React icon set

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


## 🔌 API Integration

### Service Layer
The application uses a clean service layer architecture:

```typescript
// services/users.ts
export const getUsersList = (page: number, limit: number) => {
  return api.get(`/users?page=${page}&limit=${limit}`)
}

// services/posts.ts
export const createPost = (postData: CreatePostData) => {
  return api.post('/posts', postData)
}
```

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

### Test Structure

```
frontend/src/
├── components/
│   ├── __tests__/                 # Component tests
│   │   ├── Button.test.tsx       # Button component tests
│   │   └── Modal.test.tsx        # Modal component tests
│   ├── Table/
│   │   └── __tests__/            # Table-specific tests
│   │       └── Paginator.test.tsx
│   └── ui/
│       └── __tests__/            # Base UI component tests
├── utils/
│   └── __tests__/                # Utility function tests
│       └── generate-dotted-pages.test.ts
├── hooks/
│   └── __tests__/                # Custom hook tests
└── features/
    ├── users/
    │   └── __tests__/            # User feature tests
    └── posts/
        └── __tests__/            # Post feature tests
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


## 🚀 Performance Optimizations

### Next.js Features
- **App Router**: Modern routing system
- **Server Components**: Reduced client bundle
- **Image Optimization**: Automatic image optimization
- **Code Splitting**: Automatic code splitting

### React Optimizations
- **Memo**: Prevent unnecessary re-renders
- **useMemo/useCallback**: Optimize expensive calculations
- **Lazy Loading**: Load components on demand
- **Suspense**: Better loading experiences

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Mobile Optimizations
- **Touch Targets**: Minimum 44px touch targets
- **Scroll Behavior**: Smooth scrolling
- **Viewport Meta**: Proper mobile viewport
- **Performance**: Optimized for mobile networks

## 🚨 Troubleshooting

### Common Issues

1. **API Connection Issues**
   - Ensure backend server is running on port 3001
   - Check CORS configuration
   - Verify API endpoints

2. **Build Errors**
   ```bash
   # Clear Next.js cache
   rm -rf .next
   npm run build
   ```

3. **TypeScript Errors**
   ```bash
   # Check TypeScript configuration
   npx tsc --noEmit
   ```

4. **Styling Issues**
   ```bash
   # Rebuild Tailwind styles
   npm run dev
   ```

### Performance Issues
- Check React DevTools for unnecessary re-renders
- Use Next.js built-in performance metrics
- Monitor bundle size with webpack-bundle-analyzer

## 🤝 Contributing

### Development Workflow
1. Create feature branch from `main`
2. Make changes with proper TypeScript typing
3. Add/update tests as needed
4. Run linting and fix issues
5. Test on multiple screen sizes
6. Submit pull request with description

### Code Standards
- **TypeScript**: Strict typing required
- **Component Structure**: Consistent file organization
- **Naming Conventions**: Clear, descriptive names
- **Comments**: JSDoc for complex functions
- **Testing**: Test coverage for new features

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TanStack Query](https://tanstack.com/query/latest)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Radix UI](https://www.radix-ui.com/primitives)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)