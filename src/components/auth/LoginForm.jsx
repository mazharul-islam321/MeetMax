import at from "../../assets/at.svg";
import user_name from "../../assets/user-name.svg";
import lock from "../../assets/lock.svg";
import eye_on from "../../assets/eye-on.svg";
import calendar from "../../assets/calendar.svg";
import gender from "../../assets/gender.svg";

const LoginForm = () => {
	return (
		<form>
			<div className="relative my-[20px]">
				<input
					type="email"
					id="email"
					name="email"
					placeholder="Your Email"
					className={`relative w-full h-[52px] pl-11 border border-[#4E5D78]/20 rounded-[10px] focus:outline-none focus:border-[#377DFF] placeholder-[#4E5D78]/60`}
				/>
				<img
					src={at}
					alt="at"
					className="absolute top-0 bottom-0 my-auto left-4 peer-disabled:cursor-not-allowed"
				/>
			</div>

			<div className="relative my-[20px]">
				<input
					type="text"
					id="name"
					name="name"
					placeholder="Your Name"
					className={`relative w-full h-[52px] pl-11 border border-[#4E5D78]/20 rounded-[10px] focus:outline-none focus:border-[#377DFF] placeholder-[#4E5D78]/60`}
				/>
				<img
					src={user_name}
					alt="user name"
					className="absolute top-0 bottom-0 my-auto left-4 peer-disabled:cursor-not-allowed"
				/>
			</div>

			<div className="relative my-[20px]">
				<input
					type="password"
					id="password"
					name="password"
					placeholder="Create Password"
					className={`relative w-full h-[52px] pl-11 pr-11 border border-[#4E5D78]/20 rounded-[10px] focus:outline-none focus:border-[#377DFF] placeholder-[#4E5D78]/60`}
				/>

				<img
					src={lock}
					alt="password icon"
					className="absolute top-0 bottom-0 my-auto left-4 peer-disabled:cursor-not-allowed"
				/>

				<img
					src={eye_on}
					alt="password visible"
					className="absolute top-0 bottom-0 my-auto right-4"
				/>
			</div>

			<div className="flex items-center justify-between">
				<div className="flex items-center w-60 h-[52px] border border-[#4E5D78]/20 rounded-[10px] pl-4">
					<img src={calendar} alt="calendar" />
					<p className="roboto-medium text-[#4E5D78]/60 text-[14px] ml-4">
						date of bith
					</p>
				</div>

				<div className="flex items-center justify-between w-60 h-[52px] border border-[#4E5D78]/20 rounded-[10px] px-4">
					<img src={gender} alt="gender icon" />

					<div>
						<input
							type="radio"
							id="male"
							name="male"
							value="HTML"
							checked
						/>
						<label htmlFor="male" className="ml-[14px]">
							Male
						</label>
					</div>
					<div>
						<input
							type="radio"
							id="male"
							name="male"
							value="HTML"
						/>
						<label htmlFor="male" className="ml-[14px]">
							Female
						</label>
					</div>
				</div>
			</div>

			<button
				type="submit"
				className="inline-flex items-center justify-center w-full h-[52px] bg-[#377DFF] text-white rounded-[10px] my-[30px]"
			>
				<span>Sign Up</span>
			</button>
		</form>
	);
};

export default LoginForm;
