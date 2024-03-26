import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import RecipeListScreen from './screens/RecipeListViewScreen';
import RecipeDetailsScreen from './screens/RecipeDetailsScreen';
import { FavoritesProvider } from './screens/FavouritesContext';
import FavoriteListScreen from './screens/FavoriteRecipeListScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home Screen" component={HomeScreen} />
          <Stack.Screen name="RecipeList">
            {(screenProps) => (
              <RecipeListScreen {...screenProps} />
            )}
          </Stack.Screen>
          <Stack.Screen name="RecipeDetails">
            {(screenProps) => (
              <RecipeDetailsScreen {...screenProps} />
            )}
          </Stack.Screen>
          <Stack.Screen name="FavoriteRecipesListScreen">
            {(screenProps) => (
              <FavoriteListScreen {...screenProps} />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesProvider>
  );
};

export default App;
