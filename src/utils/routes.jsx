import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AllReviews from "../pages/AllReviews.jsx/AllReviews";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import AddReview from "../pages/AddReview/AddReview";
import MyReviews from "../pages/MyReviews/MyReviews";
import Watchlist from "../pages/Watchlist/Watchlist";
import UpdateGameReview from "../pages/UpdateGameReview/UpdateGameReview";

const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/topgames"),
      },
      {
        path: "/allreviews",
        element: <AllReviews></AllReviews>,
        loader: () => fetch("http://localhost:5000/games"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addreview",
        element: (
          <PrivateRoute>
            {" "}
            <AddReview></AddReview>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/myreviews",
        element: (
          <PrivateRoute>
            {" "}
            <MyReviews></MyReviews>{" "}
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/games"),
      },
      {
        path: "/updategame/:id",
        element: (
          <PrivateRoute><UpdateGameReview></UpdateGameReview></PrivateRoute>
        ),
        loader: ({params}) => fetch(`http://localhost:5000/games/${params.id}`),
      },
      {
        path: "/mywatchlist",
        element: (
          <PrivateRoute>
            {" "}
            <Watchlist></Watchlist>{" "}
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default routes;
