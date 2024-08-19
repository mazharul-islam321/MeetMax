import MenuOption from "./MenuOption";
import feed from "../../../assets/menuicon/feedwhite.svg";
import community from "../../../assets/menuicon/community.svg";
import message from "../../../assets/menuicon/message.svg";
import notification from "../../../assets/menuicon/notification.svg";
import explore from "../../../assets/menuicon/explore.svg";
import profile from "../../../assets/menuicon/profile.svg";
import setting from "../../../assets/menuicon/setting.svg";
import logout from "../../../assets/menuicon/logout.svg";

// md:mx-auto hidden md:block

const Menu = () => {
	return (
		<div className="mx-auto hidden md:block ">
			{menuItems.map((item) => (
				<MenuOption key={item.id} item={item} />
			))}

			{/* just for logout */}
			<div className="relative flex items-center w-[200px] h-[46px] rounded-[10px] mx-5 my-[10px]">
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
