import Main from "../modules/main";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default [
    {
        path: "/",
        element:<Main/>,
      },
    ...Home,
    ...SignIn,
    ...SignUp
]