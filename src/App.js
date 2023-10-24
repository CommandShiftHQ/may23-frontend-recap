import './App.css';
import Dashboard from './components/Dashboard';
import SignUp from './components/SignUp';

const App = () => {
	return (
		<div className="App">
			<div className="container">
				<h1>Frontend Recap</h1>
				{/* <Dashboard /> */}
				<SignUp />
			</div>
		</div>
	);
};

export default App;
