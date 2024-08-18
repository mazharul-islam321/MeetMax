import FeedHeaderSearch from "../header/FeedHeaderSearch";
import FriendList from "./FriendList";
import Menu from "./menu/Menu";
import SearchFriend from "./SearchFriend";

const FeedScreen = () => {
	return (
		<div className="flex flex-col md:flex-row  w-full h-screen">
			{/* left side bar */}
			<div className="w-full md:w-[240px] h-[100px] md:h-screen order-3 md:order-1">
				<Menu />
			</div>

			{/* middle feed design */}

			<div className="w-full h-[100px] md:h-screen bg-[#4E5D78]/[0.03] order-2 md:order-2 rounded-2xl ">
				div 2
			</div>

			{/* right side bar */}
			<div className="w-full md:w-[310px] h-[120px] md:h-screen order-1 md:order-3 px-5 ">
				<div className="hidden md:block">
					<FeedHeaderSearch
						placeholderText="Search Friends!"
						searchWidth="270px"
					/>

					<SearchFriend />

					<FriendList />
				</div>
			</div>
		</div>
	);
};

export default FeedScreen;

// div 3<div className="w-full h-[100px] bg-pink-600">div 1</div>
// 				<div className="hidden md:block w-full h-[100px] bg-yellow-300">
// 					div 2
// 				</div>
