import logo from "../assets/logo.svg";

const Logo = () => {
	return (
		<a href="#" className="flex items-center">
			<img src={logo} alt="meet max logo" />
			<span className="roboto-bold text-[#4E5D78] text-lg ml-[10px]">
				MeetMAX
			</span>
		</a>
	);
};

export default Logo;
