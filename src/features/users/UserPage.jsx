import { useSelector } from 'react-redux';
import { selectPostsByUser } from '../posts/postsSlice';
import { Link, useParams } from 'react-router-dom';
import { selectUserById } from './userSlice';

const UserPage = () => {
	const { userId } = useParams();
	const user = useSelector((state) => selectUserById(state, Number(userId))); // recived a string from URL, need to convert to number
	const postsForUser = useSelector(state => selectPostsByUser(state, Number(userId))); // useSelector will run every time an action is dispatched, memoized selector

	const postTitles = postsForUser.map((post) => (
		<li key={post.id} className="p-2 border-2 my-2 rounded-md">
			<Link to={`/post/${post.id}`}>{post.title}</Link>
		</li>
	));
	return (
		<section>
			<div className="text-4xl text-center justify-center font-bold">
				{user?.name}
			</div>

			{<ol className="list-decimal">{postTitles}</ol>}
		</section>
	);
};

export default UserPage;
