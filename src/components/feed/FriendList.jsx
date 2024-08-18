import three_dot from "../../assets/three-dot.svg";
import friend1 from "../../assets/friends/friend1.jpeg";
import friend2 from "../../assets/friends/friend2.jpeg";
import friend3 from "../../assets/friends/friend3.jpeg";
import friend4 from "../../assets/friends/friend4.jpeg";
import friend5 from "../../assets/friends/friend5.jpeg";

const FriendList = () => {
	return (
		<div className="w-full h-screen">
			<div className="flex justify-between items-center mb-5">
				<h2 className="roboto-bold text-base text-[#4E5D78] ">
					Friends
				</h2>

				<img src={three_dot} alt="three dot" />
			</div>

			<div className="space-y-4 h-screen overflow-y-auto">
				{friendListData.map((item) => (
					<div
						key={item.id}
						className="flex items-center justify-between"
					>
						<div className="flex items-center">
							{item.img === "" ? (
								<div className="medium w-10 h-10 bg-green-200 text-[#38CB89]  flex items-center justify-center rounded-full">
									{item.name
										.split(" ")
										.map((word) => word.charAt(0))
										.join("")}
								</div>
							) : (
								<img
									src={item.img}
									alt={item.name}
									className="w-10 h-10 rounded-full  object-cover"
								/>
							)}

							<p className="roboto-medium text-base text-[#4E5D78] ml-5">
								{item.name}
							</p>
						</div>

						{item.active === "active" ? (
							<span className="inline-block w-2 h-2 bg-[#38CB89] rounded-full" />
						) : (
							<p className="roboto-medium text-xs text-[#4E5D78]/60">
								{item.active} min
							</p>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default FriendList;

const friendListData = [
	{
		id: 0,
		img: friend1,
		name: "Kayleigh Bysouth",
		active: 2,
	},
	{
		id: 1,
		img: friend2,
		name: "Jess Phillips MP",
		active: "active",
	},
	{
		id: 2,
		img: friend3,
		name: "MP Eslam Hisham",
		active: 8,
	},
	{
		id: 3,
		img: "",
		name: "Levizja Vetvendos",
		active: "active",
	},
	{
		id: 4,
		img: friend4,
		name: "Afrim Konjufca",
		active: "active",
	},
	{
		id: 5,
		img: "",
		name: "Ostoja Ostojic",
		active: 4,
	},
	{
		id: 6,
		img: friend1,
		name: "Kayleigh Bysouth",
		active: 2,
	},
	{
		id: 7,
		img: friend2,
		name: "Jess Phillips MP",
		active: "active",
	},
	{
		id: 8,
		img: friend3,
		name: "MP Eslam Hisham",
		active: 8,
	},
	{
		id: 9,
		img: "",
		name: "Levizja Vetvendos",
		active: "active",
	},
	{
		id: 10,
		img: friend4,
		name: "Afrim Konjufca",
		active: "active",
	},
	{
		id: 11,
		img: friend5,
		name: "Ostoja Ostojic",
		active: 4,
	},
	{
		id: 12,
		img: friend1,
		name: "Kayleigh Bysouth",
		active: 2,
	},
	{
		id: 13,
		img: friend2,
		name: "Jess Phillips MP",
		active: "active",
	},
	{
		id: 14,
		img: friend3,
		name: "MP Eslam Hisham",
		active: 8,
	},
	{
		id: 15,
		img: "",
		name: "Levizja Vetvendos",
		active: "active",
	},
	{
		id: 16,
		img: friend4,
		name: "Afrim Konjufca",
		active: "active",
	},
	{
		id: 17,
		img: friend5,
		name: "Ostoja Ostojic",
		active: 4,
	},
];
