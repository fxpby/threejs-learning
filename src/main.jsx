import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import ErrorPage from './pages/ErrorPage'
import ExerciseWrapper from './pages/Exercises'
import Task1 from '@/pages/Exercises/Task1'

import 'virtual:uno.css'
import './index.css'

const files = import.meta.glob('@/pages/Exercises/*.jsx')
const routeChildren = []

for (let path in files) {
  const p = path
  const fileName = path.replace('/src/pages/Exercises/', '').replace('.jsx', '')

  if (fileName !== 'index') {
    const ExerciseComponent = lazy(files[p])

    routeChildren.push({
      path: `/exercise/${fileName.toLocaleLowerCase()}`,
      name: fileName,
      element: <ExerciseComponent />,
    })
  }
}
console.log('routeChildren: ', routeChildren)

const baseRoute = [
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/exercise',
        element: <ExerciseWrapper />,
        children: routeChildren,
      },
      {
        path: '/task1',
        element: <Task1 />,
      },
    ],
  },
]

const router = createBrowserRouter(baseRoute, { basename: '/three-js-demo' })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </ChakraProvider>
  </React.StrictMode>,
)
