import friend1 from "../../../assets/friends/friend1.jpeg";
import friend2 from "../../../assets/friends/friend2.jpeg";
import friend3 from "../../../assets/friends/friend3.jpeg";

const PostReaction = () => {
	return (
		<div className="flex items-center justify-between mt-[18px] mb-[14px] ">
			<div className="flex items-center justify-start relative">
				<img
					src={friend1}
					alt=""
					className="h-[22px] w-[22px] rounded-full"
				/>
				<img
					src={friend2}
					alt=""
					className="h-[22px] w-[22px] rounded-full absolute left-5"
				/>
				<img
					src={friend3}
					alt=""
					className="h-[22px] w-[22px] rounded-full absolute left-10"
				/>

				<p className="flex items-center justify-center h-[22px] w-[22px] rounded-full bg-[#4E5D78] text-white text-xs roboto-medium absolute left-14">
					+9
				</p>
			</div>

			<div className="flex items-center gap-[17px]">
				<p className="text-[#4E5D78]/60 text-[14px] roboto-medium">
					3 Comments
				</p>

				<p className="text-[#4E5D78]/60 text-[14px] roboto-medium">
					17 share
				</p>
			</div>
		</div>
	);
};

export default PostReaction;
