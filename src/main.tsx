import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.tsx";
import { Roote } from "./roote/Roote.tsx";
import { SigninPage } from "./pages/SigninPage.tsx";

const router = createBrowserRouter([
  {
    path: "/your_notes/",
    element: <Roote />,
    loader: () => {
      return redirect("/your_notes/signin");
    },
    children: [
      {
        path: "signin/",
        element: <SigninPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
