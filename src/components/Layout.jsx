import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
	return (
		<>
			<Header />
			<main className="w-full  p-4 text-3xl text-green-600 flex flex-col items-center justify-center bg-gray-600">
				<Outlet /> {/* represents all of the children */}
			</main>
		</>
	);
};

export default Layout;
