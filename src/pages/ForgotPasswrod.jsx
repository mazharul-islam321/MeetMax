import { Link, useNavigate } from "react-router-dom";
import AuthHeader from "../components/header/AuthHeader";
import SubTitle from "../components/auth/SubTitle";
import Title from "../components/auth/Title";
import at from "../assets/at.svg";
import angle_left from "../assets/angle-left.svg";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";

const ForgotPasswrod = () => {
	const navigate = useNavigate();
	const { updatePasswordEmail } = useAuth();

	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm();

	const submitForm = async (formData) => {
		const { email } = formData;

		updatePasswordEmail(email)
			.then(() => {
				alert("please check your email");
				navigate("/login");
			})
			.catch((error) => {
				console.log(error);
				setError("root.random", {
					type: "random",
					message: `User with email ${formData.email} is not found`,
				});
			});
	};
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
				<form onSubmit={handleSubmit(submitForm)}>
					<div
						className={`relative ${
							errors?.email?.message
								? "mb-1"
								: "my-[14px] md:my-5"
						}`}
					>
						<input
							{...register("email", {
								required: "Email ID is Required",
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

					<button
						type="submit"
						className="inline-flex items-center justify-center w-full h-10 md:h-[52px] bg-[#377DFF] text-white rounded-[10px] mb-5 md:mb-[30px]"
					>
						<span>Send</span>
					</button>
					<p role="alert" className="text-[#FF5630] mt-[-10px]">
						{errors?.root?.random?.message}
					</p>
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
