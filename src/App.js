// import './App.css';

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes";

function App() {

  const router = createBrowserRouter([
    ...routes
  ]);
  
  return (
    <RouterProvider router={router} />
    
  );
}

export default App;


//error handling(toast) redux(user) protectedRoutes code clean optimisation 