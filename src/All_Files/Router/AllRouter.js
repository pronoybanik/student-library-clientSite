import { createBrowserRouter } from "react-router-dom";
import Main from "../Layers/Main/Main";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login"
import DeshBoardMain from "../Layers/DeshBoardLayer/DeshBoardMain";
import DeshBoardHomePage from "../DeshBoard/DeshBoardHomePage";


const AllRouter = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ]
    },

    {
        path: '/dashboard',
        element: <DeshBoardMain></DeshBoardMain>,
        children: [
            {
                path: '/dashboard',
                element: <DeshBoardHomePage></DeshBoardHomePage>

            }
        ]


    }
])

export default AllRouter;

