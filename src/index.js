import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
// css
import "./css/header.css";
import "./css/index.css";
import "./css/categories.css";
import "./css/App.css";
import "./css/main.css";
import "./css/expenses.css";
// components
import Header from "./components/Header";
import Main from "./components/Main";
import ExpensesCreate from "./components/ExpensesCreate";
import Category from "./components/Category";
// import App from './components/App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/main",
        element: <Main />,
      },
      {
        path: "expenses",
        element: <ExpensesCreate />,
      },
      {
        path: "categories",
        element: <Category />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
