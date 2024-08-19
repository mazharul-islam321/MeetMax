import avatar from "../../../assets/avatar.jpeg";
import three_dot from "../../../assets/three-dot.svg";

const PostHeader = () => {
	return (
		<div className="flex items-center justify-between ">
			<div className="flex items-center gap-5">
				<img
					className="w-[50px] h-[50px] rounded-full object-cover"
					src={avatar}
					alt="user image"
				/>

				<div className="">
					<p className="roboto-medium text-[#4E5D78] text-base">
						Sepural Gallery
					</p>
					<p className="roboto-medium text-[#4E5D78]/60 text-xs">
						15h,public
					</p>
				</div>
			</div>

			<img src={three_dot} alt="three dot" />
		</div>
	);
};

export default PostHeader;
