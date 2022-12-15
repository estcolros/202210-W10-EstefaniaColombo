import { render, screen } from '@testing-library/react';
import { gentlemanInfo } from '../../mocks/gentleman.moks';
import { Info } from './info';

describe('Given Info component', () => {
    test('renders pointing word', () => {
        const selectedAllGentlemen = jest.fn();
        const infoSelected = gentlemanInfo;
        render(
            <Info
                gentlemanInfo={infoSelected}
                setAllGentlemen={selectedAllGentlemen}
            />
        );
        const element = screen.getByText(/gentlemen pointing at you/i);
        expect(element).toBeInTheDocument();
    });
});
