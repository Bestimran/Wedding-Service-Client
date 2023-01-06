import LogIn from "../Authentication/Login/Login";
import SignUp from "../Authentication/Signup/SignUp";
import AddService from "../Components/AddService/AddService";
import Details from "../Components/Details/Details";
import Home from "../Components/Home/Home";
import Blog from "../Components/Shared/Blog/Blog";
import Services from "../Components/Shared/Services/Services";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/service",
        element: <Services></Services>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
      },

      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/addservice",
        element: <AddService></AddService>,
      },
    ],
  },
]);
