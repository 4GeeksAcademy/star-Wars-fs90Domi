import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleVehicle = props => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();

	useEffect(() => {
		actions.getSingleVehicle(theid)
	}, [])
	console.log(store.vehicles);
	return (
		<div className="container mb-3">
			<div className="card-body row ">
				<div className='col-md-4'>
					<img
						src={`https://starwars-visualguide.com/assets/img/vehicles/${theid}.jpg`}
						className="card-img-top"
						alt={store.vehicles.name}
					/>
				</div>
				<div className='col-md-5'>
					<h1> {store.vehicles.name}</h1>
				</div>
			</div>
		</div >
	);
};

SingleVehicle.propTypes = {
	match: PropTypes.object
};
