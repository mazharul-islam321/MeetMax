import { Link } from "react-router-dom";
import AuthHeader from "../components/header/AuthHeader";
import SubTitle from "../components/header/SubTitle";
import Title from "../components/header/Title";
import at from "../assets/at.svg";
import angle_left from "../assets/angle-left.svg";

const ForgotPasswrod = () => {
	return (
		<section className="bg-gradient-to-br from-[#FFFFFF]/40 to-[#FFFFFF]/10 pb-[88px]">
			<AuthHeader />

			{/* title of the forgot password screen */}
			<div className="text-center mt-[30px]">
				<Title text="Forgot password?" />

				<div className="w-2/3 mx-auto mt-[10px]">
					<SubTitle text="Enter your details to receive a rest link" />
				</div>
			</div>

			{/* forgot password card */}
			<div className="w-[327px] md:w-[580px] h-[186px]  md:h-[248px] py-6 px-5 md:p-10 mx-auto shadow-[0_5px_20px_-15px_rgba(0,0,0,0.3)] bg-white  mt-7 rounded-[20px]">
				<form>
					<div className="relative mb-[14px] md:mb-5">
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Your Email"
							className={`relative w-full h-10 md:h-[52px] pl-[34px] md:pl-11 border border-[#4E5D78]/20 rounded-md md:rounded-[10px] focus:outline-none focus:border-[#377DFF] placeholder-[#4E5D78]/60`}
						/>
						<img
							src={at}
							alt="at"
							className="absolute top-0 bottom-0 my-auto left-[10px] md:left-4 peer-disabled:cursor-not-allowed"
						/>
					</div>

					<button
						type="submit"
						className="inline-flex items-center justify-center w-full h-10 md:h-[52px] bg-[#377DFF] text-white rounded-[10px] mb-5 md:mb-[30px]"
					>
						<span>Send</span>
					</button>
				</form>

				<Link
					to="/login"
					className="flex items-center justify-center roboto-medium text-xs md:text-base text-[#377DFF] hover:underline gap-[14px] "
				>
					<img src={angle_left} alt="back button" />
					<span>Back to Sign In</span>
				</Link>
			</div>
		</section>
	);
};

export default ForgotPasswrod;
