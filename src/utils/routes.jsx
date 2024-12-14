import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AllReviews from "../pages/AllReviews.jsx/AllReviews";

const routes = createBrowserRouter([
  {
    path: "/",
    errorElement:<ErrorPage></ErrorPage>,
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=> fetch('http://localhost:5000/topgames'),
      },
      {
        path:"/allreviews",
        element:<AllReviews></AllReviews>
      }
    ]
  },
]);

export default routes;