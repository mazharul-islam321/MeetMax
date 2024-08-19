/* eslint-disable react/prop-types */
import search from "../../assets/search.svg";

const FeedHeaderSearch = ({ placeholderText, searchHeaderWidth }) => {
	return (
		<div className="relative">
			<input
				id="search"
				type="search"
				name="search"
				placeholder={placeholderText}
				className={`relative h-[32px] md:h-[42px] w-[246px] ${
					searchHeaderWidth ? "md:w-[542px]" : "md:w-[270px]"
				} rounded-md md:rounded-[10px] border border-[#4E5D78]/40 pr-[10px] md:pr-4 pl-[34px] md:pl-[46px] text-xs md:text-sm text-[#4E5D78] outline-none  focus:border-[#377DFF] focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed placeholder-[#4E5D78]/80`}
			/>

			<img
				className="absolute left-[10px] md:left-5 top-0 bottom-0 my-auto cursor-pointer"
				src={search}
				alt="search icon"
			/>
		</div>
	);
};

export default FeedHeaderSearch;
