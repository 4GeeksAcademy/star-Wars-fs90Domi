export const ReadLater = () => {
  const { store } = useContext(Context);

  console.log(store.readLater); // Verifica que los personajes están en la lista de favoritos

  if (!store.readLater || store.readLater.length === 0) {
    return <div className="text-center mt-5">No items in Favorites.</div>;
  }

  return (
    <div className="container">
      <h1>Favorites</h1>
      <div className="row">
        {store.readLater.map((character) => (
          <div className="col-4 mb-4" key={character.uid}>
            <div className="card">
              <img
                src={
                  character.image ||
                  "https://starwars-visualguide.com/assets/img/placeholder.jpg"
                }
                className="card-img-top"
                alt={character.name}
              />
              <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">
                  <strong>Gender:</strong> {character.gender} <br />
                  <strong>Birth Year:</strong> {character.birth_year} <br />
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
