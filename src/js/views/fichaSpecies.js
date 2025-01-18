import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const FichaSpecies = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {actions.cargarDellSpecies(params);[params]});
    const datos = [store.detalleSpecies];
    const uidS = [store.uidSpecies];
    let toSaveFav = datos[0].name;
    


    return (
        <div className="jumbotron text-center ">
            {datos.map((item, index) => {


                return (
                    <div className="container-fluid mb-3 mx-2 align-items-center" key={index}>
                        <h1 className="mb-3">Technical sheet of {item.name}</h1>
                        <div className="card mb-3 mx-3  bg-light d-flex justify-content-center">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={`https://starwars-visualguide.com/assets/img/species/${uidS[0].uid}.jpg`} className="img-fluid rounded mt-3 mx-2" style={{ width: "25rem", height: "30rem" }} alt={item.name}  />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body p-0">
                                        <div className="mb-5 me-3">
                                            <h1 className="card-title text-center bg-warning mt-3 ms-3">Id on Star Wars: {uidS[0]._id}</h1>
                                            <p className="card-text">{uidS[0].description}</p>
                                            <span className="card-text me-"><small className="text-body-secondary">In the "Star Wars universe" there are several 
                                                species of intelligent life. Each of them has very different characteristics. On this occasion we are talking about this species called {item.name},
                                                 the average life expectancy of this species is {item.average_lifespan} years. The average height is {item.average_height}, there 
                                                 is a variety of eye colors of {item.eye_colors} and hair color {item.hair_colors} and skin color {item.skin_colors}. The most common language is {item.language}. For more information, visit this url: <u>{item.url}</u></small></span>
                                        </div>
                                        
                                        <div className="row d-flex text-danger mx-0 mb-4">
                                            <div className="col-2 mx-0"><p><u>Classification</u></p><p>{item.classification}</p></div>
                                            <div className="col-2 mx-0"><p><u>Designation</u></p><p>{item.designation}</p></div>
                                            <div className="col-2  mx-0"><p><u>Average height</u></p><p>{item.average_height}</p></div>
                                            <div className="col-2 mx-0"><p><u>Average lifespan</u></p><p>{item.average_lifespan}</p></div>
                                            <div className="col-2  mx-0"><p><u>Hair colors</u></p><p>{item.hair_colors}</p></div>
                                            <div className="col-2 mx-0"><p><u>Skin colors</u></p><p>{item.skin_colors}</p></div>
                                            
                                        </div>
                                        
                                        <div className="row d-flex text-danger mb-4">
                                        <div className="col-4  mx-0"><p><u>Eye colors</u></p><p>{item.eye_colors}</p></div>
                                            <div className="col-3"><p><u>language</u></p><p>{item.language}</p></div>
                                            <div className="col-5 "><p><u>Homeworld</u></p><p className="fs-6">{item.homeworld}</p></div>
                                            
                                        </div>
                                        
                                        <div className="row d-flex text-danger">
                                            <div className="col-6"><p><u>created</u></p><p>{item.created}</p></div>
                                            <div className="col-6"><p><u>edited</u></p><p>{item.edited}</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )

            })}

            <Link to="/">
                <span className="btn btn-primary btn-lg" href="#" role="button">
                    Back home
                </span>
            </Link>
            <span className="btn btn-primary btn-lg ms-2" href="#" role="button" onClick={() => actions.añadirFavorito(toSaveFav)}>
				Add to favorites
			</span>
        </div>
    );
};

FichaSpecies.propTypes = {
    match: PropTypes.object
};
