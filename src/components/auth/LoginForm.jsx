import at from "../../assets/at.svg";

import lock from "../../assets/lock.svg";
// import eye_on from "../../assets/eye-on.svg";
import eye_off from "../../assets/eye-off.svg";

const LoginForm = () => {
	return (
		<form>
			<div className="relative my-[14px] md:my-5">
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

			<div className="relative mt-[14px] md:mt-5">
				<input
					type="password"
					id="password"
					name="password"
					placeholder="enter password"
					className={`relative w-full h-10 md:h-[52px] pl-[34px] md:pl-11 pr-[34px] md:pr-11 border border-[#4E5D78]/20 rounded-md md:rounded-[10px] focus:outline-none focus:border-[#377DFF] placeholder-[#4E5D78]/60`}
				/>

				<img
					src={lock}
					alt="password icon"
					className="absolute top-0 bottom-0 my-auto left-[10px] md:left-4  peer-disabled:cursor-not-allowed"
				/>

				<img
					src={eye_off}
					alt="password visible"
					className="absolute top-0 bottom-0 my-auto right-[10px] md:right-4"
				/>
			</div>

			<div className="flex items-center justify-between pl-2 md:pl-5 pr-2 mt-[14px] md:t-5">
				<div className="flex items-center">
					<input
						type="checkbox"
						id="login"
						name="login"
						value="login"
						className="h-4 w-4 cursor-pointer border-4 mr-3 md:mr-4"
					/>
					<label
						htmlFor="login"
						className="roboto-medium text-[#4E5D78] text-[14px]"
					>
						Remember me
					</label>
				</div>

				<p className="roboto-medium text-[#4E5D78] text-[14px]">
					Forgot Password?
				</p>
			</div>

			<button
				type="submit"
				className="inline-flex items-center justify-center w-full h-10 md:h-[52px] bg-[#377DFF] text-white rounded-[10px] my-5 md:my-[30px]"
			>
				<span>Sign In</span>
			</button>
		</form>
	);
};

export default LoginForm;
