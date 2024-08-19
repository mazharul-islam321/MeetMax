import avatar from "../../assets/avatar.jpeg";
import explore from "../../assets/socialMedia/explore.svg";
import facebook from "../../assets/socialMedia/facebook.svg";
import twitter from "../../assets/socialMedia/twitter.svg";
import instagram from "../../assets/socialMedia/instagram.svg";

const FrinedSuggestion = () => {
	return (
		<div className="w-[288px] h-[216px] rounded-2xl bg-white pt-[10px] mb-[30px]">
			<div className="flex items-center justify-between px-[18px] mb-[10px]">
				<h2 className="roboto-bold text-[#4E5D78] text-base ">
					You Might Like
				</h2>

				<p className="roboto-medium text-[#377DFF] text-[13px] ">
					See All
				</p>
			</div>

			<hr />

			<div className="flex items-center pl-[18px] mt-5 mb-[14px]">
				<img
					src={avatar}
					alt=""
					className="w-[50px] h-[50px] rounded-full object-cover mr-5"
				/>

				<div>
					<p className="roboto-medium text-[#4E5D78] text-base">
						Radovan SkillArena
					</p>
					<p className="roboto-medium text-[#4E5D78]/80 text-xs">
						Founder & CEO at Trophy
					</p>
				</div>
			</div>

			<div className="flex items-center justify-center gap-4 mb-6">
				<img src={explore} alt="" />
				<img src={facebook} alt="" />
				<img src={twitter} alt="" />
				<img src={instagram} alt="" />
			</div>

			<div className="flex items-center justify-center gap-5">
				<div className="w-[116px] h-[36px] rounded-md flex items-center justify-center border border-[#4E5D78]/20 ">
					<span className="roboto-bold text-[#4E5D78]/60 text-[14px]">
						Ignore
					</span>
				</div>
				<div className=" w-[116px] h-[36px] rounded-md flex items-center justify-center bg-[#377DFF]">
					<span className="roboto-bold text-white text-[16px]">
						Follow
					</span>
				</div>
			</div>
		</div>
	);
};

export default FrinedSuggestion;
