import three_dot from "../../../assets/three-dot.svg";
import EventCard from "./EventCard";

import graduation from "../../../assets/graduation.svg";
import photography from "../../../assets/posticon/photography.svg";

const RecentEvent = () => {
	return (
		<div className="w-full md:w-[288px] h-[348px] rounded-2xl bg-white pt-[10px] mb-[30px]">
			<div className="flex items-center justify-between px-[18px] mb-[10px]">
				<h2 className="roboto-bold text-[#4E5D78] text-base ">
					Recent Event
				</h2>

				<img src={three_dot} alt="three dot" />
			</div>

			<hr />

			<EventCard
				title="Graduation Ceremony"
				subtitle="The graduation ceremony is also sometimes called..."
				buttonImg={graduation}
				buttonColor="#38CB89"
				seen="8"
			/>
			<EventCard
				title="Photography Ideas"
				subtitle="Reflections. Reflections work because they can create..."
				buttonImg={photography}
				buttonColor="#FF5630"
				seen="11"
			/>
		</div>
	);
};

export default RecentEvent;
