import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);


    return (
        <nav className="navbar navbar-light mb-3 bg-black">
           <div className="container-fluid">
            <div className="navbar-brand">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1920px-Star_Wars_Logo.svg.png"></img>
            </div>
            <div className="dropdown">
                <button className="btn btn-red dropdown-toggle text-warning fs-2" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                 <i className="fab fa-galactic-senate"></i> ({store.favorites.length})
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {store.favorites.map((favorite, index) => (
                        <li key={index}>
                            <span className="dropdown-item px-2 ">{favorite}
                            <button className="btn btn-outline-dark float-end" onClick={() => actions.addToFavorites(favorite)}>
                                <i className="fas fa-trash "></i>
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
