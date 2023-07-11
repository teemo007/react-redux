import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const POSTS_URL = 'https://jsonplaceholder.typicode.com/users';

const initialState = [];

export const fetchUsers = createAsyncThunk('posts/fetchUsers', async () => {
	const response = await axios.get(POSTS_URL);
	return [...response.data];
});

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(fetchUsers.fulfilled, (state, action) => {
			return action.payload;
		});
	},
});

export const selectAllUsers = (state) => state.users;

export const selectUserById = (state, userId) => state.users.find(user => user.id === userId);

export default usersSlice.reducer;
