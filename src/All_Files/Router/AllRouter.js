import { createBrowserRouter } from "react-router-dom";
import Main from "../Layers/Main/Main";
import Home from "../Pages/Home/Home";


const AllRouter = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
        ]
    }
])

export default AllRouter;

