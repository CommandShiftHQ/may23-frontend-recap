import React, { useState } from 'react';
import '../styles/SignUp.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
	const navigate = useNavigate();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const submitHandler = async (event) => {
		event.preventDefault();

		const userDetails = {
			username: username,
			password: password,
		};

		const response = await axios.post(
			'http://localhost:8080/login',
			userDetails
		);

		console.log(response);

		if (response.status === 200) {
			alert(response.data.message);
			setIsLoggedIn(true);
			localStorage.setItem('isLoggedIn', '1');

			setUsername('');
			setPassword('');
		}

		// navigate them to dashboard
		navigate('/dashboard');
	};

	const usernameChangeHandler = (event) => {
		setUsername(event.target.value);
	};

	const passwordChangeHandler = (event) => {
		setPassword(event.target.value);
	};

	return (
		<div>
			<h1>Log In</h1>
			<div className="main-container">
				<form>
					<label htmlFor="username">Username</label>
					<input
						className="input"
						type="text"
						id="username"
						value={username}
						onChange={usernameChangeHandler}
					></input>

					<label htmlFor="password">Password</label>
					<input
						className="input"
						type="password"
						id="password"
						value={password}
						onChange={passwordChangeHandler}
					></input>

					<button onClick={submitHandler} type="submit" className="button">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
