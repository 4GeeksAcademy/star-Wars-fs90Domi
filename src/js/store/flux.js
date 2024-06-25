const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            personajes: [],
            personaje: {},
            planets: [],
            planeta: {},
            vehicles: [],
            nave: {},
            favorites: JSON.parse(localStorage.getItem("favorites")) || []
        },
        actions: {
            getCharacters: async () => {
                try {
                    const response = await fetch("https://swapi.dev/api/people");
                    const data = await response.json();
                    setStore({ personajes: data.results });
                } catch (error) {
                    console.log(error);
                }
            },

            getSingleCharacter: async (id) => {
                try {
                    const response = await fetch("https://swapi.dev/api/people/" + id);
                    const data = await response.json();
                    setStore({ personaje: data });
                } catch (error) {
                    console.log(error);
                }
            },

            getPlanets: async () => {
                try {
                    const response = await fetch("https://swapi.dev/api/planets/");
                    const data = await response.json();
                    setStore({ planets: data.results });
                } catch (error) {
                    console.log(error);
                }
            },

            getSinglePlanet: async (id) => {
                try {
                    const response = await fetch("https://swapi.dev/api/planets/" + id);
                    const data = await response.json();
                    setStore({ planeta: data });
                } catch (error) {
                    console.log(error);
                }
            },

            getVehicles: async () => {
                try {
                    const response = await fetch("https://swapi.dev/api/vehicles/");
                    const data = await response.json();
                    setStore({ vehicles: data.results });
                } catch (error) {
                    console.log(error);
                }
            },

            getSingleVehicle: async (id) => {
                try {
                    const response = await fetch("https://swapi.dev/api/vehicles/" + id);
                    const data = await response.json();
                    setStore({ nave: data });
                } catch (error) {
                    console.log(error);
                }
            },

            addToFavorites: (item) => {
                const store = getStore();
                // esto me muestra si el item ya está en favoritos
                const exists = store.favorites.find(fav => fav.url === item.url);
                if (!exists) {
                    setStore({ favorites: [...store.favorites, item] });
                    // esto me guardar en localStorage para que no se me repitan las cosas 
                    localStorage.setItem("favorites", JSON.stringify([...store.favorites, item]));
                }
            },

            removeFromFavorites: (item) => {
                const store = getStore();
                const updatedFavorites = store.favorites.filter(fav => fav.url !== item.url);
                setStore({ favorites: updatedFavorites });
                // aca me actualiza el localStorage
                localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
            }
        },
		addToFavoritesP: (planet) => {
			const store = getStore();
			const exists = store.favorites.find(fav => fav.url === planet.url);
			if (!exists) {
				setStore({ favorites: [...store.favorites, planet] });
				localStorage.setItem("favorites", JSON.stringify([...store.favorites, planet]));
			}
		},

		removeFromFavoritesP: (planet) => {
			const store = getStore();
			const updatedFavorites = store.favorites.filter(fav => fav.url !== planet.url);
			setStore({ favorites: updatedFavorites });
			localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
		},

		// addToFavoritesS: (starship) => {
		// 	const store = getStore();
		// 	const exists = store.favorites.find(fav => fav.url === starship.url);
		// 	if (!exists) {
		// 		setStore({ favorites: [...store.favorites, starship] });
		// 		localStorage.setItem("favorites", JSON.stringify([...store.favorites, starship]));
		// 	}
		// },

		// removeFromFavoritesS: (starship) => {
		// 	const store = getStore();
		// 	const updatedFavorites = store.favorites.filter(fav => fav.url !== starship.url);
		// 	setStore({ favorites: updatedFavorites });
		// 	localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
		// },

	

    };
};

export default getState;

