import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPostById, updatePost, deletePost } from './postsSlice';
import { useParams, useNavigate } from 'react-router-dom';

import { selectAllUsers } from '../users/userSlice';

const EditPostForm = () => {
	const { postId } = useParams();
	const navigate = useNavigate();
	const post = useSelector((state) => selectPostById(state, Number(postId)));
	const users = useSelector(selectAllUsers);

	const [title, setTitle] = useState(post?.title);
	const [content, setContent] = useState(post?.body);
	const [userId, setUserId] = useState(post?.userId);
	const [requestStatus, setRequestStatus] = useState('idle');

	const dispatch = useDispatch();

	if (!post) {
		return (
			<section>
				<h2>Post not found!</h2>
			</section>
		);
	}
	const canSave =
		[title, content, userId].every(Boolean) && requestStatus === 'idle';

	const onSavePostClicked = () => {
		if (canSave) {
			try {
				setRequestStatus('pending');
				dispatch(
					updatePost({
						id: post.id,
						title,
						body: content,
						userId,
						reactions: post.reactions,
					})
				).unwrap();

				setTitle('');
				setContent('');
				setUserId('');
				navigate(`/post/${postId}`);
			} catch (err) {
				console.error('Failed to save the post', err);
			} finally {
				setRequestStatus('idle');
			}
		}
	};

	const onDeletePostClicked = () => {
		try {
			setRequestStatus('pending');
			dispatch(deletePost({ id: post.id })).unwrap();

			setTitle('');
			setContent('');
			setUserId('');
			navigate('/');
		} catch (err) {
			console.error('Failed to delete the post', err);
		} finally {
			setRequestStatus('idle');
		}
	};

	const usersOptions = users.map((user) => (
		<option key={user.id} value={user.id}>
			{user.name}
		</option>
	));

	return (
		<form className="flex flex-col my-4 items-center justify-center">
			<label htmlFor="addTitle" className="w-[500px]">
				Add Title:
				<input
					id="addTitle"
					className="border-4 rounded-md focus:outline-none my-1"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</label>
			<label htmlFor="postAuthor" className="w-[500px]">
				Author:
				<select
					id="postAuthor"
					value={userId}
					onChange={(e) => setUserId(Number(e.target.value))}
					className="rounded-md border-4"
					//defaultValue={userId}
				>
					<option value=""></option>
					{usersOptions}
				</select>
			</label>
			<label htmlFor="addContent" className="w-[500px]">
				Add Content:
				<textarea
					id="addContent"
					className="border-4 rounded-md focus:outline-none my-1"
					onChange={(e) => setContent(e.target.value)}
					value={content}
				/>
			</label>
			<button
				type="button"
				className="border-4 rounded-md content-center justify-center "
				onClick={onSavePostClicked}
				disabled={!canSave}
			>
				save
			</button>
			<button
				type="button"
				className="border-4 rounded-md content-center justify-center "
				onClick={onDeletePostClicked}
				//disabled={!canSave}
			>
				delete
			</button>
		</form>
	);
};

export default EditPostForm;
