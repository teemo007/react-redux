import { createSlice, nanoid } from '@reduxjs/toolkit';
import { sub } from 'date-fns';

const initialState = [
	{
		id: '1',
		title: 'test1',
		content: 'hard!',
		date: sub(new Date(), { minutes: 10 }).toISOString(),
		reactions: {
			thumbsup: 0,
			wow: 0,
			heart: 0,
			rocket: 0,
			coffee: 0,
		},
	},
	{
		id: '2',
		title: 'Slices...',
		content: 'Pizza',
		date: sub(new Date(), { minutes: 10 }).toISOString(),
		reactions: {
			thumbsup: 0,
			wow: 0,
			heart: 0,
			rocket: 0,
			coffee: 0,
		},
	},
];

const postsSclice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		postAdded: {
			reducer(state, action) {
				state.push(action.payload);
			},
			prepare(title, content, userId) {
				return {
					payload: {
						id: nanoid(),
						title,
						content,
						date: new Date().toISOString(),
						userId,
						reactions: {
							heart: 0,
							thumbsup: 0,
							wow: 0,
							rocket: 0,
							coffee: 0,
						},
					},
				};
			},
		},
		reactionAdded: {
			reducer(state, action) {
				const { postId, reaction } = action.payload;
				const existingPost = state.find((post) => post.id === postId);
				if (existingPost) {
					existingPost.reactions[reaction]++;
				}
			},
		},
	},
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded, reactionAdded } = postsSclice.actions;

export default postsSclice.reducer;
