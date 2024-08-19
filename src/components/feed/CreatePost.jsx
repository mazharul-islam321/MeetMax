import avatar from "../../assets/avatar.jpeg";
import video from "../../assets/posticon/video.svg";
import picture from "../../assets/posticon/picture.svg";
import feeling from "../../assets/posticon/feeling.svg";

const CreatePost = () => {
	return (
		<div className="flex flex-col justify-between w-full md:w-[512px] h-[136px] bg-white p-[18px] rounded-2xl">
			<div className="flex items-center gap-[14px]">
				<img
					className="w-[42px] h-[42px] rounded-full object-cover"
					src={avatar}
					alt="user image"
				/>

				<input
					className="w-full h-[42px] bg-[#4E5D78]/[.05] pl-[10px] rounded-[10px] focus:outline-none  placeholder-[#4E5D78]/60 text-[#4E5D78]"
					type="text"
					placeholder="what hapening?"
					name=""
					id=""
				/>
			</div>

			<div className="flex items-center justify-between">
				<div className="flex items-center justify-around">
					<div className="flex gap- md:gap-[10px] cursor-pointer">
						<img src={video} alt="video icon" />
						<p className="roboto-medium text-[#4E5D78] text-sm">
							<span className="hidden md:inline">Live Video</span>
							<span className="inline md:hidden ml-1">Video</span>
						</p>
					</div>

					<div className="flex gap-[10px] mx-6 md:mx-[30px] cursor-pointer">
						<img src={picture} alt="photo" />
						<p className="roboto-medium text-[#4E5D78] text-sm">
							<span className="hidden md:inline">
								Photo/Video
							</span>
							<span className="inline md:hidden ml-1">Photo</span>
						</p>
					</div>

					<div className="flex gap-[10px] cursor-pointer">
						<img src={feeling} alt="" />
						<p className="roboto-medium text-[#4E5D78] text-sm">
							Feeling
						</p>
					</div>
				</div>

				<div className="inline-flex items-center justify-center w-[92px] h-10 bg-[#377DFF] text-white rounded-[10px] cursor-pointer">
					Post
				</div>
			</div>
		</div>
	);
};

export default CreatePost;
