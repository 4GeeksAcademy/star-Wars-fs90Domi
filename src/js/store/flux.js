const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes:[]
		},
		actions: {
			// Use getActions to call a function within a fuction
			
			getCharactars: async () => {
				try { 
					const response= await fetch ("https://www.swapi.tech/api/people")
					const data = await response.json ()
					setStore({personajes:data.results})
				} catch (error) {
					console.log(error);
				}
			}
			
		}
	};
};

export default getState;
