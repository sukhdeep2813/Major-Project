import Home from './pages/Home'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Product1 from './pages/Product1'
import Product2 from './pages/Product2'
import Product3 from './pages/Product3'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Rentals from './pages/Rentals'


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
      {
        path: "/product2",
        element:(
          <Product2></Product2>
        )
      },
      {
        path: "/product3",
        element:(
          <Product3></Product3>
        )
      },
      {
        path: "/about-us",
        element:(
          <AboutUs></AboutUs>
        )
      },
      {
        path: "/contact-us",
        element:(
          <ContactUs></ContactUs>
        )
      },
      {
        path: "/rentals",
        element:(
          <Rentals></Rentals>
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