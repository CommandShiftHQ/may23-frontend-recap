import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const Dashboard = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const response = await axios.get('http://localhost:8080/users');
			setUsers(response.data);
		};

		getData();
	}, []);

	return (
		<div>
			<h1>Dashboard</h1>
			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.username}</li>
				))}
			</ul>
		</div>
	);
};

export default Dashboard;
