// import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			personaje: {},
			planets: [],
			planeta:{},
			starships:[],
			nave:{},
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
					console.log(data);
					setStore({ personaje: data});
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
					console.log(data);
					setStore({ planeta: data});
				} catch (error) {
					console.log(error);
				}
			},


			getStarships: async () => {
				try { 
					const response = await fetch("https://swapi.dev/api/starships/");
					const data = await response.json();
					setStore({ starships: data.results });
				} catch (error) {
					console.log(error);
				}
			},

			getSingleStarship: async (id) => {
				try { 
					const response = await fetch("https://swapi.dev/api/starships/" + id);
					const data = await response.json();
					console.log(data);
					setStore({ nave: data});
				} catch (error) {
					console.log(error);
				}
			},

		}
	};
};

export default getState;
