import { render, screen } from '@testing-library/react';
import Dashboard from '../components/Dashboard';
import axios from 'axios';

describe('Dashboard Component', () => {
	test('renders heading correctly', () => {
		render(<Dashboard />);

		const text = screen.getByText('Dashboard');
		expect(text).toBeInTheDocument();
	});

	test('renders list items correctly', async () => {
		const mockAxiosResponse = {
			data: [
				{
					id: 'testing id',
					username: 'testing user',
					email: 'testing email',
				},
			],
		};

		jest.spyOn(axios, 'get').mockResolvedValue(mockAxiosResponse);

		render(<Dashboard />);

		const listItems = await screen.findAllByRole('listitem');
		expect(listItems).not.toHaveLength(0);

		const testUserElement = await screen.findByText('testing user');
		expect(testUserElement).toBeInTheDocument();
	});
});
