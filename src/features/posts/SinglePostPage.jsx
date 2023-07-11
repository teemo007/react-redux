import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';
import { useSelector } from 'react-redux';
import { selectPostById } from './postsSlice';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SinglePostPage = () => {
	const { postId } = useParams();
    //console.log(postId)
	const post = useSelector((state) => selectPostById(state, Number(postId)));
    //console.log(post)

	if (!post) {
		return (
			<>
				<h2>Post not found!</h2>
			</>
		);
	}
	return (
		<div className='h-screen p-4'>
			<article className="border-4 rounded-md border-solid p-2 my-1 border-yellow-200 min-w-[400px] max-w-[600px]">
				<p className="text-4xl font-extrabold  p-2 my-1">
					{post.title}
				</p>
				<p className="my-4 text-lg text-gray-200 p-2">{post.body}</p>
				<p className="my-4 text-lg text-gray-200 p-2 space-x-2">
                    <Link to={`/post/edit/${post.id}`} className='underline '>Edit Post</Link>
					<PostAuthor userId={post.userId} />
					<TimeAgo timestamp={post.date} />
				</p>

				<ReactionButtons post={post} />
			</article>
		</div>
	);
};

export default SinglePostPage;
