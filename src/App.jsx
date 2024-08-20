import "./App.css";
import { createBrowserRouter } from "react-router-dom";

import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import ForgotPasswrod from "./pages/ForgotPasswrod";
import HomePage from "./pages/HomePage";
import PrivateRoute from "./components/routes/PrivateRoute";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<PrivateRoute>
				<HomePage />
			</PrivateRoute>
		),
	},
	{
		path: "/homepage",
		element: (
			<PrivateRoute>
				<HomePage />
			</PrivateRoute>
		),
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
