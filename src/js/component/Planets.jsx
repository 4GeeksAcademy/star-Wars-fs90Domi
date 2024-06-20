import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Planets = () => {
  const { actions, store } = useContext(Context);

  useEffect(() => {
    actions.getPlanets();
  }, [actions]); 

  return (
    <div className="text-center mt-5">
      <h1>Planets</h1>
      <div className="card-group">
        <div className="d-flex flex-row overflow-scroll">
          {store.planets.map((planet) => (
            <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }} key={planet.uid}>
              <img
                src={`https://starwars-visualguide.com/assets/img/planets/${planet.url.split("/")[5]}.jpg`}
                className="card-img-top"
                alt={planet.name}
              />
              <div className="card-body">
                <h5 className="card-title"><strong>{planet.name}</strong></h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
