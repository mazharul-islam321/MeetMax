import avatar from "../../../assets/avatar.jpeg";
import birthdays from "../../../assets/birthday.svg";
import post from "../../../assets/posticon/post.svg";

const BirthDay = () => {
	return (
		<div className="w-full md:w-[288px] h-[258px] rounded-2xl bg-white">
			<div className="flex items-center justify-between px-[18px] my-[10px]">
				<h2 className="roboto-bold text-[#4E5D78] text-base ">
					Birthdays
				</h2>

				<p className="roboto-medium text-[#377DFF] text-[13px] ">
					See All
				</p>
			</div>

			<hr />

			<div className="flex items-center pl-[18px] mt-5 mb-[10px]">
				<img
					src={avatar}
					alt=""
					className="w-[40px] h-[40px] rounded-md object-cover mr-5"
				/>

				<div>
					<p className="roboto-medium text-[#4E5D78] text-base">
						Edilson De Carvalho
					</p>
					<p className="roboto-medium text-[#4E5D78]/80 text-xs">
						Birthday today
					</p>
				</div>
			</div>

			<div className="flex items-center ml-4 md:ml-0 md:justify-center gap-[10px] mb-[18px]">
				<input
					className="w-[350px] md:w-[212px] h-[30px] bg-[#4E5D78]/[.05] pl-[10px] rounded-[10px] focus:outline-none  placeholder-[#4E5D78]/60 text-[#4E5D78]"
					type="text"
					placeholder="what hapening?"
					name=""
					id=""
				/>

				<div className="flex items-center justify-center w-[30px] h-[30px]  bg-[#377DFF]/[0.08] rounded-[5px]  ">
					<img src={post} alt="send" />
				</div>
			</div>

			<div className="w-[385px] md:w-[252px] mx-[18px] bg-[#4E5D78]/[.03] rounded-[10px] p-[10px]">
				<div className="flex items-center ">
					<div
						className={`w-[40px] h-[40px]  bg-[#FFAB00]/[.2] flex items-center justify-center rounded-md mr-5`}
					>
						<img src={birthdays} alt="" className="object-cover" />
					</div>

					<div className="w-3/4  ">
						<p className="roboto-medium text-[#4E5D78] text-base ">
							Upcoming birthdays
						</p>
						<p className="roboto-medium text-[#4E5D78]/80 text-xs">
							See 12 others have upcoming birthdays
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BirthDay;
