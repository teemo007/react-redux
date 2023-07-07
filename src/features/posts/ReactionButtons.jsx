import { useDispatch } from 'react-redux';
import { reactionAdded } from './postsSlice';

const reactionEmoji = {
	heart: '❤️',
	thumbsup: '👍',
	wow: '😮',
	rocket: '🚀',
	coffee: '☕',
};

const ReactionButtons = ({ post }) => {
	const dispatch = useDispatch();
	const reactionButtons = Object.entries(reactionEmoji).map(
		([name, emoji]) => {
			return (
				<button
					key={name}
					type="button"
					className=""
					onClick={() =>
						dispatch(
							reactionAdded({ postId: post.id, reaction: name })
						)
					}
				>
					{emoji}
					{post.reactions[name]}
				</button>
			);
		}
	);
	return <div>{reactionButtons}</div>;
};

export default ReactionButtons;
