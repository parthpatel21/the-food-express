import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Footer from "./components/Footer";

import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "../index.css";
// import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile.js";
import Shimmer from "./components/Shimmer";

//Chunking
//Code Splitting
//Dynamic bundling
//lazy Loading
//on Demand Loading
//Dynamic Import

const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
        children: [{ path: "profile", element: <Profile /> }],
      },
      { path: "/contact", element: <Contact /> },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
