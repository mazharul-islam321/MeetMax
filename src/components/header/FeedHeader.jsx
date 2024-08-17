import Logo from "../Logo";
import Profile from "../profile/Profile";

import FeedHeaderSearch from "./FeedHeaderSearch";
import message from "../../assets/menuicon/message.svg";
import avatar from "../../assets/avatar.jpeg";

const FeedHeader = () => {
	return (
		<header className="flex items-center  pl-5 pr-[30px] py-[18px]">
			<>
				<div className="mr-[102px] hidden md:block">
					<Logo />
				</div>
				<img
					src={avatar}
					alt="profile img"
					className="w-[32px] h-[32px] rounded-[10px] object-cover md:hidden mr-5"
				/>
			</>

			<div className="flex grow">
				<FeedHeaderSearch
					placeholderText="Search for something here..."
					searchWidth="542px"
				/>
			</div>

			<>
				<div>
					<Profile />
				</div>
				<img src={message} alt="message icon" className="md:hidden" />
			</>
		</header>
	);
};

export default FeedHeader;
