import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';
import { Link } from 'react-router-dom';

const PostsExcerpt = ({ post }) => {
	return (
		<article className="border-4 rounded-md border-solid p-1 my-1 border-yellow-200 min-w-[400px] max-w-[600px]">
			<p className="text-4xl font-extrabold  p-2 my-1">{post.title}</p>
			<p className="my-4 text-lg text-gray-200 p-2">
				{post.body.substring(0, 75)}...
			</p>
			<p className="my-4 text-lg text-gray-200 p-2 space-x-2 ">
				<Link to={`post/${post.id}`} className='underline underline-offset-2'>View Post</Link>
				<PostAuthor userId={post.userId} />
				<TimeAgo timestamp={post.date} />
			</p>

			<ReactionButtons post={post} />
		</article>
	);
};

export default PostsExcerpt;
