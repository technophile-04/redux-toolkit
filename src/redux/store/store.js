import { configureStore } from '@reduxjs/toolkit';
import postsSlice from '../slices/postsSlice';
// import { counterSlices } from '../slices/counterSlices';
// import counterReducer from '../slices/counterSlices';

const store = configureStore({
	reducer: {
		posts: postsSlice,
	},
});

export default store;
