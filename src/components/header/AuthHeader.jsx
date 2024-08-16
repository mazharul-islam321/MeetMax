import AngleDown from "../../assets/angle/AngleDown";
import Logo from "../Logo";

const AuthHeader = () => {
	return (
		<header className="flex items-center justify-between px-6 md:px-[30px] py-5">
			<Logo />
			<div className="flex items-center justify-center w-[95px] md:w-[154px] h-[24px] md:h-[38px] rounded bg-white shadow-[1px_5px_30px_-15px_rgba(0,0,0,0.4)]">
				<span className="roboto-medium text-[#4E5D78]/60 text-[10px] md:text-sm mr-[7px] md:mr-5">
					English (UK)
				</span>

				<AngleDown />
			</div>
		</header>
	);
};

export default AuthHeader;
