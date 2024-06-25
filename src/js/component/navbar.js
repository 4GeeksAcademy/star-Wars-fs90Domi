import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    const removeFromFavorites = (item) => {
        actions.removeFromFavorites(item);
    };

    return (
        <nav className="navbar navbar-light mb-3 bg-black">
           <div className="d-flex">
            <div className="navbar-brand">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1920px-Star_Wars_Logo.svg.png"></img>
            </div>
            <div className="dropdown">
                <button className="btn btn-red dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                 <i className="fab fa-galactic-senate"> JEDI favorite </i> ({store.favorites.length})
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {store.favorites.map((favorite, index) => (
                        <li key={index}>
                            <span className="dropdown-item ">{favorite.name}</span>
                            <button className="btn btn-outline-dark col-2 ps-3" onClick={() => removeFromFavorites(favorite)}>
                                <i className="fas fa-trash "></i>
                            </button>
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
