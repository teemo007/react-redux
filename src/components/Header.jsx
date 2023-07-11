import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { increaseCount, getCount } from '../features/posts/postsSlice';

const Header = () => {
    const dispatch = useDispatch();
    const count = useSelector(getCount)
	return (
		<header className="flex items-center justify-between bg-gray-500 p-4">
			<h1 className="text-4xl">Redux Blog </h1>
			<nav>
				<ul className="flex flex-row space-x-2 mx-2 p-2 text-2xl ">
					<li>
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive ? 'underline' : ''
							}
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="post" className={({ isActive }) =>
								isActive ? 'underline' : ''
							}>Post</NavLink>
					</li>
					<li>
						<NavLink to="user" className={({ isActive }) =>
								isActive ? 'underline' : ''
							}>User</NavLink>
					</li>
                    <button onClick={()=> dispatch(increaseCount())}>{count}</button>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
