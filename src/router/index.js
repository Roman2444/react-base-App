import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Error from "../pages/Error";
import Login from "../pages/Login";

export const routes = [
  { path: "/about", element: About, exact: true },
  { path: "/", element: Posts, exact: true },
  { path: "/posts/:id", element: PostIdPage, exact: true },
  { path: "/login", element: Login, exact: true },
  { path: "/error", element: Error, exact: true }
];
