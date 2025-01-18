import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const FichaPlanet = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => { actions.cargarDellPlanet(params),[params] });
    const datos = [store.detallePlanets];
    const uidS = [store.uidPlanet];
    let toSaveFav = datos[0].name;
    


    return (
        <div className="jumbotron text-center ">
            {datos.map((item, index) => {
                let idPlanet = parseInt(uidS[0].uid) + 1;


                return (
                    <div className="container-fluid mb-3 mx-2 align-items-center" key={index}>
                        <h1 className="mb-3">Technical sheet of {item.name}</h1>
                        <div className="card mb-3 mx-3  bg-light d-flex justify-content-center">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={`https://starwars-visualguide.com/assets/img/planets/${idPlanet}.jpg`} className="img-fluid rounded-start mt-3 ms-1" style={{ width: "30rem", height: "30rem" }} alt={item.name} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body p-0">
                                        <div className="mb-5 me-3">
                                            <h1 className="card-title text-center bg-warning mt-2">Id on Star Wars: {uidS[0]._id}</h1>
                                            <p className="card-text ms-5">{uidS[0].description}</p>
                                            <span className="card-text me-"><small className="text-body-secondary">What would the Star Wars saga be without stars and planets? 
                                                In this worksheet we analyze {item.name}. On this planet with a diameter of {item.diameter}, its day lasts {item.rotation_period} hours and its orbital rotation or the duration of a year would take {item.orbital_period} days. The gravity 
                                            in relation to that of the Earth it´s {item.gravity} (1 is equal to that of the Earth). The general climate is {item.climate}, the type of terrain is {item.terrain}. Its water surface is {item.surface_water} %. The average population of the planet is {item.population} beings of different species. For more information, visit this url: <u>{item.url}</u></small></span>
                                        </div>

                                        <div className="row d-flex text-danger mx-0 mb-2">
                                            <div className="col-3 mx-0"><p><u>Diameter</u></p><p>{item.diameter} km</p></div>
                                            <div className="col-3 mx-0"><p><u>Rotation period (day)</u></p><p>{item.rotation_period} hours</p></div>
                                            <div className="col-3  mx-0"><p><u>Orbital period (year)</u></p><p>{item.orbital_period} days</p></div>
                                            <div className="col-3 mx-0"><p><u>Gravity</u> <br/>(Gravity on Earth 1)</p><p>{item.gravity} </p></div>
                                                                    

                                        </div>

                                        <div className="row d-flex text-danger mb-2">
                                            <div className="col-3  mx-0"><p><u>Terrain</u></p><p>{item.terrain}</p></div>
                                             <div className="col-3 mx-0"><p><u>Climate</u></p><p>{item.climate}</p></div>
                                             <div className="col-3  mx-0"><p><u>Population</u></p><p>{item.population} beings</p></div>
                                            <div className="col-3 "><p><u>Surface water</u></p><p className="fs-6">{item.surface_water} %</p></div>

                                        </div>

                                        <div className="row d-flex text-danger">
                                            <div className="col-6"><p><u>Created</u></p><p>{item.created}</p></div>
                                            <div className="col-6"><p><u>Edited</u></p><p className="fs-6">{item.edited}</p></div>
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

FichaPlanet.propTypes = {
    match: PropTypes.object
};
