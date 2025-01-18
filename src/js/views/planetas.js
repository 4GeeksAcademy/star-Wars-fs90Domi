import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/planetas.css";

export const Planetas = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container " >
            <h1 className="text-center">Lista de planetas Star Wars</h1>
            <ul className="card-group d-flex justify-content-center">
                {store.listPlanetas.map((item, index) => {
                   
                    let idPlanet = parseInt(item.uid) + 1;
                    return (
                        <div className="d-block" key={index}>
                            <div className="card mb-2 me-3" style={{ width: `18rem` }}>
                                <img src={`https://starwars-visualguide.com/assets/img/planets/${idPlanet}.jpg`} className="card-img-top" alt={item.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">uid: {item.uid}</p>

                                    <Link to={`/fichaPlanet/${item.uid}`}>
                                        <a href={item.url} className="btn btn-primary">More detalls</a>
                                    </Link>
                                </div>


                            </div>
                        </div>





                    );
                })}
            </ul>
            <div className="d-flex justify-content-center">
                <Link to="/">
                    <button className="btn btn-primary">Back home</button>
                </Link>
            </div>
        </div>
    );
};
