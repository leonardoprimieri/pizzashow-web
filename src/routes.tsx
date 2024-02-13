import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app/app-layout'
import { AuthLayout } from './pages/_layouts/auth/auth-layout'
import { DashboardPage } from './pages/app/dashboard/dashboard'
import { OrdersPage } from './pages/app/orders/orders'
import { SignInPage } from './pages/auth/sign-in/sign-in'
import { SignUpPage } from './pages/auth/sign-up/sign-up'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <DashboardPage />,
      },
      {
        path: '/orders',
        element: <OrdersPage />,
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
      {
        path: '/sign-up',
        element: <SignUpPage />,
      },
    ],
  },
])
