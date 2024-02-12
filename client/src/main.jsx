import ReactDOM from "react-dom/client";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import App from "./App.jsx";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import OurMenu from "./pages/OurMenu";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import Food from "./pages/Food";
import BecomeOurPartner from "./pages/BecomeOurPartner";
import Cart from "./pages/Cart";
import SignUp from "./components/SignUp";
import { Button } from "reactstrap";

const PageNotFound = () => {
  return (
    <div className="container-fluid my-2">
      <h1>Page Not Found</h1>
      <p>Brief description of the page goes here.</p>
      <div className="mt-4">
        <p>
          Page you are looking for does not exist or under development, please
          contact administrator.
        </p>
      </div>
      <div className="mt-4">
        <Button
          color="primary"
          size="lg" 
          tag={Link} 
          to="/">
          Go back to Home Page
        </Button>
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/our-menu",
        element: <OurMenu />,
      },
      {
        path: "/how-it-works",
        element: <HowItWorks />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/food",
        element: <Food />,
      },
      {
        path: "/partner",
        element: <BecomeOurPartner />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
