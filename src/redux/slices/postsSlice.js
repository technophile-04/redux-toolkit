import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk(
	'post/list',
	async (payload, { rejectedWithValue, getState, dispatch }) => {
		try {
			const { data } = await axios.get(
				'https://jsonplaceholder.typicode.com/posts'
			);
			return data;
		} catch (error) {
			return error?.response;
		}
	}
);

const postSlice = createSlice({
	name: 'post',
	initialState: {
		loading: false,
		postList: [],
		error: null,
	},
	extraReducers: (builder) => {
		builder.addCase(fetchPosts.pending, (state, action) => {
			state.loading = true;
		});

		builder.addCase(fetchPosts.fulfilled, (state, action) => {
			state.postList = action.payload;
			state.loading = false;
		});

		builder.addCase(fetchPosts.rejected, (state, action) => {
			state.error = action.payload;
			state.loading = false;
		});
	},
});

export default postSlice.reducer;
