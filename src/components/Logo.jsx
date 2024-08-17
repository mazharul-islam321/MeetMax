import { Link } from "react-router-dom";
import LogoIcon from "../assets/logo/LogoIcon";

const Logo = () => {
	return (
		<Link to="/" className="flex items-center">
			<LogoIcon />

			<span className="roboto-bold text-[#4E5D78] text-xs md:text-lg ml-1.5 md:ml-[10px]">
				MeetMAX
			</span>
		</Link>
	);
};

export default Logo;
