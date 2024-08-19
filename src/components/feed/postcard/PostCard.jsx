import PostHeader from "./PostHeader";
import city from "../.././../assets/city.jpeg";
import PostReaction from "./PostReaction";
import PostActions from "./PostActions";
import PostComment from "./PostComment";

const PostCard = () => {
	return (
		<section className="w-full md:w-[512px] h-[518px] bg-white p-[18px] rounded-2xl my-2 md:mt-[30px]">
			<PostHeader />

			<img
				className="h-[268px] w-full  mt-[18px] rounded-2xl"
				src={city}
				alt="post image"
			/>

			{/* post reactor image */}
			<PostReaction />

			{/* user action  */}
			<hr />
			<PostActions />
			<hr />

			{/* post comment section */}
			<PostComment />
		</section>
	);
};

export default PostCard;
