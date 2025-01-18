import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Ficha = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {actions.cargarPersonaje(params);[params] });
	
	const datos = [store.detallesPersonaje];
	const uidS = [store.uidPersonaje];
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
									<img src={`https://starwars-visualguide.com/assets/img/characters/${uidS[0].uid}.jpg`} style={{ width: "25rem", height: "38rem" }} className="img-fluid rounded mt-2 ms-1" alt="..." />
								</div>
								<div className="col-md-8" >
									<div className="card-body p-0" >
										<div className="mb-5 me-3">
											<h1 className="card-title text-center bg-warning mt-2 ms-2">Id on Star Wars: {uidS[0]._id}</h1>
											<p className="card-text">{uidS[0].description}</p>
											<span className="card-text me-"><small className="text-body-secondary ms-2">This Star Wars character was created {item.created} and modified in the list {item.edited},
												with height {item.height} cm, hair color {item.hair_color}, eye color {item.eye_color}, skin color {item.skin_color} and weighing {item.mass} Kg.
												The year of birth, according to the year of Star Wars is {item.birth_year} and planet of birth <u>{item.homeworld}</u>. For more information, visit this url: <u>{item.url}</u></small></span>
										</div>

										<div className="row d-flex text-danger mx-0 mb-4">
											<div className="col-2 mx-0"><p><u>Height</u></p><p>{item.height} cm</p></div>
											<div className="col-2 mx-0"><p><u>Mass</u></p><p>{item.mass} kg</p></div>
											<div className="col-2  mx-0"><p><u>Hair color</u></p><p>{item.hair_color}</p></div>
											<div className="col-2 mx-0"><p><u>Skin color</u></p><p>{item.skin_color}</p></div>
											<div className="col-2  mx-0"><p><u>Eye color</u></p><p>{item.eye_color}</p></div>
											<div className="col-2 mx-0"><p><u>Birth year</u></p><p>{item.birth_year}</p></div>

										</div>

										<div className="row d-flex text-danger mb-4">
											<div className="col-4  mx-0"><p><u>Gender</u></p><p>{item.gender}</p></div>
											<div className="col-4"><p><u>Created</u></p><p>{item.created}</p></div>
											<div className="col-4 "><p><u>Edited</u></p><p className="fs-6">{item.edited}</p></div>

										</div>

										<div className="row d-flex text-danger">
											<div className="col-6"><p><u>Homeworld</u></p><p>{item.homeworld}</p></div>
											<div className="col-6"><p><u>Url</u></p><p>{item.url}</p></div>
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

Ficha.propTypes = {
	match: PropTypes.object
};
