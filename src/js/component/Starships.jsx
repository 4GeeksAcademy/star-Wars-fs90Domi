import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Starships = () => {
  const { actions, store } = useContext(Context);

  useEffect(() => {
    actions.getStarships();
  }, []);

  return (
    <div className="text-center mt-5">
      <h1>Starships</h1>
      <div className="card-group">
        <div className="d-flex flex-row overflow-scroll">
          {store.starships.map((starship,id) => (
            <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }} key={id}>
              <img
                src={`https://starwars-visualguide.com/assets/img/starships/${starship.url.split("/")[5]}.jpg`}
                className="card-img-top"
                alt={starship.name}
              />
              <div className="card-body">
                <h5 className="card-title"><strong>{starship.name}</strong></h5>
              </div>
              <Link to={"/singlestarship/" + (id+1)} >
              <button className="btn btn-outline-dark">
                mas info 
              </button> 
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

