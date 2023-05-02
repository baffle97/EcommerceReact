
import {
    createBrowserRouter,
  } from "react-router-dom";
import { Login } from './components/login/login';
import Home from "./components/home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },
    {
      path: "home",
      element:<Home/> ,
    },
  ]);


  export default router