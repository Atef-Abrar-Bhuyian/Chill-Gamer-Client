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
import ReviewDetails from "../pages/ReviewDetails/ReviewDetails";


const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://chill-gamer-server-ashen.vercel.app/topgames"),
      },
      {
        path: "/allreviews",
        element: <AllReviews></AllReviews>,
        loader: () => fetch("https://chill-gamer-server-ashen.vercel.app/games"),
      },
      {
        path: "/reviewdetails/:id",
        element: <ReviewDetails></ReviewDetails>,
        loader: ({ params }) =>
          fetch(`https://chill-gamer-server-ashen.vercel.app/games/${params.id}`),
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
        loader: () => fetch("https://chill-gamer-server-ashen.vercel.app/games"),
      },
      {
        path: "/updategame/:id",
        element: (
          <PrivateRoute>
            <UpdateGameReview></UpdateGameReview>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://chill-gamer-server-ashen.vercel.app/games/${params.id}`),
      },
      {
        path: "/mywatchlist",
        element: (
          <PrivateRoute>
            {" "}
            <Watchlist></Watchlist>{" "}
          </PrivateRoute>
        ),
        loader: ()=> fetch("https://chill-gamer-server-ashen.vercel.app/wishlist")
      },
    ],
  },
]);

export default routes;
