import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Characters = () => {
    const { actions, store } = useContext(Context);

    useEffect(() => {
        actions.getCharacters();
    }, []);

    return (
        <div className="text-center mt-5 ">
            <h1 className="fw-bold font-monospace text-warning">Characters</h1>
            <div className="card-group text-bg-dark">
                <div className="d-flex flex-row overflow-scroll">
                    {store.personajes.map((item, id) => (
                        <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }} key={id}>
                            <img
                                src={`https://starwars-visualguide.com/assets/img/characters/${item.url.split("/")[5]}.jpg`}
                                className="card-img-top"
                                alt={item.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title text-success"><strong>{item.name}</strong></h5>
                            </div>

                            <div className="row-1">
                                <Link to={"/single/" + (id + 1)} >
                                    <button className="btn btn-outline-success col-4 me-3 text-success">
                                    INFO
                                    </button>
                                </Link>

                                <button className="btn btn-outline-success col-2 ps-3" onClick={() => actions.addToFavorites(item.name)}>
                                    <i className="fas fa-heart text-success"></i>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
