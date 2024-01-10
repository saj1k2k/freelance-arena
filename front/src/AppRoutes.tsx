import {FC} from 'react';
import {RouteObject, useRoutes} from "react-router-dom";
import AppPage from "./features/AppPage.tsx";
import Home from "./features/home/Home.tsx";

const AppRoutes:FC = () => {
    const routes: RouteObject[] = [
        {
            path: '/',
            element: <AppPage/>
        },
        {
            path: '/',
            element: <Home/>
        }
    ]

    return useRoutes(routes);
};

export default AppRoutes;