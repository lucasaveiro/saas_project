# Client Dashboard - Modern React Project

A modern, responsive web application built with React, Vite, and TailwindCSS. This project provides a clean foundation for a client management dashboard with authentication screens.

## 🚀 Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **TailwindCSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **Mobile-first responsive design**

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Basic UI components (buttons, inputs, etc.)
│   └── layout/         # Layout-specific components
├── pages/              # Main application screens
│   ├── HomePage.jsx    # Dashboard home page
│   └── LoginPage.jsx   # Authentication screen
├── layouts/            # Page layout components
│   └── MainLayout.jsx  # Main application layout
├── assets/             # Static assets (images, icons)
└── App.jsx             # Main application component (Entry Point)
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd client-dashboard
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🧩 Adding New Components

### 1. Create a new component in `src/components/`

```jsx
// src/components/ui/NewComponent.jsx
import React from 'react';

const NewComponent = ({ children, ...props }) => {
  return (
    <div className="your-tailwind-classes" {...props}>
      {children}
    </div>
  );
};

export default NewComponent;
```

### 2. Create a new page in `src/pages/`

```jsx
// src/pages/NewPage.jsx
import React from 'react';
import MainLayout from '../layouts/MainLayout';

const NewPage = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          New Page
        </h1>
        {/* Your page content */}
      </div>
    </MainLayout>
  );
};

export default NewPage;
```

### 3. Import and use in your application

```jsx
import NewComponent from './components/ui/NewComponent';
import NewPage from './pages/NewPage';
```

## 🎨 Styling Guidelines

This project uses TailwindCSS utility classes directly in JSX. Some key patterns:

### Responsive Design
```jsx
<div className="w-full md:w-1/2 lg:w-1/3">
  {/* Mobile-first responsive */}
</div>
```

### Common Patterns
- `container mx-auto px-4` - Centered container with padding
- `flex items-center justify-center` - Center content
- `bg-gradient-to-r from-blue-500 to-purple-600` - Gradient backgrounds
- `shadow-lg hover:shadow-xl transition-shadow` - Interactive shadows

## 🔗 Documentation Links

- [Vite Documentation](https://vitejs.dev/guide/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev/)
- [Lucide React Icons](https://lucide.dev/)

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Build for Production
```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🔜 Next Steps

This boilerplate is ready for:
- Supabase integration for authentication and database
- Additional pages and components
- State management (Context API, Zustand, etc.)
- API integration
- Testing setup

## 📝 Features

- ✅ Modern React with hooks
- ✅ Fast development with Vite
- ✅ Responsive design with TailwindCSS
- ✅ Clean component architecture
- ✅ Beautiful UI with gradients and animations
- ✅ Mobile-first approach
- ✅ Ready for production deployment

---

**Happy coding!** 🎉