import feed from "../../../assets/menuicon/feed.svg";
import community from "../../../assets/menuicon/community.svg";
import notification from "../../../assets/menuicon/notification.svg";
import explore from "../../../assets/menuicon/explore.svg";
import setting from "../../../assets/menuicon/setting.svg";

const MobileMenu = () => {
	return (
		<div className=" flex justify-between md:hidden px-5">
			{menuItems.map((item) => (
				<div key={item.id} className="flex flex-col items-center">
					<img
						src={item.menuIcon}
						alt={item.menuText}
						className="mx-5"
					/>

					<span className="roboto-regular  text-[#4E5D78] mt-1 text-[10px]">
						{item.menuText}
					</span>
				</div>
			))}
		</div>
	);
};

export default MobileMenu;

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
		menuIcon: notification,
		menuText: "Notification",
	},
	{
		id: 3,
		menuIcon: explore,
		menuText: "Explore",
	},
	{
		id: 4,
		menuIcon: setting,
		menuText: "Settings",
	},
];
