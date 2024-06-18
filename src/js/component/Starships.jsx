import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Starships = () => {
  const { actions, store } = useContext(Context);

  useEffect(() => {
    actions.getStarships(); // Corrected method name
  }, []);

  return (
    <div className="text-center mt-5">
      <h1>Starships</h1>
      <div className="card-group">
        <div className="d-flex flex-row overflow-scroll">
          {store.starships.map((item) => (
            <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }} key={item.uid}>
              <img src={`https://starwars-visualguide.com/assets/img/starships/${item.uid}.jpg`} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title"><strong>{item.name}</strong></h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
