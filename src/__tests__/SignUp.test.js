import { fireEvent, render, screen } from '@testing-library/react';
import SignUp from '../components/SignUp';

describe('SignUp Component', () => {
	test('renders input fields correctly', () => {
		render(<SignUp />);

		const inputElements = screen.getAllByRole('textbox');
		expect(inputElements).toHaveLength(2);

		const passwordElement = screen.getByLabelText(/password/i);
		expect(passwordElement).toBeInTheDocument();
	});

	test('renders a submit button', () => {
		render(<SignUp />);

		const button = screen.getByRole('button');
		expect(button).toBeInTheDocument();
	});

	test('renders text onSubmit', () => {
		render(<SignUp />);

		const button = screen.getByRole('button');
		fireEvent.click(button);

		const text = screen.getByText('Succeeded');
		expect(text).toBeInTheDocument();
	});
});
