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
import { SigninPage } from "./pages/SigninPage.tsx";
import { SignupPage } from "./pages/SignupPage.tsx";
import { Error } from "./@types/Types.ts";
const router = createBrowserRouter([
  {
    path: "/your_notes/",
    loader: () => {
      return redirect("/your_notes/signin");
    },
  },
  {
    path: "/your_notes/signin",
    element: <SigninPage />,
    action: async ({ request }) => {
      interface Error {
        [key: string]: string; // Allow any string key and string value
      }

      let errors: Error = {}; // Initialize errors object
      const formData = await request.formData();

      for (const [name, value] of formData.entries()) {
        if (value === "") {
          errors[name] = `${name} needs to be not empty`;
        }
      }
      if (Object.values(errors).length === 0) {
        return redirect("/your_notes/login");
      }
      return errors;
    },
  },
  { path: "/your_notes/login", element: <SignupPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
