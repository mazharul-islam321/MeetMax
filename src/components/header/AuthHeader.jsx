import Logo from "../Logo";
import angleDown from "../../assets/angle-down.svg";

const AuthHeader = () => {
	return (
		<header className="flex items-center justify-between px-[30px] py-5 ">
			<Logo />
			<div className="flex items-center justify-center w-[154px] h-[38px] rounded bg-white shadow-[1px_5px_30px_-15px_rgba(0,0,0,0.4)]">
				<span className="roboto-medium text-[#4E5D78]/60 text-sm mr-5">
					English (UK)
				</span>
				<img src={angleDown} alt="angle down icon" />
			</div>
		</header>
	);
};

export default AuthHeader;
