import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Planets = () => {
  const { actions, store } = useContext(Context);

  useEffect(() => {
    actions.getPlanets();
  }, []);

  return (
    <div className="text-center mt-5">
      <h1 className="text-title fw-bold font-monospace text-warning">Planets</h1>
      <div className="card-group">
        <div className="d-flex flex-row overflow-scroll">
          {store.planets.map((planet, id) => (
            <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }} key={id}>
              {id == 0 ?
                <img
                  src="https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png"
                  className="card-img-top"
                  alt={planet.name}
                />
                // sino se representa con dos puntos aqui :
                :
                <img
                  src={`https://starwars-visualguide.com/assets/img/planets/${planet.url.split("/")[5]}.jpg`}
                  className="card-img-top"
                  alt={planet.name}
                />
              }
              <div className="card-body">
                <h5 className="card-title text-danger"><strong>{planet.name}</strong></h5>
              </div>

              <div className="row-1">

                <Link to={"/singleplanet/" + (id + 1)} >
                  <button className="btn btn-outline-danger col-4 me-3">
                    INFO
                  </button>
                </Link>

                <button className="btn btn-outline-danger col-2 ps-3" onClick={() => actions.addToFavorites(planet.name)}>
                  <i className="fas fa-heart text-danger"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



