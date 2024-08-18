import "./App.css";
import { createBrowserRouter } from "react-router-dom";

import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import ForgotPasswrod from "./pages/ForgotPasswrod";
import HomePage from "./pages/HomePage";

/* 

roboto-bold text-[#4E5D78] text-lg ml-[10px]

https://via.placeholder.com/150

 */

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/homepage",
		element: <HomePage />,
	},
	{
		path: "/register",
		element: <RegistrationPage />,
	},
	{
		path: "/login",
		element: <LoginPage />,
	},
	{
		path: "/forgotPassword",
		element: <ForgotPasswrod />,
	},
]);

export default router;
