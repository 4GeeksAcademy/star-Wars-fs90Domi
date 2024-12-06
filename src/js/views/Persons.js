import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Persons = () => {
  const { store, actions } = useContext(Context);

  if (!store.characters || store.characters.length === 0) {
    return <div className="text-center mt-5">Loading characters...</div>;
  }

  return (
    <div className="container">
      <h1>Star Wars Characters</h1>
      <div className="row">
        {store.characters.map((character) => {
          return (
            <div className="col-6 col-sm-4 col-md-3 mb-4" key={character.uid}>
              <div className="card" style={{ width: "100%" }}>
                <img
                  src={
                    character.image ||
                    "https://starwars-visualguide.com/assets/img/placeholder.jpg"
                  }
                  className="card-img-top img-fluid" // Ajusta la imagen para que sea fluida
                  alt={character.name}
                  style={{ height: "200px", objectFit: "cover" }} // Ajusta la altura y el ajuste de la imagen
                />
                <div className="card-body">
                  <h5 className="card-title">{character.name}</h5>
                  <p className="card-text">
                    <strong>Gender:</strong> {character.gender} <br />
                    <strong>Birth Year:</strong> {character.birth_year} <br />
                  </p>
                  {/* Contenedor Flex para los botones */}
                  <div className="d-flex justify-content-between">
                    {/* Botón Learn More */}
                    <Link
                      to={`/single/${character.uid}`}
                      className="btn btn-outline-primary me-2"
                    >
                      Learn More
                    </Link>
                    {/* Botón Agregar alineado a la derecha */}
                    <button
                      className="btn btn-outline-warning"
                      onClick={() => actions.toggleReadLater(character)}
                    >
                      <i className="fa fa-regular fa-heart"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
