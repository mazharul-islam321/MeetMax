import FeedHeaderSearch from "../header/FeedHeaderSearch";
import Menu from "./menu/Menu";

const FeedScreen = () => {
	return (
		<div className="flex flex-col md:flex-row md:items-center w-full h-screen">
			{/* left side bar */}
			<div className="w-full md:w-[240px] h-[100px] md:h-full order-3 md:order-1">
				<Menu />
			</div>

			{/* middle feed design */}

			<div className="w-full h-[100px] md:h-full bg-[#4E5D78]/[0.03] order-2 md:order-2 rounded-2xl ">
				div 2<div></div>
				<div></div>
			</div>

			{/* right side bar */}
			<div className="w-full md:w-[310px] h-[120px] md:h-full order-1 md:order-3 px-5 ">
				<div className="hidden md:block">
					<FeedHeaderSearch
						placeholderText="Search Friends!"
						searchWidth="270px"
					/>
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
