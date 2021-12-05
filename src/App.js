import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
	decrement,
	increaseAmount,
	increment,
	reset,
} from './redux/slices/counterSlices';

function App() {
	const counter = useSelector((state) => state?.counter);
	const dispatch = useDispatch();

	const increaseCounter = (e) => {
		dispatch(increment());
	};

	return (
		<div className="App">
			<h1>Redux toolkit counter</h1>
			<h2>Counter : {counter.value}</h2>
			<button onClick={increaseCounter}>+</button>
			<button onClick={() => dispatch(decrement())}>-</button>
			<button onClick={() => dispatch(increaseAmount(20))}>
				Increase Amount
			</button>
			<button onClick={() => dispatch(reset())}>Reset Amount</button>
		</div>
	);
}

export default App;
