import Home from './pages/Home'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Product1 from './pages/Product1'


const App = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element:(
          <Home></Home>
        )
      },
      {
        path: "/product1",
        element:(
          <Product1></Product1>
        )
      },
   
      
      
      
    ]
  )
  return (
    <main >
        
        <RouterProvider router={router}></RouterProvider>
    </main>
  )
}

export default App