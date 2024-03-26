import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import RecipeDetailsScreen from './RecipeDetailsScreen';
import { FavoritesContext } from './FavouritesContext';

// Mocked navigation object
const navigation = {
    navigate: jest.fn(),
};

// Mocked recipe object
const recipe = {
    label: 'Test Recipe',
    image: 'https://example.com/test-image.jpg',
    cuisineType: ['Test Cuisine'],
    mealType: ['Test Meal'],
    calories: 200,
    dishType: ['Test Dish'],
    source: 'Test Source',
    ingredientLines: ['Ingredient 1', 'Ingredient 2'],
    dietLabels: ['Test Diet Label'],
    healthLabels: ['Test Health Label'],
    totalTime: 30,
    yield: 4,
};

// Mocked Favorites Context Provider
const FavoritesProvider = ({ children }) => {
    const addToFavorites = jest.fn();
    const favorites = [];
    return (
        <FavoritesContext.Provider value={{ favorites, addToFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
};

describe('RecipeDetailsScreen', () => {
    test('renders correctly', () => {
        const { getByText } = render(
            <FavoritesProvider>
                <RecipeDetailsScreen navigation={navigation} route={{ params: { recipe } }} />
            </FavoritesProvider>
        );

        expect(getByText('Add to Favourites')).toBeTruthy();
        expect(getByText('Favorite Recipes')).toBeTruthy();
        expect(getByText('Test Recipe')).toBeTruthy();
        expect(getByText('Cuisine Type: Test Cuisine')).toBeTruthy();
        expect(getByText('Meal Type: Test Meal')).toBeTruthy();
        // Add more assertions as needed
    });

    test('handles adding to favorites', () => {
        const { getByText } = render(
            <FavoritesProvider>
                <RecipeDetailsScreen navigation={navigation} route={{ params: { recipe } }} />
            </FavoritesProvider>
        );

        fireEvent.press(getByText('Add to Favourites'));
        expect(navigation.navigate).toHaveBeenCalledWith('FavoriteRecipesListScreen');
    });

    // Add more test cases to cover other functionalities as needed
});
