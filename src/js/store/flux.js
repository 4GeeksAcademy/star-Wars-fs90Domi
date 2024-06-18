
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			planets: [],
			starships:[],
		},
		actions: {
			// Use getActions to call a function within a function
			getCharacters: async () => {
				try { 
					const response = await fetch("https://www.swapi.tech/api/people");
					const data = await response.json();
					setStore({ personajes: data.results });
				} catch (error) {
					console.log(error);
				}
			},

			getPlanets: async () => {
				try { 
					const response = await fetch("https://www.swapi.tech/api/planets/");
					const data = await response.json();
					setStore({ planets: data.results });
				} catch (error) {
					console.log(error);
				}
			},

			getStarships: async () => {
				try { 
					const response = await fetch("https://www.swapi.tech/api/starships/");
					const data = await response.json();
					setStore({ starships: data.results });
				} catch (error) {
					console.log(error);
				}
			},
		}
	};
};

export default getState;
