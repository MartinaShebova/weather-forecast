import { screen } from '@testing-library/react';
import FiveDaysWeather from './FiveDaysWeather';
import renderWithRouter from '../../renderWithRouter';

describe('5 days weather forecast tests', () => {
    test('renders three NavLinks', () => {
        //Arrange
        renderWithRouter(<FiveDaysWeather />, []);

        //Assert
        const listOfNavElements = screen.getAllByRole('link');
        expect(listOfNavElements).toHaveLength(3);
    });
});