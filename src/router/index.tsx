import About from "@/page/about";
import App from "@/page/home";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/about",
    element: <About />,
  },
]);
