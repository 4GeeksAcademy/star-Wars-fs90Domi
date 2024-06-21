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
		<div className="card-body row ">
			 <div className='col-md-4'>
			<img
                src={`https://starwars-visualguide.com/assets/img/planets/${theid}.jpg`}
                className="card-img-top"
                alt={store.planeta.name}
              />
			  </div>
			  <div className='col-md-6'>  
			<h1> {store.planeta.name}</h1>
			</div>
		</div>
		</div>
	);
};

Singleplanets.propTypes = {
	match: PropTypes.object
};