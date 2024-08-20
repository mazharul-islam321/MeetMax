import at from "../../assets/at.svg";
import user_name from "../../assets/user-name.svg";
import lock from "../../assets/lock.svg";
// import eye_on from "../../assets/eye-on.svg";
import eye_off from "../../assets/eye-off.svg";
import calendar from "../../assets/calendar.svg";
import gender from "../../assets/gender.svg";

import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
	const { createUser } = useAuth();
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm();
	const [startDate, setStartDate] = useState();

	const submitForm = async (formData) => {
		console.log(formData);
		const { email, password } = formData;

		try {
			let response = await createUser(email, password);
			console.log(response);
			navigate("/login");
		} catch (error) {
			console.error(error);
			setError("root.random", {
				type: "random",
				message: `Something went wrong: ${error.message}`,
			});
		}
	};

	return (
		<form onSubmit={handleSubmit(submitForm)}>
			<div
				className={`relative ${
					errors?.email?.message ? "mb-1" : "my-[14px] md:my-5"
				}`}
			>
				<input
					{...register("email", {
						required: "Email is Required",
					})}
					type="email"
					id="email"
					name="email"
					placeholder="Your Email"
					className={`relative w-full h-10 md:h-[52px] pl-[34px] md:pl-11 border ${
						errors?.email
							? "border-[#FF5630] "
							: "border-[#4E5D78]/20 "
					} rounded-md md:rounded-[10px] focus:outline-none focus:border-[#377DFF] placeholder-[#4E5D78]/60`}
				/>
				<img
					src={at}
					alt="at"
					className="absolute top-0 bottom-0 my-auto left-[10px] md:left-4 peer-disabled:cursor-not-allowed"
				/>
			</div>

			{!!errors && (
				<div role="alert" className="text-[#FF5630]">
					{errors?.email?.message}
				</div>
			)}

			<div
				className={`relative ${
					errors?.name?.message ? "mb-1" : "my-[14px] md:my-5"
				}`}
			>
				<input
					{...register("name", {
						required: "name is Required",
					})}
					type="text"
					id="name"
					name="name"
					placeholder="Your Name"
					className={`relative w-full h-10 md:h-[52px] pl-[34px] md:pl-11 border ${
						errors?.name
							? "border-[#FF5630] "
							: "border-[#4E5D78]/20 "
					} rounded-md md:rounded-[10px] focus:outline-none focus:border-[#377DFF] placeholder-[#4E5D78]/60`}
				/>
				<img
					src={user_name}
					alt="user name"
					className="absolute top-0 bottom-0 my-auto left-[10px] md:left-4  peer-disabled:cursor-not-allowed"
				/>
			</div>

			{!!errors && (
				<div role="alert" className="text-[#FF5630]">
					{errors?.name?.message}
				</div>
			)}

			<div
				className={`relative ${
					errors?.password?.message ? "mb-1" : "my-[14px] md:my-5"
				}`}
			>
				<input
					{...register("password", {
						required: "Password is required",
						minLength: {
							value: 8,
							message:
								"Your password must be at least 8 characters",
						},
					})}
					type="password"
					id="password"
					name="password"
					placeholder="Create Password"
					className={`relative w-full h-10 md:h-[52px] pl-[34px] md:pl-11 pr-[34px] md:pr-11 border  ${
						errors?.password
							? "border-[#FF5630] "
							: "border-[#4E5D78]/20 "
					} rounded-md md:rounded-[10px] focus:outline-none focus:border-[#377DFF] placeholder-[#4E5D78]/60`}
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

			{!!errors && (
				<div role="alert" className="text-[#FF5630]">
					{errors?.password?.message}
				</div>
			)}

			<div className="md:flex md:items-center md:justify-between md:gap-5">
				<div
					className={`flex items-center w-full h-10 md:h-[52px] border rounded-md md:rounded-[10px] pl-[10px] md:pl-4 mt-[14px] md:mt-5`}
				>
					<img src={calendar} alt="calendar" />
					<DatePicker
						className="outline-none border-none ml-2"
						selected={startDate}
						onChange={(date) => setStartDate(date)}
						placeholderText="Date of Birth"
					/>
				</div>

				<div
					className={`flex items-center md:justify-between w-full h-10 md:h-[52px] border  rounded-md md:rounded-[10px] px-[10px] md:px-4 mt-[14px] md:mt-5`}
				>
					<img src={gender} alt="gender icon" />

					<div className="ml-[18px] mr-5 md:ml-0 md:mr-0">
						<input
							type="radio"
							id="male"
							name="gender"
							value="male"
							defaultChecked
						/>
						<label
							htmlFor="male"
							className="ml-[10px] md:ml-[14px]"
						>
							Male
						</label>
					</div>

					<div>
						<input
							type="radio"
							id="female"
							name="gender"
							value="female"
						/>
						<label
							htmlFor="female"
							className="ml-[10px] md:ml-[14px]"
						>
							Female
						</label>
					</div>
				</div>
			</div>
			<button
				type="submit"
				className="inline-flex items-center justify-center w-full h-10 md:h-[52px] bg-[#377DFF] text-white rounded-[10px] my-5 md:my-[30px]"
			>
				<span>Sign Up</span>
			</button>
			<p role="alert" className="text-[#FF5630] mt-[-10px]">
				{errors?.root?.random?.message}
			</p>
		</form>
	);
};

export default RegisterForm;
