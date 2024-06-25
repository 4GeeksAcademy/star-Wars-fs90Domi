import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Singleplanets = props => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();

	useEffect(() => {
		actions.getSinglePlanet(theid)
	}, [])

	return (
		<div className="container mb-3">
			<div className="card-body row-2 ">
				<div className='col-md-4'>
					<img
						src={`https://starwars-visualguide.com/assets/img/planets/${theid}.jpg`}
						className="card-img-top"
						alt={store.planeta.name}
					/>
{/* // imagen que me paso jorge  principios  es para las imagenes rotas  */}
					{/* <img
						src={
							"https://starwars-visualguide.com/assets/img/planets/" +
							planet.url.split("/")[5] +
							".jpg"
						}
						className="card-img"
						alt="..."
						onError={(e) =>
						(e.target.src =
							"https://starwars-visualguide.com/assets/img/placeholder.jpg")
						}
					/>
					// final  */}

					<div className='col-md-5'>
						<p className="text-white"> NAME = {store.planeta.name}</p>
						<p className="text-white"> GENDER = {store.planeta.rotation_period}</p>
						<p className="text-white"> HAIR COLOR = {store.planeta.orbital_period}</p>
						<p className="text-white"> SKIN COLOR = {store.planeta.diameter}</p>
						<p className="text-white"> EYE COLOR = {store.planeta.climate}</p>
						<p className="text-white"> BIRTH YEAR = {store.planeta.gravity}</p>
						<p className="text-white"> MASS = {store.planeta.terrain}</p>
						<p className="text-white"> HEIGHT = {store.planeta.surface_water}</p>
						<p className="text-white"> HEIGHT = {store.planeta.population}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

Singleplanets.propTypes = {
	match: PropTypes.object
};