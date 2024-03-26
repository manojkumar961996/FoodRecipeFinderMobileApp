import React, { useContext } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { FavoritesContext } from './FavouritesContext';

const RecipeDetailsScreen = ({ navigation, route }) => {
    const { recipe } = route.params.recipe;
    const { addToFavorites, favorites } = useContext(FavoritesContext);

    const handleAddToFavorites = () => {
        addToFavorites(recipe); // Call the context function
        alert('Recipe added to favorites!');
    };

    const handleNavigateToFavorites = () => {
        console.log("inside handleNavigateToFavorites with favorites --> ", favorites)
        navigation.navigate('FavoriteRecipesListScreen'); // Navigate to favorites screen (if implemented)
        // navigation.navigate('FavoriteRecipesListScreen', { favorites: [...favorites] }); // Navigate to favorites screen (if implemented)
    };

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
            <Image source={{ uri: recipe.image }} style={{ width: '100%', height: 200 }} />
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleAddToFavorites} style={styles.addToFavoritesButton}>
                    <Text style={styles.addToFavoritesButtonText}>Add to Favourites</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNavigateToFavorites} style={styles.addToFavoritesButton}>
                    <Text style={styles.addToFavoritesButtonText}>Favorite Recipes</Text>
                </TouchableOpacity>
            </View>
            <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{recipe.label}</Text>
                {recipe.cuisineType && <Text style={{ fontSize: 18, marginTop: 10 }}>Cuisine Type: {recipe.cuisineType.join(', ')}</Text>}
                {recipe.mealType && <Text style={{ fontSize: 18 }}>Meal Type: {recipe.mealType.join(', ')}</Text>}
                <Text style={{ fontSize: 18 }}>Calories: {recipe.calories ? recipe.calories.toFixed(2) : 'N/A'}</Text>
                {recipe.dishType && <Text style={{ fontSize: 18 }}>Dish Type: {recipe.dishType.join(', ')}</Text>}
                <Text style={{ fontSize: 18 }}>Source: {recipe.source}</Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20 }}>Ingredients:</Text>
                {recipe.ingredientLines?.map((ingredient, index) => (
                    <Text key={index} style={{ fontSize: 16 }}>{ingredient}</Text>
                ))}
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20 }}>Diet Labels:</Text>
                {recipe.dietLabels?.map((label, index) => (
                    <Text key={index} style={{ fontSize: 16 }}>{label}</Text>
                ))}
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20 }}>Health Labels:</Text>
                {recipe.healthLabels?.map((label, index) => (
                    <Text key={index} style={{ fontSize: 16 }}>{label}</Text>
                ))}
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20 }}>Total Time:</Text>
                <Text style={{ fontSize: 16 }}>{recipe.totalTime} minutes</Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20 }}>Yield:</Text>
                <Text style={{ fontSize: 16 }}>{recipe.yield}</Text>
            </View>
        </ScrollView>
    );
};

export default RecipeDetailsScreen;

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
    },
    addToFavoritesButton: {
        alignSelf: 'center',
        marginVertical: 10,
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 20,
    },
    addToFavoritesButtonText: {
        color: '#fff',
        fontSize: 18,
    },
});







