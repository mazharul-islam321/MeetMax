import "./App.css";
import { createBrowserRouter } from "react-router-dom";

import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import ForgotPasswrod from "./pages/ForgotPasswrod";
import HomePage from "./pages/HomePage";

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
