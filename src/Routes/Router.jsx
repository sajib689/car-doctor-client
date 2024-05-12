import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Layout/Home";
import CheckOut from "../Components/CheckOut";
import Login from "../Authorization/Login";
import Register from "../Authorization/Register";
import PrivateRoute from "./../Provider/PrivateRoute";
import MyServices from "../Components/MyServices";
import Contact from "../Components/Contact";
import About from "../Components/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/services/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/myservices",
        element: <MyServices />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/about",
        element: <About />
      },
    ],
  },
]);

export default router;
