import React, { useState } from 'react';
import '../styles/SignUp.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
	const navigate = useNavigate();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [showSucceeded, setShowSucceeded] = useState(false);

	const submitHandler = async (event) => {
		event.preventDefault();
		setShowSucceeded(true);

		// POST /users -- user object

		const user = {
			username: username,
			email: email,
			password: password,
		};
		const response = await axios.post('http://localhost:8080/users', user);

		if (response.status === 200) {
			alert(response.data);
			localStorage.setItem('isLoggedIn', '1');

			setUsername('');
			setPassword('');
			setEmail('');
		}

		navigate('/dashboard');

		// navigate them to dashboard
	};

	const usernameChangeHandler = (event) => {
		setUsername(event.target.value);
	};

	const passwordChangeHandler = (event) => {
		setPassword(event.target.value);
	};

	const emailChangeHandler = (event) => {
		setEmail(event.target.value);
	};

	return (
		<div>
			<h1>Sign Up</h1>
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

					<label htmlFor="email">Email</label>
					<input
						className="input"
						type="email"
						id="email"
						value={email}
						onChange={emailChangeHandler}
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
			{showSucceeded && <p>Succeeded</p>}
		</div>
	);
};

export default SignUp;
