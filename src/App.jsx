import AddPostForm from './features/posts/AddPostForm';
import PostsList from './features/posts/PostsList'

function App() {
	return (
		<main className="w-full h-fit text-3xl text-green-600 flex flex-col items-center justify-center bg-gray-600">
			<AddPostForm />
			<PostsList />
		</main>
	);
}

export default App;
