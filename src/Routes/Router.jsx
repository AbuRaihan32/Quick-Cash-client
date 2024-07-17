import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import SendMoney from "../Pages/SendMoney/SendMoney";
import CashOut from "../Pages/CashOut/CashOut";
import CashIn from "../Pages/CashIn/CashIn";
import Balance from "../Pages/Balance/Balance";
import History from "../Pages/History/History";
import TransitionManageAgent from "../Pages/TransitionManageAgent/TransitionManageAgent";
import UserManage from "../Pages/UserManage/UserManage";
import SystemManage from "../Pages/SystemManage/SystemManage";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
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
        {
            path: '/sendMoney',
            element: <SendMoney></SendMoney>
        },
        {
            path: '/cashOut',
            element: <CashOut></CashOut>
        },
        {
            path: '/cashIn',
            element: <CashIn></CashIn>
        },
        {
            path: '/balance',
            element: <Balance></Balance>
        },
        {
            path: '/history',
            element: <History></History>
        },
        {
            path: '/transitionManage',
            element: <TransitionManageAgent></TransitionManageAgent>
        },
        {
            path: '/userManage',
            element: <UserManage></UserManage>
        },
        {
            path: '/systemManage',
            element: <SystemManage></SystemManage>
        },
    ]
  },
]);
