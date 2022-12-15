import { render, screen } from '@testing-library/react';
import { gentlemanInfo } from '../../mocks/gentleman.moks';
import { Gentleman } from './gentleman';

describe('Given App component', () => {
    test('renders Julius Churchs word', () => {
        const item = gentlemanInfo[2];
        render(
            <Gentleman
                gentlemanInfo={item}
                setDeleteGentleman={function (element: number): void {
                    throw new Error('Function not implemented.');
                }}
                setSelectGentleman={function (element: number): void {
                    throw new Error('Function not implemented.');
                }}
            />
        );
        const linkElement = screen.getByAltText(/Churchs pointing at you/i);
        expect(linkElement).toBeInTheDocument();
    });
});
