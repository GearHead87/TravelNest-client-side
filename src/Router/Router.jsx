import {
    createBrowserRouter,
} from "react-router-dom"
import MainLayout from "../mainLayout/MainLayout";
import Error from "../pages/Error";
import Home from "../pages/Home";
import AllTouristsSpot from "../pages/AllTouristsSpot";
import AddTouristsSpot from "../pages/AddTouristsSpot";
import MyList from "../pages/MyList";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "all-tourists-spot",
                element: <AllTouristsSpot></AllTouristsSpot>,
            },
            {
                path: "add-tourists-spot",
                element: <PrivateRoute> <AddTouristsSpot></AddTouristsSpot></PrivateRoute>,
            },
            {
                path: "my-list",
                element: <PrivateRoute> <MyList></MyList></PrivateRoute>,
            },
            {
                path: "login",
                element: <Login></Login>,
            },
            {
                path: "register",
                element: <Register></Register>,
            },
        ],
    },
]);