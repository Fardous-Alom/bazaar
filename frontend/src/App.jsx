import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeLayout from './layouts/HomeLayout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import NotFound from './pages/NotFound'
import Cart from './pages/Cart'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/shop',
          element: <Shop />
        },
        {
          path: '/cart',
          element: <Cart />
        }
      ]
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
