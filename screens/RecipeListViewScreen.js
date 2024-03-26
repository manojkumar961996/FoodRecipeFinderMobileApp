import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity, Image, TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const RecipeListScreen = ({ navigation }) => {
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState('');
    const APP_ID = '7ecb8a6a';
    const API_KEY = '861a4e5a1a9b1aa2299d742856f25746';

    useEffect(() => {
        getRecipes(); // Fetch recipes when component mounts
    }, []);

    const handleRecipePress = (recipe) => {
        // Navigate to RecipeDetailsScreen with the selected recipe
        navigation.navigate('RecipeDetails', { recipe });
    };

    const handleLogout = () => {
        // Perform logout action
        // For example, you can clear user session or reset navigation to the HomeScreen
        navigation.navigate('Home Screen');
    };

    const renderRecipeItem = ({ item }) => (
        <TouchableOpacity style={{ marginBottom: 20 }} onPress={() => handleRecipePress(item)}>
            <View style={{ margin: 10, padding: 10, backgroundColor: 'lavender', borderRadius: 8 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={{ uri: item.recipe.image }} style={{ width: 120, height: 120, marginRight: 10 }} />
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black', marginBottom: 25 }}>{item.recipe.label}</Text>
                        <Text style={{ fontSize: 14, color: 'black' }}>Dish Type: {item.recipe.dishType}</Text>
                        <Text style={{ fontSize: 14, color: 'blue', marginTop: 5 }}>Tap to view details</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );

    const getRecipes = async () => {
        try {
            const response = await fetch(`https://api.edamam.com/search?q="ab"&app_id=${APP_ID}&app_key=${API_KEY}`);
            const data = await response.json();
            // console.log("Recipe data from API data.hits--> ", data.hits);
            setRecipes(data.hits);
        } catch (error) {
            console.error('Error in fetching recipes:', error);
        }
    };

    const handleSearch = () => {
        if (query.trim() !== '') {
            getRecipebySearch();
        }
    };

    const handleReset = () => {
        setQuery('');
        getRecipes();
    };

    const setSearchQuery = (text) => {
        setQuery(text);
    };

    const getRecipebySearch = async () => {
        try {
            const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`);
            const data = await response.json();
            // console.log("Recipe data from API data.hits--> ", data.hits);
            setRecipes(data.hits);
        } catch (error) {
            console.error('Error in fetching recipes:', error);
        }
    };

    const handleNavigateToFavorites = () => {
        navigation.navigate('FavoriteRecipesListScreen'); // Navigate to favorites screen (if implemented)
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
                <Button title="Favorite Recipes" onPress={handleNavigateToFavorites} />
                <Button title="Logout" onPress={handleLogout} />
            </View>
            {/* Text input component for entering search query */}
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10 }}>
                <TextInput
                    style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1, padding: 5 }}
                    onChangeText={setSearchQuery}
                    value={query}
                    placeholder="Enter Chicken or anything"
                />
                <View style={{ flexDirection: 'row' }}>
                    <Button title="Search" onPress={handleSearch} color="green" />
                    <Button title="Reset" onPress={handleReset} color="red" />
                </View>
            </View>
            <FlatList
                data={recipes}
                renderItem={renderRecipeItem}
                keyExtractor={(item, index) => `${item.recipe.uri}-${index}`} // Using a composite key
            />
        </View>
    );
};

export default RecipeListScreen;
