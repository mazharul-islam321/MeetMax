import AuthHeader from "../components/header/AuthHeader";
import Title from "../components/header/Title";
import SubTitle from "../components/header/SubTitle";
import LoginButton from "../components/auth/LoginButton";

import googleIcon from "../assets/google.svg";
import appleIcon from "../assets/apple.svg";
import LoginForm from "../components/auth/LoginForm";

const LoginPage = () => {
	return (
		<section className="bg-gradient-to-br from-[#FFFFFF]/40 to-[#FFFFFF]/10 pb-[88px]">
			<AuthHeader />

			{/* title of the login screen */}
			<div className="text-center mt-[30px]">
				<Title text="Getting Started" />
				<SubTitle text="Create an account to continue and connect with the people." />
			</div>

			{/* login card */}
			<div className="w-[580px] h-[624px] p-10 mx-auto shadow-[0_5px_20px_-15px_rgba(0,0,0,0.3)] bg-white  mt-8 rounded-[20px]">
				<div className="flex items-center justify-between gap-5">
					<LoginButton img={googleIcon} text="Log in with Google" />
					<LoginButton img={appleIcon} text="Log in with Apple" />
				</div>

				{/* horizontal line or divider */}
				<div className="flex items-center my-[30px]">
					<div className="w-full h-px bg-[#4E5D78]/20" />
					<p className="roboto-bold text-[#4E5D78] text-[18px] mx-[21px]">
						OR
					</p>
					<div className="w-full h-px bg-[#4E5D78]/20" />
				</div>

				{/* login form */}

				<LoginForm />

				<div className="flex items-center justify-center text-center roboto-medium text-base">
					<p className="text-[#4E5D78] ">Already have an account?</p>
					<a
						href=""
						className="text-[#377DFF] hover:underline ml-[19px]"
					>
						Sign In
					</a>
				</div>
			</div>
		</section>
	);
};

export default LoginPage;
