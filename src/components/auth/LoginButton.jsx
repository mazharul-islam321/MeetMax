/* eslint-disable react/prop-types */

const LoginButton = ({ img, text }) => {
	return (
		<div className="flex items-center justify-center w-full h-[52px] bg-[#4E5D78]/[0.05] rounded-[10px]">
			<img src={img} alt="google icon" />
			<p className="roboto-medium text-[#4E5D78] text-base ml-6">
				{text}
			</p>
		</div>
	);
};

export default LoginButton;
