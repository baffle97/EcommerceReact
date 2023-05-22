
import {
    createBrowserRouter,
  } from "react-router-dom";
import { Login } from './components/login/login';
import Home from "./components/home/Home";
import {AuthGuard} from "./authGuard"
import {checkValidRoute} from './services/helper'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },
    {
      path: "home/*",
      element:(<AuthGuard
      isAuthenticated={checkValidRoute}
      ><Home/></AuthGuard>)
    },
  ]);


  export default router