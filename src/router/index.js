import {createBrowserRouter,Navigate} from "react-router-dom";
import Main from "../pages/main";
import Home from "../pages/home/index";
import Mail from "../pages/mail/index";
import PageTwo from "../pages/other/pageTwo";
import PageOne from "../pages/other/pageOne";
import User from "../pages/user";

const routes = [
    {
        path: '/',
        Component: Main,
        children: [
            // 重定向
            {
                path:'/',
                element:<Navigate to="/home" replace/>
            },
            {
                path: 'home',
                Component: Home
            },
            {
                path: 'mail',
                Component: Mail
            },
            {
                path: 'user',
                Component: User
            },
            {
                path: 'other',
                children: [
                    {
                        path: 'pageOne',
                        Component: PageOne
                    },
                    {
                        path: 'pageTwo',
                        Component: PageTwo
                    }]
            }
        ]
    }
]

export default createBrowserRouter(routes)