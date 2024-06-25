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
					{theid == 1 ?
						<img
							src="https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png"
							className="card-img-top"
							alt={store.planeta.name}
						/>
						:
						<img
							src={`https://starwars-visualguide.com/assets/img/planets/${theid}.jpg`}
							className="card-img-top"
							alt={store.planeta.name}
						/>
					}
					<div className='col-md-5'>
						<p className="text-white"> NAME = {store.planeta.name}</p>
						<p className="text-white"> ROTATION PERIOD = {store.planeta.rotation_period}</p>
						<p className="text-white"> ORBITAL PERIOD = {store.planeta.orbital_period}</p>
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