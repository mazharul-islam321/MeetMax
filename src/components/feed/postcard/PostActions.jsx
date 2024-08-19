import like from "../../../assets/posticon/like.svg";
import comment from "../../../assets/posticon/comment.svg";
import share from "../../../assets/posticon/share.svg";

const PostActions = () => {
	return (
		<div className="flex items-center justify-between my-[10px]">
			<div className="flex items-center gap-[10px]">
				<img src={like} alt="like" />
				<p className="text-[#377DFF] text-xs roboto-medium">Like</p>
			</div>

			<div className="flex items-center gap-[10px]">
				<img src={comment} alt="comment" />
				<p className="text-[#4E5D78] text-xs roboto-medium">Comment</p>
			</div>

			<div className="flex items-center gap-[10px]">
				<img src={share} alt="share" />
				<p className="text-[#4E5D78] text-xs roboto-medium">Share</p>
			</div>
		</div>
	);
};

export default PostActions;
