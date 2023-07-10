import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';
import { useSelector } from 'react-redux';
import { selectPostById } from './postsSlice';
import { useParams } from 'react-router-dom';

const SinglePostPage = () => {

    const {postId} = useParams()
	const post = useSelector((state) => selectPostById(state, Number(postId)));

	if (!post) {
		return (
			<>
				<h2>Post not found!</h2>
			</>
		);
	}
	return (
		<div>
			<article className="border-4 rounded-md border-solid p-1 my-1 border-yellow-200 min-w-[200px] max-w-[300px]">
				<p className="text-4xl font-extrabold  p-2 my-1">
					{post.title}
				</p>
				<p className="my-4 text-lg text-gray-200 p-2">
					{post.body}
				</p>
				<p className="my-4 text-lg text-gray-200 p-2">
					<PostAuthor userId={post.userId} />
					<TimeAgo timestamp={post.date} />
				</p>

				<ReactionButtons post={post} />
			</article>
		</div>
	);
};

export default SinglePostPage;
