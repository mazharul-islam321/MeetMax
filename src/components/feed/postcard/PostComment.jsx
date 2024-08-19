import avatar from "../../../assets/avatar.jpeg";
import gif from "../../../assets/posticon/gif.svg";
import picture from "../../../assets/posticon/picture.svg";
import feeling from "../../../assets/posticon/feeling.svg";
import post from "../../../assets/posticon/post.svg";

const PostComment = () => {
	return (
		<div className="flex items-center mt-[14px]">
			<img
				className="w-[38px] h-[38px] rounded-full object-cover"
				src={avatar}
				alt="user image"
			/>

			<div className="flex items-center justify-between w-[289px] md:w-[376px] h-[38px] bg-[#4E5D78]/[.05] px-[10px] rounded-[10px] ml-[14px] mr-[10px]">
				<input
					className="w-3/4 h-full bg-white/0  focus:outline-none placeholder-[#4E5D78]/60 text-[#4E5D78]"
					type="text"
					placeholder="write a comment..."
					name=""
					id=""
				/>
				<div className="flex items-center gap-[14px]">
					<img src={gif} alt="" />
					<img src={picture} alt="" />
					<img src={feeling} alt="" />
				</div>
			</div>

			<div className="flex items-center justify-center w-[38px] h-[38px]  bg-[#377DFF]/[0.08] rounded-[5px]  ">
				<img src={post} alt="send" />
			</div>
		</div>
	);
};

export default PostComment;
