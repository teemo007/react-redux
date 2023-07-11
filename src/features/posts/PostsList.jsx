import { useSelector} from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import {
	selectAllPosts,
	getPostsStatus,
	getPostsError,
	
} from './postsSlice';
import { useEffect } from 'react';
import PostsExcerpt from './PostsExcerpt';

const PostsList = () => {
	

	const posts = useSelector(selectAllPosts);
	const postStatus = useSelector(getPostsStatus);
	const error = useSelector(getPostsError);

	let content;
	if (postStatus === 'loading') {
		content = <p>"Loading..."</p>;
	} else if (postStatus === 'succeeded') {
		const orderedPosts = posts
			.slice()
			.sort((a, b) => b.date.localeCompare(a.date));
		content = orderedPosts.map((post) => (
			<PostsExcerpt key={nanoid()} post={post} />
		));
	} else if (postStatus === 'failed') {
		content = <p>{error}</p>;
	}

	return <section className="p-2 h-fit">{content}</section>;
};
export default PostsList;
