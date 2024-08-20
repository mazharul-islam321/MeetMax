import at from "../../assets/at.svg";

import lock from "../../assets/lock.svg";
// import eye_on from "../../assets/eye-on.svg";
import eye_off from "../../assets/eye-off.svg";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const LoginForm = () => {
	const navigate = useNavigate();
	const { signIn } = useAuth();

	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm();

	const submitForm = async (formData) => {
		const { email, password } = formData;
		signIn(email, password)
			.then((res) => {
				console.log(res);

				navigate("/");
			})
			.catch((error) => {
				console.log(error);
				setError("root.random", {
					type: "random",
					message: `User with email ${formData.email} is not found`,
				});
			});
	};

	console.log("wewe", errors);

	return (
		<form onSubmit={handleSubmit(submitForm)}>
			<div
				className={`relative ${
					errors.email.message ? "mb-1" : "my-[14px] md:my-5"
				}`}
			>
				<input
					{...register("email", { required: "Email ID is Required" })}
					type="email"
					id="email"
					name="email"
					placeholder="Your Email"
					className={`relative w-full h-10 md:h-[52px] pl-[34px] md:pl-11 border ${
						errors.email
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
			{errors && (
				<div role="alert" className="text-[#FF5630]">
					{errors.email.message}
				</div>
			)}

			<div
				className={`relative ${
					errors.password.message ? "mb-1" : "my-[14px] md:my-5"
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
					placeholder="enter password"
					className={`relative w-full h-10 md:h-[52px] pl-[34px] md:pl-11 pr-[34px] md:pr-11 border ${
						errors.password
							? "border-[#FF5630] "
							: "border-[#4E5D78]/20 "
					}rounded-md md:rounded-[10px] focus:outline-none focus:border-[#377DFF] placeholder-[#4E5D78]/60`}
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
			{errors && (
				<div role="alert" className="text-[#FF5630]">
					{errors.password.message}
				</div>
			)}

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

				<Link to="/forgotPassword">
					<p className="roboto-medium text-[#4E5D78] text-[14px]">
						Forgot Password?
					</p>
				</Link>
			</div>

			<button
				type="submit"
				className="inline-flex items-center justify-center w-full h-10 md:h-[52px] bg-[#377DFF] text-white rounded-[10px] my-5 md:my-[30px]"
			>
				<span>Sign In</span>
			</button>

			<p role="alert" className="text-[#FF5630] mt-[-10px]">
				{errors?.root?.random?.message}
			</p>
		</form>
	);
};

export default LoginForm;
