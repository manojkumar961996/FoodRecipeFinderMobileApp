import React, { createContext, useState, useEffect } from 'react';

const FavoritesContext = createContext({
    favorites: [],
    addToFavorites: (recipe) => { },
});

const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addToFavorites = (recipe) => {
        console.log("FavouritesContext , inside addToFavorites , recipe --> ", recipe)
        setFavorites([...favorites, recipe]);
        console.log("FavouritesContext favorites list after updating setFavorites --> ", favorites)
    };

    useEffect(() => {
        console.log("inside useEffect --> FavouritesContext favorites list after updating setFavorites --> ", favorites);
    }, [favorites]);

    return (
        <FavoritesContext.Provider value={{ favorites, addToFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export { FavoritesContext, FavoritesProvider };
