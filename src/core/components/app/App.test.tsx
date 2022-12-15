import { render, screen } from '@testing-library/react';
import App from './App';

describe('Given App component', () => {
    test('renders tittle', () => {
        render(<App />);
        const element = screen.getByText(/The pointing gentlemen/i);
        expect(element).toBeInTheDocument();
    });
});
