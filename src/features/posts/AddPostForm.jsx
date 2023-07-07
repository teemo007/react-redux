import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // read data from the store
import { selectAllUsers } from '../users/userSlice';
import { postAdded } from './postsSlice';


const AddPostForm = () => {
	const dispatch = useDispatch();

	const users = useSelector(selectAllUsers);
	/*  const posts = useSelector(selectAllPosts); */

	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [userId, setUserId] = useState('');

	/* const renderedPosts =  */

	const onSavePostClicked = () => {
		if (title && content) {
			dispatch(postAdded(title, content, userId));
		}
		setTitle('');
		setContent('');
		setUserId('');
	};

	const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

	const usersOptions = users.map((user) => (
		<option key={user.id} value={user.id}>
			{user.name}
		</option>
	));

	return (
		<form className='flex flex-col my-4 items-center justify-center'>
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
					onChange={(e) => setUserId(e.target.value)}
					className="rounded-md border-4"
				>
					<option value={''}></option>
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
				className="border-4 rounded-md content-center justify-center"
				onClick={onSavePostClicked}
				disabled={!canSave}
			>
				save
			</button>
		</form>
	);
};

export default AddPostForm;
