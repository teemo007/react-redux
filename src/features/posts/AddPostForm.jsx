import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // read data from the store
import { selectAllUsers } from '../users/userSlice';
import { addNewPost } from './postsSlice';


const AddPostForm = () => {
	const dispatch = useDispatch();

	const users = useSelector(selectAllUsers);
	/*  const posts = useSelector(selectAllPosts); */

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')

    const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle';

    const onSavePostClicked = () => {
        if (canSave) {
            try {
                setAddRequestStatus('pending')
                dispatch(addNewPost({ title, body: content, userId })).unwrap() //.unwrap() function to the returned Promise, which will return a new Promise that either has the actual action.payload value from a fulfilled action, or throws an error if it's the rejected action. This lets us handle success and failure in the component using normal try/catch logic. 

                setTitle('')
                setContent('')
                setUserId('')
            } catch (err) {
                console.error('Failed to save the post', err)
            } finally {
                setAddRequestStatus('idle')
            }
        }

    }


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
