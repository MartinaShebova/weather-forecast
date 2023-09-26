import { screen } from '@testing-library/react';
import Header from './Header';
import renderWithRouter from '../../renderWithRouter';

describe('Header tests', () => {
    test('renders three NavLinks', () => {
        //Arrange
        renderWithRouter(<Header />, []);

        //Assert
        const listOfNavElements = screen.getAllByRole('link');
        expect(listOfNavElements).toHaveLength(2);
    });
});