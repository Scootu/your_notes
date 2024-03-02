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
import "./i18/i18next";
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
        let valN: string = value.toString();
        console.log(valN);

        if (name === "birthdayYear" && isNaN(parseInt(valN))) {
          errors[name] = "birthday year need to be a number";
        } else if (
          name === "birthdayYear" &&
          (parseInt(valN) >= 2024 || parseInt(valN) <= 1900)
        ) {
          errors[name] = "Enter a valide birthday year";
        }
      }

      if (Object.values(errors).length === 0) {
        console.log(formData.entries());

        return redirect("/your_notes/login");
      }
      return errors;
    },
  },
  {
    path: "/your_notes/login",
    element: <SignupPage />,
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

        if (name === "userPassword") {
          const password = value.toString();
          // Check if password meets the criteria for a strong password
          if (
            !(
              (
                password.length >= 8 &&
                /[a-z]/.test(password) && // At least one lowercase letter
                /[A-Z]/.test(password) && // At least one uppercase letter
                /\d/.test(password) && // At least one digit
                /[!@#$%^&*()_+{}\[\]:;<>,.?~\\|\-=]/.test(password)
              ) // At least one special character
            )
          ) {
            errors[name] =
              "Password must be at least 8 characters long and include uppercase and lowercase letters, numbers, and special characters";
          }
        }
      }
      return errors;
    },
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
