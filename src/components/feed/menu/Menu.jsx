import MenuOption from "./MenuOption";
import feed from "../../../assets/menuicon/feedwhite.svg";
import community from "../../../assets/menuicon/community.svg";
import message from "../../../assets/menuicon/message.svg";
import notification from "../../../assets/menuicon/notification.svg";
import explore from "../../../assets/menuicon/explore.svg";
import profile from "../../../assets/menuicon/profile.svg";
import setting from "../../../assets/menuicon/setting.svg";
import logout from "../../../assets/menuicon/logout.svg";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

// md:mx-auto hidden md:block

const Menu = () => {
	const { logOut } = useAuth();
	const navigate = useNavigate();

	const handleLogout = () => {
		logOut()
			.then((res) => {
				navigate("/login");

				console.log("Logged out", res);
			})
			.catch((err) => {
				console.log("Error logging out", err);
			});
	};

	return (
		<div className="mx-auto hidden md:block ">
			{menuItems.map((item) => (
				<MenuOption key={item.id} item={item} />
			))}

			{/* just for logout */}
			<div
				onClick={handleLogout}
				className="relative cursor-pointer flex items-center w-[200px] h-[46px] rounded-[10px] mx-5 my-[10px]"
			>
				<img src={logout} alt="log out" className="mx-5" />
				<span className="roboto-bold text-[#4E5D78] text-base">
					Logout
				</span>
			</div>
		</div>
	);
};

export default Menu;

const menuItems = [
	{
		id: 0,
		menuIcon: feed,
		menuText: "Feed",
	},
	{
		id: 1,
		menuIcon: community,
		menuText: "My community",
	},
	{
		id: 2,
		menuIcon: message,
		menuText: "Messages",
	},
	{
		id: 3,
		menuIcon: notification,
		menuText: "Notification",
	},
	{
		id: 4,
		menuIcon: explore,
		menuText: "Explore",
	},
	{
		id: 5,
		menuIcon: profile,
		menuText: "Profile",
	},
	{
		id: 6,
		menuIcon: setting,
		menuText: "Settings",
	},
];
