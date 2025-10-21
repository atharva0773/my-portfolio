
// const router = createBrowserRouter([
  // {
  //   path: "/about",
  //   element:
  //     <div>

  //       <Navbar />
        
  //         <Layout/>
         
  //     </div>
  // },
  // {
  //   path: "/contact",
  //   element:
  //     <div>
  //       <Navbar/>
  //       <Layout/>
  //     </div>
  // },
  // {
  //   path: "/work",
  //   element:
  //     <div>
  //       <Navbar/>
  //     <Layout/>
  //     </div>
  // },
//   {
//     path: "/",
//     element:
//     <>
//         <Navbar/>
//         <Layout/>
//       </>,
//     children:[
//       {
//         path:"/",element:<Hero/>
//       },
//       {
//         path:"/about",element:<About/>
//       },
//       {
//         path:"/work ",element:<Work/>
//       },
//       {
//         path:"/contact ",element:<Contact/>
//       },
//     ]
//   },
// ])

// function App() {
//   return (
//     <div >
//       <RouterProvider router={router} />
//     </div>
//   )
// }

// export default App
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
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
