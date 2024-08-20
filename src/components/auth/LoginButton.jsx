/* eslint-disable react/prop-types */
import googleIcon from "../../assets/google.svg";
import appleIcon from "../../assets/apple.svg";
import useAuth from "../../hooks/useAuth";

const Button = ({ img, text, handleGoogleSignIn }) => {
	return (
		<div
			onClick={handleGoogleSignIn}
			className="flex items-center justify-center w-full h-[38px] md:h-[52px] bg-[#4E5D78]/[0.05] cursor-pointer rounded-[10px]"
		>
			<img src={img} alt="google icon" />
			<p className="roboto-medium text-[#4E5D78] text-xs md:text-base ml-2 md:ml-6">
				{text}
			</p>
		</div>
	);
};

const LoginButton = () => {
	const { signInWithGoogle } = useAuth();

	const handleGoogleSignIn = async () => {
		try {
			//2. User Registration
			const result = await signInWithGoogle();
			console.log(result);
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<div className="flex items-center justify-between gap-[13px] md:gap-5">
			<Button
				img={googleIcon}
				text="Log in with Google"
				handleGoogleSignIn={handleGoogleSignIn}
			/>
			<Button img={appleIcon} text="Log in with Apple" />
		</div>
	);
};

export default LoginButton;
