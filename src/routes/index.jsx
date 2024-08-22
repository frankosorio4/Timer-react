import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../Pages/home";
import { HistoryPage } from "../Pages/history";
import { Layout } from '../template'

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                path: '/',
                element:<HomePage/>
            },
            {
                path:'/historico',
                element:<HistoryPage/>
            }
        ]
    }
])