import { render, screen } from '@testing-library/react';
import { ButtonDelete } from './button.delete';
import { ButtonSelect } from './button.select';
import { ButtonSelectAll } from './button.select.all';

describe('Given Button.Delete component', () => {
    test('renders the button delete', () => {
        render(
            <ButtonDelete
                getleman={function (): void {
                    throw new Error('Function not implemented.');
                }}
            />
        );
        const title = screen.getByRole(/delete/i);
        expect(title).toBeInTheDocument();
    });
});

describe('Given Button.Select component', () => {
    test('renders the button delete', () => {
        render(
            <ButtonSelect
                getleman={function (): void {
                    throw new Error('Function not implemented.');
                }}
                selectGentleman={false}
            />
        );
        const title = screen.getByRole(/select/i);
        expect(title).toBeInTheDocument();
    });
});
describe('Given Button.Select.All component', () => {
    test('renders the button delete', () => {
        render(
            <ButtonSelectAll
                getleman={function (): void {
                    throw new Error('Function not implemented.');
                }}
            />
        );
        const title = screen.getByRole(/all/i);
        expect(title).toBeInTheDocument();
    });
});
