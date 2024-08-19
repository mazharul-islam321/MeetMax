import FeedHeaderSearch from "../header/FeedHeaderSearch";
import BirthDay from "./birthDay/BirthDay";
import CreatePost from "./CreatePost";
import FriendList from "./FriendList";
import FrinedSuggestion from "./FrinedSuggestion";
import Menu from "./menu/Menu";
import MobileMenu from "./menu/MobileMenu";
import PostCard from "./postcard/PostCard";
import RecentEvent from "./RecentEvent/RecentEvent";
import SearchFriend from "./SearchFriend";

const FeedScreen = () => {
	return (
		<div className="relative flex flex-col md:flex-row w-full h-full">
			{/* left side bar */}
			<div className="w-full md:w-[240px] h-[100px]  md:h-full order-3 md:order-1 pb-32 md:pb-0 pt-4 md:pt-0">
				<Menu />
				<MobileMenu />
			</div>

			{/* middle feed design */}
			<div className="w-full h-full bg-[#4E5D78]/[0.03] order-2 md:rounded-[30px] pt-2 md:p-[30px] overflow-y-scroll md:pb-28 pb-4">
				<div className="hidden md:flex items-start md:gap-[30px]">
					<div>
						<CreatePost />
						<PostCard />
						<PostCard />
					</div>

					<div>
						<FrinedSuggestion />

						<RecentEvent />

						<BirthDay />
					</div>
				</div>

				<div className="block md:hidden">
					<CreatePost />

					<PostCard />

					<RecentEvent />

					<PostCard />

					<BirthDay />
				</div>
			</div>

			{/* right side bar */}
			<div className="w-full md:w-[310px] h-[120px] md:h-screen order-1 md:order-3 px-5">
				<div className="hidden md:block">
					<FeedHeaderSearch
						placeholderText="Search Friends!"
						searchHeaderWidth={false}
					/>
				</div>

				<SearchFriend />

				<FriendList />
			</div>
		</div>
	);
};

export default FeedScreen;
