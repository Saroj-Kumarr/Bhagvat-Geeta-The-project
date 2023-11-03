import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Body";
import Bhagavad from "./Bhagavad";
import Chanakya from "./Chanakya";
import Gautam from "./Gautam";
import Swami from "./Swami";
import Osho from "./Osho";
import Life from "./Life";
import Motivation from "./Motivation";
import Abdul from "./Abdul";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },{
        path:"/:id",
        element:<Bhagavad/>
      }
      // {
      //   path: "/Bhagavad gita",
      //   element: <Bhagavad />,
      // },
      // {
      //   path: "/Chanakya Niti",
      //   element: <Chanakya />,
      // },
      // {
      //   path: "/Gautam Buddha",
      //   element: <Gautam />,
      // },
      // {
      //   path: "/Swami Vivekananda",
      //   element: <Swami />,
      // },
      // {
      //   path: "/Osho",
      //   element: <Osho />,
      // },
      // {
      //   path: "/Abdul kalam",
      //   element: <Abdul />,
      // },
      // {
      //   path: "/Life",
      //   element: <Life />,
      // },
      // {
      //   path: "/Education",
      //   element: <Motivation />,
      // },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
