import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: 0,
};

const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state, action) => {
			state.value++;
		},
		decrement: (state, action) => {
			state.value--;
		},
		increaseAmount: (state, action) => {
			state.value += action.payload;
		},
		reset: (state, action) => {
			state.value = 0;
		},
	},
});

export const { increment, decrement, increaseAmount, reset } =
	counterSlice.actions;
export default counterSlice.reducer;

// ----------------------------------------------------------------
// import { createAction, createReducer } from '@reduxjs/toolkit';
/* With builder notion */

/* export const increment = createAction('increment/counter');
export const decrement = createAction('decrement/counter');
export const increaseAmount = createAction('increaseByAmount/counter');
*/

/* export const counterSlices = createReducer(intialState, (builder) => {
	builder.addCase(increment, (state, action) => {
		state.value++;
	});

	builder.addCase(decrement, (state, action) => {
		state.value--;
	});

	builder.addCase(increaseAmount, (state, action) => {
		state.value += action.payload;
	});
});
*/
// ----------------------------------------------------------------
