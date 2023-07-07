import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectAllPosts } from './postsSlice';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

const postsList = () => {
	const posts = useSelector(selectAllPosts);

	const orderPosts = posts
		.slice()
		.sort((a, b) => b.date.localeCompare(a.date));

	return orderPosts.map((post) => (
		<article
			key={post.id}
			className="border-4 rounded-md border-solid p-1 my-1 border-yellow-200 min-w-[200px] max-w-[300px]"
		>
			<p className="text-4xl font-extrabold  p-2 my-1">{post.title}</p>
			<p className="my-4 text-lg text-gray-200 p-2">
				{post.content.substring(0, 100)}
			</p>
			<p className="my-4 text-lg text-gray-200 p-2">
				<PostAuthor userId={post.userId} />
				<TimeAgo timestamp={post.date} />
			</p>

			<ReactionButtons post={post} />
		</article>
	));
};

export default postsList;
