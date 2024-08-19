import man from "../../assets/searchFriends/avatar.jpeg";
import cat from "../../assets/searchFriends/cat.jpeg";
import flower from "../../assets/searchFriends/flower.jpeg";
import shoe from "../../assets/searchFriends/shoe.jpeg";
import paper from "../../assets/searchFriends/paper.jpeg";
import snow from "../../assets/searchFriends/snow.jpeg";
import arrow_right from "../../assets/arrowicon/arrow-right.svg";

const SearchFriend = () => {
	return (
		<div className="relative">
			<div className="absolute top-10 left-5 w-4 h-4 flex items-center justify-center bg-white rounded-full">
				<span className="text-[#4E5D78]">+</span>
			</div>

			<div className="absolute top-5 right-2 w-4 h-4 flex items-center justify-center bg-white rounded-full">
				<img src={arrow_right} alt="arrow right" />
			</div>

			<div className="overflow-x-auto my-[30px] no-scrollbar">
				<div className="flex w-max ">
					{SearchFriendList.map((item) => (
						<div
							key={item.id}
							className="flex flex-col items-center mr-[18px]"
						>
							<div className="w-[50px] h-[50px] rounded-full overflow-hidden border-2 border-[#377DFF] flex items-center justify-center">
								<img
									src={item.img}
									alt={item.name}
									className="w-full h-full object-cover"
								/>
							</div>

							<p className="roboto-medium text-sm mt-[10px] text-[#4E5D78]">
								{item.name}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SearchFriend;

const SearchFriendList = [
	{
		id: 0,
		img: man,
		name: "Saleh",
	},
	{
		id: 1,
		img: cat,
		name: "Edilson",
	},
	{
		id: 2,
		img: flower,
		name: "Afrim",
	},
	{
		id: 3,
		img: shoe,
		name: "Eduardo",
	},
	{
		id: 4,
		img: paper,
		name: "Eduardo",
	},
	{
		id: 5,
		img: snow,
		name: "Eduardo",
	},
];
