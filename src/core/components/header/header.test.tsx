import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './header';

describe('Given Header component', () => {
    test('renders the title', () => {
        render(<Header />);
        const title = screen.getByText(/pointing/i);
        expect(title).toBeInTheDocument();
    });
});
