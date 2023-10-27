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
import Munshi from "./Munshi";
import Motivation from "./Motivation";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/Bhagavad gita",
        element: <Bhagavad />,
      },
      {
        path: "/Chanakya Niti",
        element: <Chanakya />,
      },
      {
        path: "/Gautam Buddha",
        element: <Gautam />,
      },
      {
        path: "/Swami Vivekananda",
        element: <Swami />,
      },
      {
        path: "/Osho",
        element: <Osho />,
      },
      {
        path: "/Munshi Premchand",
        element: <Munshi />,
      },
      {
        path: "/Life",
        element: <Life />,
      },
      {
        path: "/Motivational",
        element: <Motivation />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
