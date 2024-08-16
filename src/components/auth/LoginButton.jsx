/* eslint-disable react/prop-types */
import googleIcon from "../../assets/google.svg";
import appleIcon from "../../assets/apple.svg";

const Button = ({ img, text }) => {
	return (
		<div className="flex items-center justify-center w-full h-[38px] md:h-[52px] bg-[#4E5D78]/[0.05] rounded-[10px]">
			<img src={img} alt="google icon" />
			<p className="roboto-medium text-[#4E5D78] text-xs md:text-base ml-2 md:ml-6">
				{text}
			</p>
		</div>
	);
};

const LoginButton = () => {
	return (
		<div className="flex items-center justify-between gap-[13px] md:gap-5">
			<Button img={googleIcon} text="Log in with Google" />
			<Button img={appleIcon} text="Log in with Apple" />
		</div>
	);
};

export default LoginButton;
