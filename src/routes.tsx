import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app/app-layout'
import { AuthLayout } from './pages/_layouts/auth/auth-layout'
import { DashboardPage } from './pages/app/dashboard/dashboard'
import { SignInPage } from './pages/auth/sign-in/sign-in'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <DashboardPage />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/sign-in',
        element: <SignInPage />,
      },
    ],
  },
])
