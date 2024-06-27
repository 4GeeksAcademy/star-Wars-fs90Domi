import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Vehicles = () => {
    const { actions, store } = useContext(Context);

    useEffect(() => {
        actions.getVehicles();
    }, []);

    return (
        <div className="text-center mt-5">
            <h1 className="fw-bold font-monospace text-warning">Vehicles</h1>
            <div className="card-group bg-black">
                <div className="d-flex flex-row overflow-scroll">
                    {store.vehicles.map((vehicles, id) => (
                        <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }} key={id}>
                            <img
                                src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicles.url.split("/")[5]}.jpg`}
                                className="card-img-top"
                                alt={vehicles.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title"><strong>{vehicles.name}</strong></h5>
                            </div>

                            <div className="row-1">
                                <Link to={"/singlevehicle/" + (vehicles.url.split("/")[5])} >
                                    <button className="btn btn-outline-dark col-4 me-3">
                                        Mas info
                                    </button>
                                </Link>

                                <button className="btn btn-outline-dark col-2 ps-3" onClick={() => actions.addToFavorites(vehicles.name)}>
                                    <i className="fas fa-heart"></i>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};



