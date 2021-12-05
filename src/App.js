import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchPosts } from './redux/slices/postsSlice';

function App() {
	const posts = useSelector((state) => state?.posts);
	const dispatch = useDispatch();
	console.log(posts);
	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

	return (
		<div className="App">
			<h1>Posts</h1>
			{posts.loading ? (
				<h1>Loading...</h1>
			) : (
				posts.postList.map((post) => <div key={`${post.id}`}>{post.title}</div>)
			)}
		</div>
	);
}

export default App;
