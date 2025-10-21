
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Layout from './Components/Layout/Layout'
import Main from './Components/Main/Main'
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Layout />
      </>
    ),
    children: [
      { path: '/', element: <Main /> },
      { path: '/about', element: <Main /> },
      { path: '/work', element: <Main /> },
      { path: '/contact', element: <Main /> },
      { path: '/skill', element: <Main /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
