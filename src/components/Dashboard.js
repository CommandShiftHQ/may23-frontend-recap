import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const Dashboard = () => {
	const [users, setUsers] = useState([]);
	const [randomText, setRandomText] = useState('Random text');
	const [counter, setCounter] = useState(0);

	const changeTextHandler = () => {
		setCounter((prev) => prev + 1);
	};

	useEffect(() => {
		const getData = async () => {
			const response = await axios.get('http://localhost:8080/users');
			setUsers(response.data);
			console.log('fetched data');
		};

		getData();
	}, []);

	return (
		<div>
			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.username}</li>
				))}
			</ul>
			<p>{randomText}</p>
			<p>{counter}</p>
			<button onClick={changeTextHandler}>Change text</button>
		</div>
	);
};

export default Dashboard;
