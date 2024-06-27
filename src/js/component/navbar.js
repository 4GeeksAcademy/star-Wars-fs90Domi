import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);


    return (
        <nav className="navbar navbar-light mb-3">
            <div className="container-fluid">
                <div className="navbar-brand">
                    <img src="https://cdn.worldvectorlogo.com/logos/star-wars-4.svg"></img>
                </div>
                <div className="dropdown dropstart">
                    <button className="btn btn-red dropdown-toggle text-warning fs-2" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fab fa-galactic-senate"></i> ({store.favorites.length})
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {store.favorites.map((favorite, index) => (
                            <li key={index}>
                                <span className="dropdown-item px-2 ">{favorite}
                                    <button className="btn btn-outline-dark float-end" onClick={() => actions.addToFavorites(favorite)}>
                                        <i className="fas fa-trash text-warning "></i>
                                    </button>
                                </span>
                            </li>
                        ))}
                        {store.favorites.length === 0 && (
                            <li>
                                <span className="dropdown-item text-muted">No favorites selected</span>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
