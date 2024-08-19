/* eslint-disable react/prop-types */
import friend1 from "../../../assets/friends/friend1.jpeg";
import friend2 from "../../../assets/friends/friend2.jpeg";
import friend3 from "../../../assets/friends/friend3.jpeg";

const EventCard = ({ title, subtitle, buttonImg, buttonColor, seen }) => {
	return (
		<div className="w-[390px] md:w-[252px] mx-[18px] bg-[#4E5D78]/[.03] rounded-[10px] p-[10px] my-5">
			<div className="flex items-center ">
				<div
					className={`w-[40px] h-[40px]  bg-[${buttonColor}]/[.2] flex items-center justify-center rounded-md mr-5`}
				>
					<img src={buttonImg} alt="" className="object-cover" />
				</div>

				<div className="w-3/4  ">
					<p className="roboto-medium text-[#4E5D78] text-base ">
						{title}
					</p>
					<p className="roboto-medium text-[#4E5D78]/80 text-xs">
						{subtitle}
					</p>
				</div>
			</div>

			<hr className="my-[9px]" />

			<div className=" flex items-center justify-between">
				<p className="roboto-medium text-[#4E5D78] text-xs">
					{seen} seen
				</p>

				<div className="flex items-center justify-start relative w-20">
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
						+{seen - 3}
					</p>
				</div>
			</div>
		</div>
	);
};

export default EventCard;
