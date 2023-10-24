import { useEffect, useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';

const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const localAuthInfo = localStorage.getItem('isLoggedIn');
		console.log(localAuthInfo);
		if (localAuthInfo === '1') {
			setIsLoggedIn(true);
		}
	}, []);

	return (
		<div className="App">
			<div className="container">
				<NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
				<h1>Frontend Recap</h1>

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="dashboard" element={<Dashboard />} />
					<Route path="signup" element={<SignUp />} />
					<Route
						path="login"
						element={<Login setIsLoggedIn={setIsLoggedIn} />}
					/>
				</Routes>
			</div>
		</div>
	);
};

export default App;
