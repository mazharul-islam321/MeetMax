import avatar from "../../assets/avatar.jpeg";

const Profile = () => {
	return (
		<div className="hidden md:flex md:items-center ">
			<p className="roboto-medium text-[#4E5D78] text-base mr-5">
				Saleh Ahmed
			</p>

			<img
				src={avatar}
				alt="profile img"
				className="w-[42px] h-[42px] rounded-[10px] object-cover"
			/>
		</div>
	);
};

export default Profile;
