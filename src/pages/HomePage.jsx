import FeedScreen from "../components/feed/FeedScreen";
import FeedHeader from "../components/header/FeedHeader";

const HomePage = () => {
	return (
		<section className="bg-gradient-to-br from-[#FFFFFF]/40 to-[#FFFFFF]/10">
			<FeedHeader />
			<FeedScreen />
		</section>
	);
};

export default HomePage;
