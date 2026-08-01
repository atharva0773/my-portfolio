import Layout from './Components/Layout/Layout'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// One catch-all route so Layout/Main stay mounted while the URL changes.
const router = createBrowserRouter([
  {
    path: '*',
    element: <Layout />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
