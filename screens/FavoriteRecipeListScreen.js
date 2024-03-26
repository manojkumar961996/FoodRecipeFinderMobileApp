import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FavoritesContext } from './FavouritesContext';
import { useRoute } from '@react-navigation/native';

const FavoriteListScreen = () => {
    const { params } = useRoute();
    // const [favorites, setFavorites] = useState([]);
    // useEffect(() => {
    //     setFavorites(params.favorites)
    // })
    // console.log("Params - ", params);
    const { favorites } = useContext(FavoritesContext);
    console.log("favorites --> ", favorites)
    // Render item for FlatList
    const renderFavoriteItem = ({ item }) => (
        <TouchableOpacity style={styles.favoriteItem} onPress={() => handleRecipePress(item)}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.title}>{item.label}</Text>
                <Text style={styles.source}>Source: {item.source}</Text>
            </View>
        </TouchableOpacity>
    );

    // Render separator between list items
    const renderSeparator = () => <View style={styles.separator} />;

    return (
        <View style={styles.container}>
            <FlatList
                data={favorites}
                renderItem={renderFavoriteItem}
                keyExtractor={(item) => item.uri}
                ItemSeparatorComponent={renderSeparator}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    favoriteItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    image: {
        width: 80,
        height: 80,
        marginRight: 10,
        borderRadius: 5,
    },
    info: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    source: {
        fontSize: 14,
        color: 'gray',
    },
    separator: {
        height: 1,
        backgroundColor: 'lightgray',
    },
});

export default FavoriteListScreen;
