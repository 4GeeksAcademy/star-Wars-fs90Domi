import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Species = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container " >
            <h1 className="text-center">List os species on Star Wars</h1>
            <ul className="card-group d-flex justify-content-center" >
                {store.listSpecies.map((item, index) => {
                    

                    return (
                        <div className="d-flex" key={index}>
                            <div className="card mb-2 me-3" style={{ width: `18rem` }} >
                                <img src={`https://starwars-visualguide.com/assets/img/species/${item.uid}.jpg`} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">uid: {item.uid}</p>
                                  
                                    <Link to={`/fichaSpecies/${item.uid}`}>

                                        <button className="btn btn-primary">Detalls</button>
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
