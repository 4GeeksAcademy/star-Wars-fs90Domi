const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        { title: "FIRST", background: "white", initial: "white" },
        { title: "SECOND", background: "white", initial: "white" },
      ],
      characters: [],
      readLater: [], // Lista de personajes favoritos
    },
    actions: {
      loadCharacters: async () => {
        const store = getStore();
        // Si los personajes ya están cargados, no cargarlos nuevamente
        if (store.characters.length === 0) {
          try {
            const response = await fetch(
              "https://www.swapi.tech/api/people?page=1&limit=20"
            );
            const data = await response.json();

            if (data && data.results) {
              const charactersWithDetails = await Promise.all(
                data.results.map(async (character) => {
                  const characterId = character.url.split("/")[5];
                  const detailsResponse = await fetch(
                    `https://www.swapi.tech/api/people/${characterId}`
                  );
                  const detailsData = await detailsResponse.json();

                  const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`;

                  return {
                    uid: characterId,
                    name: detailsData.result.properties.name,
                    gender: detailsData.result.properties.gender || "Unknown",
                    birth_year:
                      detailsData.result.properties.birth_year || "Unknown",
                    eye_color:
                      detailsData.result.properties.eye_color || "Unknown",
                    height: detailsData.result.properties.height || "Unknown",
                    mass: detailsData.result.properties.mass || "Unknown",
                    skin_color:
                      detailsData.result.properties.skin_color || "Unknown",
                    hair_color:
                      detailsData.result.properties.hair_color || "Unknown",
                    homeworld:
                      detailsData.result.properties.homeworld || "Unknown",
                    image: imageUrl,
                  };
                })
              );

              setStore({ characters: charactersWithDetails });
            } else {
              console.error("API response does not have results:", data);
            }
          } catch (error) {
            console.error("Error fetching characters:", error);
          }
        }
      },

      toggleReadLater: (character) => {
        const store = getStore();
        const isFavorite = store.readLater.some(
          (fav) => fav.uid === character.uid
        );

        if (isFavorite) {
          // Si ya está en la lista, eliminarlo
          setStore({
            readLater: store.readLater.filter(
              (fav) => fav.uid !== character.uid
            ),
          });
        } else {
          // Si no está, agregarlo
          setStore({ readLater: [...store.readLater, character] });
        }
      },

      removeFromReadLater: (uid) => {
        const store = getStore();
        // Eliminar el personaje de favoritos según su uid
        setStore({
          readLater: store.readLater.filter((fav) => fav.uid !== uid),
        });
      },
    },
  };
};

export default getState;
