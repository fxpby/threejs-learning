import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import ErrorPage from './pages/ErrorPage'
import Task1 from './pages/Exercises/task1'
import 'virtual:uno.css'
import './index.css'


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: 'exercise/:key',
          element: <Task1 />,
        },
      ],
    },
  ],
  { basename: '/three-js-demo' },
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
