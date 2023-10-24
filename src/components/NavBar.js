import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = ({ isLoggedIn, setIsLoggedIn }) => {
	const navigate = useNavigate();
	const logoutHandler = () => {
		localStorage.removeItem('isLoggedIn');
		setIsLoggedIn(false);

		navigate('/');
	};

	const constructLoggedInView = () => {
		return (
			<>
				<NavLink to="/dashboard">Dashboard</NavLink>
				<button onClick={logoutHandler}>Logout</button>
			</>
		);
	};

	const constructLoggedOutView = () => {
		return (
			<>
				<NavLink to="/signup">Sign Up</NavLink>
				<NavLink to="/login">Login</NavLink>
			</>
		);
	};

	return (
		<nav>
			<ul>
				{!isLoggedIn && constructLoggedOutView()}
				{isLoggedIn && constructLoggedInView()}
			</ul>
		</nav>
	);
};

export default NavBar;
