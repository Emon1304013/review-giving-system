import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddService from "../pages/Services/AddService/AddService";
import SeriviceDetails from "../pages/Services/ServiceDetails";
import Services from "../pages/Services/Services";
import UserReviews from "../pages/UserReviews/UserReviews";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
          path:'/add-service',
          element:<PrivateRoute><AddService></AddService></PrivateRoute>
        },
        {
          path:'/services',
          element:<Services></Services>
        },
        {
          path:'/services/:id',
          element:<SeriviceDetails></SeriviceDetails>,
          loader:({params})=>fetch(`https://roza-fusion-server.vercel.app/services/${params.id}`)
        },
        {
          path:'/user-reviews',
          element:<PrivateRoute><UserReviews></UserReviews></PrivateRoute>
        }
      ]
    }
  ])

export default router;