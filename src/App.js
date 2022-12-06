import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./Components/Blog/Blog";
import ErrorElement from "./Components/ErrorElement/ErrorElement";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";
import Quizes from "./Components/Quizes/Quizes";
import Statistisks from "./Components/Statistisks/Statistisks";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorElement></ErrorElement>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
        },
        {
          path: "/statistisks",
          element: <Statistisks></Statistisks>,
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/quiz/:topicId",
          element: <Quizes></Quizes>,
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.topicId}`
            );
          },
        },
      ],
    },
  ]);
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
