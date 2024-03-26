import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import RecipeListScreen from './RecipeListScreen';

describe('RecipeListScreen', () => {
    test('renders correctly', () => {
        const { getByText, getByPlaceholderText } = render(<RecipeListScreen />);

        expect(getByText('Favorite Recipes')).toBeTruthy();
        expect(getByText('Logout')).toBeTruthy();
        expect(getByPlaceholderText('Enter Chicken or anything')).toBeTruthy();
        expect(getByText('Search')).toBeTruthy();
        expect(getByText('Reset')).toBeTruthy();
    });

    test('handles search correctly', async () => {
        const { getByText, getByPlaceholderText, queryByText } = render(<RecipeListScreen />);

        fireEvent.changeText(getByPlaceholderText('Enter Chicken or anything'), 'Pasta');
        fireEvent.press(getByText('Search'));

        // You can wait for the response and assert the changes in the rendered component
        // For simplicity, let's just assert that a loading indicator is shown
        expect(queryByText('Loading...')).toBeTruthy();
    });

    test('handles reset correctly', () => {
        const { getByText, getByPlaceholderText } = render(<RecipeListScreen />);

        fireEvent.changeText(getByPlaceholderText('Enter Chicken or anything'), 'Pasta');
        fireEvent.press(getByText('Reset'));

        expect(getByPlaceholderText('Enter Chicken or anything').props.value).toBe('');
    });

    // Add more test cases to cover other functionalities as needed
});
