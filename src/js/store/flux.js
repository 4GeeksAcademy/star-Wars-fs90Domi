const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            personajes: [],
            personaje: {},
            planets: [],
            planeta: {},
            vehicles: [],
            nave: {},
            favorites: [],
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
                if (store.favorites.includes(item)) {
                    let aux = []
                    aux = store.favorites.filter((fav) => fav != item)
                    setStore({ favorites: aux })

                }
                else {
                    setStore({ favorites: [...store.favorites, item] });
                }
            },
        },







    };
};

export default getState;

