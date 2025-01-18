import { useState } from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			listFavorites: ["Empty List"],
			listPersonajes: [],
			listPlanetas: [],
			listSpecies: [],
			detallesPersonaje: [],
			detalleSpecies: [],
			detallePlanets: [],
			uidPersonaje: [],
			uidPlanet: [],
			uidSpecies: []
		},
		actions: {
			// Use getActions to call a function within a fuction

			loadSomeData: () => {
				const options = { method: 'GET', headers: {} };
				fetch("https://www.swapi.tech/api/people/", options)
					.then(res => res.json())
					.then(data => {

						let results = data["results"];
						setStore({ "listPersonajes": results })
					})
					.catch(err => console.error(err))

			},
			cargarSpecies: () => {
				const options = { method: `GET`, headers: {} };
				fetch("https://www.swapi.tech/api/species/", options)
					.then(res => res.json())
					.then(data => {
						let results = data["results"];
						setStore({ "listSpecies": results })


					})
					.catch(err => console.error(err))
			},
			cargarDellSpecies: (props) => {
				const options = { method: `GET`, headers: { 'Content-Type': 'application/json' } };
				fetch(`https://www.swapi.tech/api/species/${props.theid}`, options)
					.then(res => res.json())
					.then(data => {
						let results = data["result"];
						setStore({ "uidSpecies": results });
						let properties = results["properties"];

						setStore({ "detalleSpecies": properties });
					})
			},

			cargarPlanetas: () => {
				const options = { method: `GET`, headers: {} };
				fetch("https://www.swapi.tech/api/planets/", options)
					.then(res => res.json())
					.then(data => {
						let results = data["results"];
						setStore({ "listPlanetas": results })
					})
					.catch(err => console.error(err))

			},
			cargarDellPlanet: (props) => {
				const options = { method: `GET`, headers: { 'Content-Type': 'application/json' } };
				fetch(`https://www.swapi.tech/api/planets/${props.theid}`, options)
					.then(res => res.json())
					.then(data => {
						let results = data["result"];
						setStore({ "uidPlanet": results });
						let properties = results["properties"];

						setStore({ "detallePlanets": properties });
					})
			},

			añadirFavorito: (añadirPerso) => {
				const store = getStore()
				if(store.listFavorites.includes("Empty List")){
					setStore({ "listFavorites": [añadirPerso] })
				}
				else if (!store.listFavorites.includes(añadirPerso)) {
					setStore({ "listFavorites": [...store.listFavorites, añadirPerso] })
				}

			},

			eliminarFav: (elimPerso) => {
				const store = getStore()
				const listDespElim = store.listFavorites.filter((item, t) => elimPerso != item)
				if(listDespElim.length !==0){
				setStore({"listFavorites": listDespElim})}
				else{
					setStore({"listFavorites": ["Empty List"]})
				}
			},

			cargarPersonaje: (props) => {
				// setStore({ "uidPersonaje": props.theid })
				const options = { method: `GET`, headers: { 'Content-Type': 'application/json' } };
				fetch(`https://www.swapi.tech/api/people/${props.theid}`, options)
					.then(res => res.json())
					.then(data => {
						let results = data["result"];
						setStore({ "uidPersonaje": results });
						let properties = results["properties"];

						setStore({ "detallesPersonaje": properties });


					})
					.catch(err => console.error(err))

			},


		}
	};
};

export default getState;
