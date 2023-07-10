import { Outlet } from 'react-router-dom';

const Layout = () => {
	return (
		<main className="w-full h-fit text-3xl text-green-600 flex flex-col items-center justify-center bg-gray-600">
			<Outlet /> {/* represents all of the children */}
		</main>
	);
};

export default Layout;
