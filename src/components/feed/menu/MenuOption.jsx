/* eslint-disable react/prop-types */

const MenuOption = ({ item }) => {
	return (
		<div
			className={`relative flex items-center w-[200px] h-[46px] rounded-[10px] ${
				item.id === 0 && "bg-[#4E5D78]"
			} mx-5 my-[10px] `}
		>
			<img src={item.menuIcon} alt={item.menuText} className="mx-5" />

			<span
				className={`roboto-bold ${
					item.id === 0
						? "text-[#FFFFFF]"
						: "text-[#4E5D78] mr-[14px]"
				}  text-base`}
			>
				{item.menuText}
			</span>

			{item.id === 3 && (
				<div className="flex items-baseline justify-center w-4 h-4 rounded-full bg-[#FF5630] ">
					<span className="roboto-regular text-[#FFFFFF] text-xs">
						2
					</span>
				</div>
			)}
		</div>
	);
};

export default MenuOption;

// bg-[#4E5D78]
